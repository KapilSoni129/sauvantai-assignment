// Assuming Node.js version 12 or higher with ES modules support

import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql2/promise";

import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Replace with your actual MySQL connection details
const connectionPool = mysql.createPool({
  host: "localhost",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "creditloans",
});

app.use(bodyParser.json()); // Parse JSON body data

// CORS configuration for localhost:3000
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with your frontend origin if different
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.post("/loan-applications", async (req, res) => {
  try {
    const connection = await connectionPool.getConnection();
    const sql = `
      INSERT INTO loanrequest (
        fullName,
        loanAmount,
        loanTenure,
        employmentStatus,
        reasonForLoan,
        employmentAddress
      )
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const [results] = await connection.execute(sql, [
      req.body.fullName,
      parseInt(req.body.loanAmount),
      parseInt(req.body.loanTenure),
      req.body.employmentStatus,
      req.body.reasonForLoan,
      req.body.employmentAddress,
    ]);

    await connection.release(); // Release connection back to pool
    res.json({
      message: "Loan application submitted successfully!",
      id: results.insertId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting loan application" });
  }
});

app.get("/loan-applications", async (req, res) => {
  try {
    const connection = await connectionPool.getConnection();
    const [results] = await connection.execute("SELECT * FROM loanrequest");

    const loans = results.map((loan) => ({
      id: loan.id,
      fullName: loan.fullName,
      loanAmount: loan.loanAmount,
      loanTenure: loan.loanTenure,
      employmentStatus: loan.employmentStatus,
      reasonForLoan: loan.reasonForLoan,
      employmentAddress: loan.employmentAddress,
      showButton: loan.showButton,
      status: loan.status,
    }));

    connection.release(); // Release the connection back to the pool

    res.json(loans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching loan applications" });
  }
});

app.post("/status-change", async (req, res) => {
  try {
    const { id, newStatus } = req.body;

    // Validate newStatus
    const allowedStatus = ["approved", "verified", "rejected"];
    if (!allowedStatus.includes(newStatus)) {
      return res.status(400).json({ message: "Invalid status provided." });
    }

    // Update status in the database
    const connection = await connectionPool.getConnection();
    const [result] = await connection.execute(
      "UPDATE loanrequest SET status = ? WHERE id = ?",
      [newStatus, id]
    );
    connection.release();

    // Check if any rows were affected
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Loan request not found." });
    }

    return res.status(200).json({ message: "Status updated successfully." });
  } catch (error) {
    console.error("Error updating status:", error);
    return res.status(500).json({ message: "Error updating status." });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

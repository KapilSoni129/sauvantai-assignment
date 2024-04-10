"use client";

import React, { useState, useEffect } from "react";
import { FaSort, FaFilter, FaEllipsisV } from "react-icons/fa";

// const loansData = [
//   {
//     id: 1,
//     loanOfficer: "John Doe",
//     amount: 5000,
//     dateApplied: "2023-04-10",
//     status: "Pending",
//     profilePic: "https://via.placeholder.com/32", // Replace with real image path if available
//   },
//   {
//     id: 2,
//     loanOfficer: "Jane Smith",
//     amount: 10000,
//     dateApplied: "2023-04-09",
//     status: "Approved",
//     profilePic: "https://via.placeholder.com/32", // Replace with real image path if available
//   },
// ];

const LoanTable = () => {
  const [loansData, setLoans] = useState([]);
  //   const [openDropdownId, setOpenDropdownId] = useState(null);

  //   const toggleDropdown = (id) => {
  //     setOpenDropdownId(openDropdownId === id ? null : id);
  //   };

  useEffect(() => {
    fetchLoanApplications();
  }, []);

  const fetchLoanApplications = async () => {
    try {
      const response = await fetch("http://localhost:8000/loan-applications", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      //   console.log("Loan applications data:", data);
      setLoans(data);
    } catch (error) {
      console.error("Error fetching loan applications:", error);
    }
  };

  //   console.log(loansData);
  const [openDropdownId, setOpenDropdownId] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdownId((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleApproval = async (id) => {
    try {
      const response = await fetch("http://localhost:8000/status-change", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, newStatus: "approved" }),
      });
      if (response.ok) {
        console.log("Loan approved");
        // You may want to update the UI or fetch loan data again after approval
      } else {
        console.error("Failed to approve loan");
      }
    } catch (error) {
      console.error("Error approving loan:", error);
    }
  };

  const handleRejection = async (id) => {
    try {
      const response = await fetch("http://localhost:8000/status-change", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, newStatus: "rejected" }),
      });
      if (response.ok) {
        console.log("Loan rejecteds");
        // You may want to update the UI or fetch loan data again after approval
      } else {
        console.error("Failed to approve loan");
      }
    } catch (error) {
      console.error("Error approving loan:", error);
    }
  };

  const handleVerification = async (id) => {
    try {
      const response = await fetch("http://localhost:8000/status-change", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, newStatus: "verified" }),
      });
      if (response.ok) {
        console.log("Loan verified");
        // You may want to update the UI or fetch loan data again after approval
      } else {
        console.error("Failed to approve loan");
      }
    } catch (error) {
      console.error("Error approving loan:", error);
    }
  };

  return (
    <div className="p-5 mx-20 mt-5 bg-white">
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl">Applied Loans</div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-2 py-1 rounded text-sm">
            <FaSort /> Sort
          </button>
          <button className="flex items-center gap-1 px-2 py-1 rounded text-sm">
            <FaFilter /> Filter
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2 border border-gray-300">Loan Officer</th>
              <th className="px-4 py-2 border border-gray-300">Amount</th>
              <th className="px-4 py-2 border border-gray-300">Date Applied</th>
              <th className="px-4 py-2 border border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {loansData.map((loan) => (
              <tr key={loan.id} className="border-b border-gray-300">
                <td className="px-4 py-2 border-r border-l border-gray-300 flex items-center">
                  <img
                    src="https://via.placeholder.com/32"
                    alt="Profile"
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <div className="text-lg">{loan.fullName}</div>
                    <div className="text-xs text-gray-500">
                      Updated 1 day ago
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 border-r border-gray-300">
                  <div>
                    <div className="text-lg">{`$${loan.loanAmount}`}</div>
                    <div className="text-xs text-gray-500">
                      {loan.loanAmount > 0 ? "Not Debt Yet" : "-"}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 border-r border-gray-300">
                  <div>
                    <div className="text-lg">4/10/2024</div>
                    <div className="text-xs text-gray-500">5:30 PM</div>
                  </div>
                </td>
                <td className="px-4 py-2 border-r border-gray-300">
                  <div className="flex flex-row items-center">
                    <div>{loan.status}</div>
                    <div className="ml-auto">
                      <button
                        className="text-gray-500 hover:text-black "
                        onClick={() => toggleDropdown(loan.id)}
                      >
                        <FaEllipsisV />
                      </button>
                      {openDropdownId[loan.id] && (
                        <div className="absolute bg-white border border-gray-800 rounded-md shadow-lg">
                          <button
                            href="/user/dashboard"
                            className="block px-2 py-1 text-sm text-gray-800 hover:bg-gray-200 w-full rounded-md"
                            onClick={() => handleVerification(loan.id)}
                          >
                            Verify
                          </button>
                          <button
                            href="/user/dashboard"
                            onClick={() => handleApproval(loan.id)}
                            className="block px-2 py-1 text-sm text-gray-800 hover:bg-gray-200 w-full rounded-md"
                          >
                            Aprove
                          </button>
                          <button
                            href="/user/dashboard"
                            onClick={() => handleRejection(loan.id)}
                            className="block px-2 py-1 text-sm text-gray-800 hover:bg-gray-200 w-full rounded-md"
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanTable;

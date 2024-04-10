import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import AdminBoard from "@/components/adminboard";
import LoanTable from "@/components/loantable";

export default function Admin() {
  return (
    <div>
      <Navbar userTypes="Admin" />
      <div style={{ display: "flex" }}>
        <Sidebar userName="John Doe" />
        <div className="w-full bg-gray-200">
          <AdminBoard />
          <LoanTable />
        </div>
      </div>
    </div>
  );
}

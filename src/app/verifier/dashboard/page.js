import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import VerifyBoard from "@/components/verifyboard";
import LoanTable from "@/components/loantable";

export default function Verifier() {
  return (
    <div>
      <Navbar userTypes="Admin" />
      <div style={{ display: "flex" }}>
        <Sidebar userName="John Doe" />
        <div className="w-full bg-gray-200">
          <VerifyBoard />
          <LoanTable />
        </div>
      </div>
    </div>
  );
}

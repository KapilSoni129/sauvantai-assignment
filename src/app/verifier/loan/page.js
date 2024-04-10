import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import UserDashboard from "@/components/user";

export default function User() {
  return (
    <div>
      <Navbar userTypes="User" />

      <div style={{ display: "flex" }}>
        <Sidebar userName="John Doe" />
        <UserDashboard />
      </div>
    </div>
  );
}

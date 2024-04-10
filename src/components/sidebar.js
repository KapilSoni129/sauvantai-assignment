// components/Sidebar.js
import {
  FaHome,
  FaMoneyBill,
  FaUserFriends,
  FaUser,
  FaMoneyCheck,
  FaUniversity,
  FaSignOutAlt,
  FaBuilding,
  FaCalendar,
  FaCog,
  FaUniversalAccess,
  FaFileInvoiceDollar,
  FaFileContract,
  FaFileSignature,
  FaFileInvoice,
} from "react-icons/fa";

const Sidebar = ({ userName }) => {
  return (
    <div className="bg-custom-green text-white w-64 h-full p-4 flex flex-col justify-between">
      <div className="flex items-center mb-4">
        <FaUser className="w-12 h-12 rounded-full mr-4" />
        <span className="text-lg font-semibold">{userName}</span>
      </div>
      <nav>
        <ul>
          <li className="py-2 flex items-center border-t">
            <FaHome className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Dashboard
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <FaUserFriends className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Borrowers
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <FaMoneyBill className="w-6 h-6 mr-2" />
            <a
              href="/user/loan"
              className="block hover:bg-green-800 px-4 py-2 rounded"
            >
              Loans
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <FaMoneyCheck className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Repayments
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <FaUniversity className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Accounting
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <FaFileContract className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Reports
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <FaBuilding className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Collateral
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <FaUniversalAccess className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Access Configurations
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <FaFileInvoice className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Savings
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <FaFileInvoiceDollar className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Expenses
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <FaFileSignature className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              E-signature
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <FaUserFriends className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Investor Accounts
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <FaCalendar className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Calendar
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <FaCog className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Settings
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <FaSignOutAlt className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Sign Out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

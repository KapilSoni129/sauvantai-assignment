"use client";
import React, { useState } from "react";
import {
  FaSearch,
  FaMoneyBill,
  FaSort,
  FaFilter,
  FaEllipsisV,
  FaUser,
} from "react-icons/fa";

import LoanForm from "./loanform";
import LoanTable from "./loantable";

const UserDashboard = () => {
  const [isLoanFormOpen, setIsLoanFormOpen] = useState(false);

  const handleGetLoanClick = () => {
    setIsLoanFormOpen(true);
  };

  const handleCloseLoanForm = () => {
    setIsLoanFormOpen(false);
  };

  return (
    <div className="bg-gray-200 w-full">
      <div className="flex justify-center bg-gray-200">
        <div className="p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-[#6B9908] p-3 flex items-center justify-center">
                <FaMoneyBill className="text-white size-10 " />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-[#6B9908]">DEFICIT</h1>
                <div className="flex gap-1">
                  <span className="text-[10px] text-[#6B9908]">$</span>
                  <p className="font-extrabold text-xl text-[#6B9908]">0.0</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <button
                className="bg-[#6B9908] shadow-lg hover:bg-[#6b9908cf] p-1 pr-2 pl-2 rounded-sm"
                onClick={handleGetLoanClick}
              >
                Get a Loan
              </button>
              <LoanForm isOpen={isLoanFormOpen} onClose={handleCloseLoanForm} />
            </div>
          </div>
          <div className="mt-4 flex flex-col justify-center items-center">
            <div className="flex rounded-md overflow-hidden bg-white text-black justify-between mb-2">
              <button className="px-12 py-1.5 hover:bg-green-100">
                Borrow Cash
              </button>
              <button className="px-12 py-1.5 hover:bg-green-100 border-r border-l">
                Transaction
              </button>
              <button className="px-12 py-1.5 hover:bg-green-100">
                Deposit Cash
              </button>
            </div>
            <div className="flex items-center bg-white border border-gray-300 rounded-md w-full">
              <span className="pl-3 pr-1">
                <FaSearch className="text-gray-500" />
              </span>
              <input
                type="text"
                placeholder="Search for loans"
                className="px-2 py-1 outline-none w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <LoanTable />
    </div>
  );
};

export default UserDashboard;

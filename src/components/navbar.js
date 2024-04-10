"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaBell,
  FaEnvelope,
  FaUserCircle,
  FaCaretDown,
  FaBars,
} from "react-icons/fa";

const Navbar = ({ userTypes }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userType, setUserType] = useState(userTypes);

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white py-4 border-b border-custom-green">
      <div className="mx-4 flex justify-between items-center">
        <div className="flex items-center">
          <button className="text-custom-green font-bold text-xl relative flex items-center space-x-4">
            <FaBars className="text-custom-green" />
            <div>CREDIT LOAN</div>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-custom-green hover:text-green-700">
            Home
          </Link>
          <Link href="#" className="text-custom-green hover:text-green-700">
            Payments
          </Link>
          <Link href="#" className="text-custom-green hover:text-green-700">
            Budget
          </Link>
          <Link href="#" className="text-custom-green hover:text-green-700">
            Card
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <FaBell className="text-custom-green" />
          <FaEnvelope className="text-custom-green" />
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleDropdown}
            >
              <FaUserCircle className="text-custom-green" />
              <span className="text-custom-green ml-2 mr-2">{userType}</span>
              <FaCaretDown className="text-custom-green" />
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-custom-green rounded-md shadow-lg">
                <Link
                  href="/user/dashboard"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full rounded-md"
                >
                  User
                </Link>
                <Link
                  href="/verifier/dashboard"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full rounded-md"
                >
                  Verifier
                </Link>
                <Link
                  href="/admin/dashboard"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full rounded-md"
                >
                  Admin
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

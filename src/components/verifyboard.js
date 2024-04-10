import React from "react";
import {
  FaUser,
  FaChartLine,
  FaBookOpen,
  FaLock,
  FaCog,
  FaRegLightbulb,
  FaChevronRight,
} from "react-icons/fa";

const boxes = [
  { id: 1, icon: FaUser, amount: 200, content: "Content for box 1" },
  {
    id: 2,
    icon: FaChartLine,
    amount: 200,
    content: "Content for box 2",
  },
  {
    id: 3,
    icon: FaBookOpen,
    amount: 200,
    content: "Content for box 3",
  },
  { id: 4, icon: FaLock, amount: 200, content: "Content for box 4" },
  { id: 5, icon: FaCog, amount: 200, content: "Content for box 5" },
  {
    id: 6,
    icon: FaRegLightbulb,
    amount: 200,
    content: "Content for box 6",
  },
];

const VerifyBoard = () => {
  return (
    <div className="bg-gray-200 w-full">
      <div className="flex flex-col justify-center mx-20 py-2">
        <div className="flex flex-row pt-8 mb-2 items-center">
          <div className="text-lg font-bold">Dashboard</div>
          <FaChevronRight className="text-lg" />
          <div className="text-2xl font-bold">Loans</div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {boxes.map((box) => (
            <div key={box.id} className="flex rounded-lg shadow-md">
              <div className="bg-custom-green px-6 py-4 flex items-center text-white text-3xl">
                {box.icon()}
              </div>
              <div className="bg-white px-4 py-4 flex-grow">
                <div className="font-bold text-lg">{box.amount}</div>
                <div className="text-xs text-gray-500">{box.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerifyBoard;

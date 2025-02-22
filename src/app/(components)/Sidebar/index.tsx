"use client";
import { Menu } from "lucide-react";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/app/redux";
import { SetIsSidebarCollapsed } from "@/state";

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidbar = () => {
    dispatch(SetIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transiton-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      {/* <---------------Top Logo---------------> */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 `}
      >
        <div>Logo</div>
        <h1
          className={`${
            isSidebarCollapsed ? "hidden" : "block"
          } font-extrabold text-2xl`}
        >
          R4STOCK
        </h1>

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidbar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* <---------------Links---------------> */}
      <div className="flex-grow mt-8"></div>

      {/* <---------------Footer---------------> */}
      <div>
        <p className="text-center text-xs text-gray-500">&copy; 2024 R4stock</p>
      </div>
    </div>
  );
};

export default Sidebar;

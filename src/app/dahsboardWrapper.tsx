"use client";

import React, { useEffect } from "react";
import StoreProvider from "./redux";
import { useAppSelector, useAppDispatch } from "./redux";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  //dark mode toggle 
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  });

  return (
    <div className={`${isDarkMode? "dark" : "light"} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      <Sidebar />

      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};


// the reason we created a wrapper so that the the children:<DashboardLayout/> can accesss the value provided by the provider
// we have to provide the Providers minimum one level above so that we can access in the child components 
const DahsboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DahsboardWrapper;

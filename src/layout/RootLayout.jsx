import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="root__grid min-h-screen">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

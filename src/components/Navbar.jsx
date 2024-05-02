import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="h-[50px] w-full px-4 bg-cyan-950 border-b-2">
      <div className="container h-full flex items-center justify-between">
        <Link to={"/"}>
          <img className="w-[100px]" src="./logo.png" alt="" />
        </Link>
        <div className="flex">
          <Link to={"/"} className="text-white">
            USER
          </Link>
        </div>
      </div>
    </header>
  );
};

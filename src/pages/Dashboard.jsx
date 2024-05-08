import {
  PencilSimple,
  SignOut,
  TrashSimple,
  UserCircle,
} from "@phosphor-icons/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const admin = JSON.parse(localStorage.getItem("adminInfo"));
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <section className="h-full flex items-center justify-center bg-cyan-900">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl text-white">UserName: {admin.name}</h1>
        <h1 className="text-xl text-white">User Email: {admin.email}</h1>
        <div className="flex gap-4 items-center">
          <button className="bg-[#16a34a] py-3 px-5 rounded-md text-white flex items-center gap-2 select-none">
            Edit profile
            <PencilSimple />
          </button>
          <button className="bg-[#f85959] py-3 px-5 rounded-md text-white flex items-center gap-2 select-none">
            Delete admin
            <TrashSimple />
          </button>
          <button
            className="bg-[#212121] py-3 px-5 text-white rounded-md flex items-center gap-2 select-none"
            onClick={LogOut}
          >
            Log out <SignOut />
          </button>
        </div>
      </div>
    </section>
  );
};

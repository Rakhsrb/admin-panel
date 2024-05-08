import {
  PencilSimple,
  SignOut,
  TrashSimple,
  User,
} from "@phosphor-icons/react";
import React from "react";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  const { userData } = useSelector((state) => state.mainSlice);
  const { admin } = userData;

  const LogOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <section className="h-full bg-cyan-900">
      <div className="flex items-center justify-center h-full flex-col gap-5">
        <User
          size={100}
          color="white"
          className="bg-cyan-700 rounded-full border-4 "
        />
        {/* <h1 className="text-2xl text-white">User Name: {admin.name}</h1>
        <h1 className="text-xl text-white">User Email: {admin.email}</h1> */}
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
            className="bg-[#212121] py-3 px-5 rounded-md text-white flex items-center gap-2 select-none"
            onClick={LogOut}
          >
            Log out <SignOut />
          </button>
        </div>
      </div>
    </section>
  );
};

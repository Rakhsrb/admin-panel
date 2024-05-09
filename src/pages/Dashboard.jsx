import { PencilSimple, SignOut, TrashSimple } from "@phosphor-icons/react";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteAdmin } from "../toolkit/Slicer";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { baseUrlApi, config } = useSelector((state) => state.mainSlice);
  const admin = JSON.parse(localStorage.getItem("adminInfo"));
  const LogOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (confirm.isConfirmed) {
      try {
        // await axios.delete(baseUrlApi + "api/admin/delete/" + id, config);
        // dispatch(deleteAdmin(id));
        LogOut();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      } catch (error) {
        console.error("Error deleting project:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to delete project.",
          icon: "error",
        });
      }
    }
  };

  return (
    <section className="h-full flex items-center justify-center bg-cyan-900">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl text-white">UserName: {admin?.name}</h1>
        <h1 className="text-xl text-white">User Email: {admin?.email}</h1>
        <div className="flex gap-4 items-center">
          <Link
            to={`edit-admin/${admin._id}`}
            className="bg-[#16a34a] py-3 px-5 rounded-md text-white flex items-center gap-2 select-none"
          >
            Edit profile
            <PencilSimple />
          </Link>
          <button
            onClick={() => handleDelete(admin._id)}
            className="bg-[#f85959] py-3 px-5 rounded-md text-white flex items-center gap-2 select-none"
          >
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

import React from "react";
import { Link } from "react-router-dom";

export const Admins = () => {
  return (
    <section className="h-full p-5 bg-cyan-50">
      <div className="h-[20vh] flex justify-between items-center">
        <h1 className="text-5xl">Adminlar</h1>
        <Link
          to={"/add-admin"}
          className="bg-green-600 py-3 px-5 rounded-md text-white font-semibold"
        >
          Yangi Admin Qo'shish
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className="border-2 border-cyan-900">
            <td className="p-4">Suhrob</td>
            <td className="p-4">suhrobrahmatullayev973132@gmail.com</td>
            <td className="p-4 flex gap-4 justify-center items-center">
              <Link className="bg-green-900 text-white rounded-md px-2">
                View
              </Link>
              <Link className="bg-cyan-900 text-white rounded-md px-2">
                Edit
              </Link>
              <button className="bg-red-800 text-white rounded-md px-2">
                Delete
              </button>
            </td>
          </tr>
          <tr className="border-2 border-cyan-900">
            <td className="p-4">Murod</td>
            <td className="p-4">Admin@gmail.com</td>
            <td className="p-4 flex gap-4 justify-center items-center">
              <Link className="bg-green-900 text-white rounded-md px-2">
                View
              </Link>
              <Link className="bg-cyan-900 text-white rounded-md px-2">
                Edit
              </Link>
              <button className="bg-red-800 text-white rounded-md px-2">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

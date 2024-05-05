import React from "react";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <section className="h-full p-5 bg-cyan-50">
      <div className="h-[20vh] flex justify-between items-center">
        <h1 className="text-5xl">Portfolio</h1>
        <Link
          to={"/add-portfolio"}
          className="bg-green-600 py-3 px-5 rounded-md text-white font-semibold"
        >
          Portfolio Qo'shish
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-4">Title</th>
            <th className="p-4">Image</th>
            <th className="p-4">Category</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className="border-2 border-cyan-900">
            <td className="p-4">React.js</td>
            <td className="p-4 flex justify-center">
              <img
                className="w-[100px] h-[40px] object-cover"
                src="https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/2EP14mWkbx9sq03nWnRSGT/f1d22d88bb5dde030275f9520c0f2e92/React_YT_Thumbnail.png"
                alt=""
              />
            </td>
            <td>Web development</td>
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
            <td className="p-4">Next.js</td>
            <td className="p-4 flex justify-center">
              <img
                className="w-[100px] h-[40px] object-cover"
                src="https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg"
                alt=""
              />
            </td>
            <td>3D Modeling</td>
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

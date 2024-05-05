import React from "react";
import { Link } from "react-router-dom";

export const Team = () => {
  return (
    <section className="h-full p-5 bg-cyan-50">
      <div className="h-[20vh] flex items-center justify-center">
        <h1 className="text-5xl">Xodimlar</h1>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Image</th>
            <th className="p-4">Job</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className="border-2 border-cyan-900">
            <td className="p-4">Suhrob</td>
            <td className="p-4 flex justify-center">
              <img
                className="w-[100px] h-[40px] object-cover"
                src="https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/2EP14mWkbx9sq03nWnRSGT/f1d22d88bb5dde030275f9520c0f2e92/React_YT_Thumbnail.png"
                alt=""
              />
            </td>
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
            <td className="p-4">Suhrob</td>
            <td className="p-4 flex justify-center">
              <img
                className="w-[100px] h-[40px] object-cover"
                src="https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/2EP14mWkbx9sq03nWnRSGT/f1d22d88bb5dde030275f9520c0f2e92/React_YT_Thumbnail.png"
                alt=""
              />
            </td>
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
          </tr>{" "}
        </tbody>
      </table>
    </section>
  );
};

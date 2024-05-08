import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Projects = () => {
  const { portfolio } = useSelector((state) => state.mainSlice);
  const { data, isError, isPending } = portfolio;

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
        <thead className="border-2 border-cyan-800">
          <tr>
            <th className="p-4">Title</th>
            <th className="p-4">Image</th>
            <th className="p-4">Category</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.length > 0 ? (
            data.map((elem) => (
              <tr
                key={elem.id}
                className="text-center border-2 border-cyan-800"
              >
                <td>{elem.title}</td>
                <td className="flex justify-center">
                  <img src={elem.image} alt="" />
                </td>
                <td>{elem.category}</td>
                <td>
                  <Link className="bg-green-900 text-white rounded-md p-2">
                    View
                  </Link>
                  <Link
                    to={`/edit-portfolio/${elem.id}`}
                    className="bg-cyan-900 text-white rounded-md p-2 mx-3"
                  >
                    Edit
                  </Link>
                  <button className="bg-red-800 text-white rounded-md p-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-center border-2 border-cyan-800">
              <td>No Data...</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

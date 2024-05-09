import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTeamError, getTeamPending, getTeamSuccess } from "../toolkit/Slicer";
import axios from "axios";

export const Team = () => {
  const dispatch = useDispatch();
  const { team, baseUrlApi } = useSelector((state) => state.mainSlice);
  const { data, isError, isPending } = team;

  useEffect(() => {
    async function getData(url) {
      try {
        dispatch(getTeamPending());
        const response = (await axios.get(url + "api/team/")).data.data;
        dispatch(getTeamSuccess(response));
      } catch (error) {
        dispatch(getTeamError());
        console.log(error);
      }
    }
    getData(baseUrlApi);
  }, []);

  return (
    <section className="h-full p-5 bg-cyan-50">
      <div className="h-[20vh] flex justify-between items-center">
        <h1 className="text-5xl">Xodimalar</h1>
        <Link
          to={"/add-worker"}
          className="bg-green-600 py-3 px-5 rounded-md text-white font-semibold"
        >
          Yangi xodimlar qo'shish
        </Link>
      </div>
      <table className="w-full">
        <thead className="border-2 border-cyan-800">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Image</th>
            <th className="p-4">Job</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {isPending ? (
            <tr className="text-center border-2 border-cyan-800">
              < td > Loading...</td>
            </tr>
          ) : (
            data.length > 0 ? (
              data.map((elem) => (
                <tr
                  key={elem.id}
                  className="text-center border-2 border-cyan-800"
                >
                  <td>{elem.name}</td>
                  <td className="flex justify-center">
                    <img src={elem.image} alt="" />
                  </td>
                  <td>{elem.job}</td>
                  <td>
                    <Link className="bg-green-900 text-white rounded-md p-2">
                      View
                    </Link>
                    <Link
                      to={`/edit-worker/${elem.id}`}
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
            )
          )}
        </tbody>
      </table >
    </section >
  );
};

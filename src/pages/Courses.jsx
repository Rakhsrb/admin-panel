import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteCourse,
  getServicesError,
  getServicesPending,
  getServicesSuccess,
} from "../toolkit/Slicer";
import Swal from "sweetalert2";

export const Courses = () => {
  const dispatch = useDispatch();
  const { services, baseUrlApi } = useSelector((state) => state.mainSlice);
  const { data, isError, isPending } = services;

  useEffect(() => {
    async function getData(url) {
      try {
        dispatch(getServicesPending());
        const response = (await axios.get(url + "api/courses/")).data.data;
        dispatch(getServicesSuccess(response));
      } catch (error) {
        dispatch(getServicesError());
        console.log(error);
      }
    }
    getData(baseUrlApi);
  }, []);

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
        dispatch(deleteCourse(id));
        await axios.delete(baseUrlApi + "api/projects/delete/" + id, config);
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
    <section className="h-full p-5 bg-cyan-50">
      <div className="h-[20vh] flex justify-between items-center">
        <h1 className="text-5xl">Kurslar</h1>
        <Link
          to={"/add-course"}
          className="bg-green-600 py-3 px-5 rounded-md text-white font-semibold"
        >
          Yangi Kurs Qo'shish
        </Link>
      </div>
      <table className="w-full">
        <thead className="border-2 border-cyan-800">
          <tr>
            <th className="p-4">Title</th>
            <th className="p-4">Image</th>
            <th className="p-4">Price</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {!isError ? (
            isPending ? (
              <tr className="text-center border-2 border-cyan-800">
                <td>Loading...</td>
              </tr>
            ) : data.length > 0 ? (
              data.map((elem) => (
                <tr
                  key={elem._id}
                  className="text-center border-2 border-cyan-800 bg-white"
                >
                  <td>{elem.title}</td>
                  <td>
                    {elem.images.length > 0 ? (
                      <img src={elem.images} alt="" />
                    ) : (
                      "No image"
                    )}
                  </td>
                  <td>{elem.price}</td>
                  <td>
                    <Link
                      to={`/project/${elem._id}`}
                      className="bg-green-900 text-white rounded-md p-2"
                    >
                      View
                    </Link>
                    <Link
                      to={`/edit-portfolio/${elem._id}`}
                      className="bg-cyan-900 text-white rounded-md p-2 mx-3"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(elem._id)}
                      className="bg-red-800 text-white rounded-md p-2"
                    >
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
          ) : (
            <tr className="text-center border-2 border-cyan-800">
              <td>Not Found. Some thing went wrong</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

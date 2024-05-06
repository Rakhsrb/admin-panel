import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateAdminInfo } from "../toolkit/Slicer";

const EditAdmin = () => {
  const dispatch = useDispatch();
  const path = useNavigate();
  const { admins } = useSelector((state) => state.mainSlice);
  const { data } = admins;
  const adminID = useParams().id;
  const admin = data.find((item) => item.id === +adminID);
  const [editedAdmin, setEditedAdmin] = useState({
    id: adminID,
    name: admin.name,
    email: admin.email,
  });

  const getUpdatedValues = (e) => {
    setEditedAdmin({
      ...editedAdmin,
      [e.target.name]: e.target.value,
    });
  };

  const submitUpdatedInfo = (e) => {
    e.preventDefault();
    dispatch(updateAdminInfo(editedAdmin));
    path("/admins");
    // console.log(editedAdmin);
  };
  return (
    <section className="bg-[#ecfeff] flex flex-col justify-center items-center">
      <form
        className="border p-10 rounded-md bg-white"
        onSubmit={submitUpdatedInfo}
      >
        <h1 className="text-4xl font-semibold mb-7">
          Admin malumotlarini yangilash
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="adminName" className="text-lg">
              Ism kiriting:
            </label>
            <input
              required
              placeholder="Ism Kiriting"
              type="text"
              className="border py-2 px-5 text-md"
              id="adminName"
              name="name"
              value={editedAdmin.name}
              onChange={getUpdatedValues}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="adminEmail" className="text-lg">
              Email:
            </label>
            <input
              required
              placeholder="Email kiriting"
              type="email"
              className="border py-2 px-5 text-md"
              id="adminEmail"
              name="email"
              value={editedAdmin.email}
              onChange={getUpdatedValues}
            />
          </div>
          {/* <div className="flex flex-col gap-2">
            <label htmlFor="adminPassword" className="text-lg">
              Parol:
            </label>
            <input
              type="password"
              placeholder="Parol kiriting"
              className="border py-1 px-5 text-lg"
              id="adminPassword"
            />
          </div> */}
        </div>
        <button
          type="submit"
          className="py-2 bg-green-700 px-10 mt-10 w-full rounded-sm text-white uppercase font-medium"
        >
          yangilash
        </button>
      </form>
    </section>
  );
};

export default EditAdmin;

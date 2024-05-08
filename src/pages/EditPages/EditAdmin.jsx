import { Eye, EyeClosed } from "@phosphor-icons/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const EditAdmin = () => {
  const [showPass, setShowPass] = useState(false);
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
    password: "",
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
    if (admin.password === editedAdmin.password) {
      path("/admins");
    } else {
      Swal.fire({
        icon: "error",
        title: "Brat parol tugri kiriting",
      });
    }
  };


  return (
    <section className="bg-[#ecfeff] flex flex-col justify-center items-center">
      <form
        className="border p-10 rounded-md bg-white"
        onSubmit={submitUpdatedInfo}
      >
        <h1 className="text-4xl font-semibold mb-7">
          Admin malumotlarini taxrirlash
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
          <div className="flex flex-col gap-2">
            <label htmlFor="adminPassword" className="text-lg">
              Parolni tasdiqlang:
            </label>
            <div className="border py-1 px-5 text-lg flex items-center gap-3">
              <input
                required
                type={showPass ? "text" : "password"}
                placeholder="Parol kiriting"
                className="outline-none w-full"
                name="password"
                id="adminPassword"
                onChange={getUpdatedValues}
              />
              <span
                onClick={() =>
                  showPass ? setShowPass(false) : setShowPass(true)
                }
              >
                {showPass ? <Eye /> : <EyeClosed />}
              </span>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="py-2 bg-green-700 px-10 mt-10 w-full rounded-sm text-white uppercase font-medium"
        >
          taxrirlash
        </button>
      </form>
    </section>
  );
};

export default EditAdmin;

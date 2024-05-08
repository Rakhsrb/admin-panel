import { Eye, EyeClosed } from "@phosphor-icons/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../toolkit/Slicer";

const Login = () => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errorAdmin, setErrorAdmin] = useState(null);
  const [errorPass, setErrorPass] = useState(null);

  const handleGetValues = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const sendUserInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://uitc-backend.onrender.com/api/admin/login",
        userInfo
      );
      if (response.status === 200) {
        dispatch(loginUser(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex justify-center items-center z-10 bg-cyan-900 h-screen ">
      <form
        className="p-6 rounded-md w-1/3 flex flex-col items-center"
        onSubmit={sendUserInfo}
      >
        <h1 className="text-center text-3xl font-medium mb-12 text-white">
          Log In
        </h1>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-2 text-xl">
            <label htmlFor="adminEmail" className="text-white">
              Email:
            </label>
            <input
              required
              type="email"
              placeholder="Enter email"
              name="email"
              id="adminEmail"
              className="outline-none p-2 rounded-md"
              onChange={handleGetValues}
            />
          </div>
          <div className="flex flex-col gap-2 text-xl">
            <label htmlFor="adminPass" className="text-white">
              Password:
            </label>
            <div className="border  text-lg flex items-center gap-3 bg-white p-2 rounded-md">
              <input
                required
                type={showPass ? "text" : "password"}
                placeholder="Parol kiriting"
                className="outline-none w-full"
                name="password"
                id="adminPassword"
                onChange={handleGetValues}
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
          className="bg-white px-10 py-2 rounded-md mt-7 text-black"
        >
          Log In
        </button>
      </form>
    </section>
  );
};

export default Login;

import { Eye, EyeClosed } from "@phosphor-icons/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../toolkit/Slicer";

const Login = () => {
  const { userData } = useSelector((state) => state.mainSlice);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errorAdmin, setErrorAdmin] = useState({
    message: "",
    error: false,
  });
  const [errorPass, setErrorPass] = useState({
    message: "",
    error: false,
  });

  useEffect(() => {
    if (userData.isLogin) {
      navigate("/");
    }
  }, [userData.isLogin]);

  const handleGetValues = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://uitc-backend.onrender.com/api/admin/login",
        { ...userInfo }
      );
      if (response.data.AdminNotFound) {
        setErrorAdmin({
          ...errorAdmin,
          message: response.data.AdminNotFound,
          error: true,
        });
      }
      if (response.data.PasswordIsNotCorrect) {
        setErrorPass({
          ...errorPass,
          message: response.data.PasswordIsNotCorrect,
          error: true,
        });
      }
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("adminInfo", JSON.stringify(response.data.data));
        dispatch(checkLogin(true));
        setErrorAdmin({
          ...errorAdmin,
          message: "",
          error: false,
        });
        setErrorPass({
          ...errorPass,
          message: "",
          error: false,
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center z-10 bg-cyan-900 h-screen ">
      <form
        className="p-6 rounded-md w-1/3 flex flex-col items-center"
        onSubmit={loginUser}
      >
        <h1 className="text-center text-3xl font-medium mb-12 text-white">
          Log In
        </h1>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-2 text-xl">
            {errorAdmin.error ? (
              <h1 className="text-xl text-red-400">{errorAdmin.message}</h1>
            ) : (
              ""
            )}
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
            {errorPass.error ? (
              <h1 className="text-xl text-red-400">{errorPass.message}</h1>
            ) : (
              ""
            )}
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
          {isLoading ? "Loading..." : "Log In"}
        </button>
      </form>
    </section>
  );
};

export default Login;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddServices = () => {
  const { userData, baseUrlApi, config } = useSelector(
    (state) => state.mainSlice
  );
  const [imgSaved, setImgSaved] = useState(false);
  const [serviceData, setServiceData] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.isLogin) {
      navigate("/");
    }
  }, []);

  const handleGetValues = async (e) => {
    const { name, value } = e.target;
    setServiceData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e) => {
    try {
      const formImageData = new FormData();
      const file = e.target.files[0];
      formImageData.append("images", file);
      setImgSaved(true);
      const { data } = await axios.post(
        baseUrlApi + "api/uploads",
        formImageData,
        config
      );
      setServiceData((prevCourse) => ({
        ...prevCourse,
        image: data.images[0],
      }));
      setImgSaved(false);
    } catch (err) {
      console.log(err);
    }
  };

  const sendService = async (e) => {
    e.preventDefault();
    try {
      setImgSaved(true);
      const response = await axios.post(
        baseUrlApi + "api/services/create",
        serviceData,
        config
      );
      setServiceData({
        title: "",
        description: "",
        category: "",
        image: "",
      });
      setImgSaved(false);
      navigate("/services");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Yangi Xizmat Qo'shildi",
        showConfirmButton: false,
        timer: 3500,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-[#ecfeff] flex flex-col justify-center items-center">
      <form className="border p-10 rounded-md bg-white" onSubmit={sendService}>
        <h1 className="text-4xl font-semibold mb-7">Yangi Xizmat Qo'shish</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="serviceTitle" className="text-lg">
              Xizmat Nomi:
            </label>
            <input
              placeholder="Xizmat nomini kiriting"
              type="text"
              className="border py-2 px-5 text-md"
              id="serviceTitle"
              name="title"
              value={serviceData.title || ""}
              onChange={handleGetValues}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="serviceDescription" className="text-lg">
              Xizmat haqida malumot:
            </label>
            <textarea
              placeholder="Xizmat haqida malumot kiriting"
              className="border py-2 px-5 text-md min-h-32"
              id="serviceDescription"
              onChange={handleGetValues}
              value={serviceData.description || ""}
              name="description"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="serviceCategory" className="text-lg">
              Xizmat kategoriyasi:
            </label>
            <select
              className="border py-2 px-2"
              onChange={handleGetValues}
              value={serviceData.category || ""}
              name="category"
              id="serviceCategory"
            >
              <option value="" hidden>
                Xizmat kategoriyasini tanlang
              </option>
              <option value="Web">Web</option>
              <option value="3D Modeling">3D Modeling</option>
              <option value="Design">Design</option>
              <option value="AI">AI</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="serviceImage" className="text-lg">
              Rasm:
            </label>
            <input
              type="file"
              className="border py-1 px-5 text-lg "
              id="serviceImage"
              onChange={handleFileChange}
              name="image"
            />
          </div>
        </div>
        <button
          disabled={imgSaved}
          type="submit"
          className="py-2 bg-green-700 px-10 mt-10 w-full rounded-sm text-white font-medium"
        >
          {imgSaved ? "Loading..." : " Qo'shish"}
        </button>
      </form>
    </section>
  );
};

export default AddServices;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddProjects = () => {
  const { userData, baseUrlApi, config } = useSelector(
    (state) => state.mainSlice
  );
  const [imgSaved, setImgSaved] = useState(false);
  const [portfolioData, setPortfolioData] = useState({
    title: "",
    description: "",
    category: "",
    url: "",
    images: [],
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData.isLogin) {
      navigate("/");
    }
  }, []);

  const handleGetValues = (e) => {
    const { name, value } = e.target;
    setPortfolioData((prev) => ({ ...prev, [name]: value }));
    setImgSaved(false);
  };

  const handleFileChange = async (e) => {
    try {
      const formImageData = new FormData();
      const files = e.target.files;
      for (let i = 0; i < files.length; i++) {
        formImageData.append("images", files[i]);
      }
      setImgSaved(true);
      const { data } = await axios.post(
        baseUrlApi + "api/uploads",
        formImageData,
        config
      );
      setPortfolioData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, ...data.images],
      }));
      setImgSaved(false);
    } catch (err) {
      console.log(err);
    }
  };

  const sendPortfolio = async (e) => {
    e.preventDefault();
    const portfolioForm = {
      title: portfolioData.title,
      description: portfolioData.description,
      category: portfolioData.category,
      images: portfolioData.images,
      url: portfolioData.url,
    };
    try {
      const response = await axios.post(
        baseUrlApi + "api/projects/create",
        portfolioForm,
        config
      );
      setPortfolioData({
        title: "",
        description: "",
        category: "",
        url: "",
        images: [],
      });
      navigate("/projects");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Yangi Portfolio Qo'shildi",
        showConfirmButton: false,
        timer: 3500,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <section className="bg-[#ecfeff] flex flex-col justify-center items-center">
      <form
        className="border p-10 rounded-md bg-white"
        onSubmit={sendPortfolio}
      >
        <h1 className="text-4xl font-semibold mb-7">Portfolio Qo'shish</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="portfolioTitle" className="text-lg">
              Portfolio nomi:
            </label>
            <input
              value={portfolioData.title}
              onChange={handleGetValues}
              placeholder="Portfolio nomini kiriting"
              type="text"
              className="border py-2 px-5 text-md"
              id="portfolioTitle"
              name="title"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="portfolioDescription" className="text-lg">
              Portfolio haqida malumot:
            </label>
            <textarea
              value={portfolioData.description}
              onChange={handleGetValues}
              placeholder="Portfolio haqida malumot kiriting"
              className="border py-2 px-5 text-md min-h-32"
              id="portfolioDescription"
              name="description"
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-5 items-center">
            <div className="flex flex-col gap-2">
              <label htmlFor="portfolioCategory" className="text-lg">
                Portfolio kategoriyasi:
              </label>
              <select
                value={portfolioData.category}
                onChange={handleGetValues}
                className="border py-2 px-2"
                name="category"
                id="portfolioCategory"
              >
                <option value="" hidden>
                  Kategoriya tanlang
                </option>
                <option value="Web">Web</option>
                <option value="3D Modeling">3D Modeling</option>
                <option value="Design">Design</option>
                <option value="AI">AI</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="courseUrl" className="text-lg">
                Porfolio havolasi:
              </label>
              <input
                value={portfolioData.url}
                onChange={handleGetValues}
                type="text"
                className="border py-1 px-5 text-lg "
                id="courseUrl"
                name="url"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="courseImage" className="text-lg">
              Rasm:
            </label>
            <input
              onChange={handleFileChange}
              type="file"
              className="border py-1 px-5 text-lg "
              id="courseImage"
              name="image"
            />
          </div>
        </div>
        <button
          type="submit"
          className="py-2 bg-green-700 px-10 mt-10 w-full rounded-sm text-white uppercase font-medium"
        >
          Qo'shish
        </button>
      </form>
    </section>
  );
};

export default AddProjects;

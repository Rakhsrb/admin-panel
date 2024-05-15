import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const EditService = () => {
  const path = useNavigate();
  const { userData, baseUrlApi, config } = useSelector(
    (state) => state.mainSlice
  );
  const { id } = useParams();
  const [imgSaved, setImgSaved] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [serviceData, setSericeData] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    if (!userData.isLogin) {
      path("/");
    }
  }, [userData.isLogin, path]);

  useEffect(() => {
    async function getDataById() {
      try {
        const response = await axios.get(baseUrlApi + `api/services/${id}`);
        setSericeData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDataById();
  }, [id]);

  const getUpdatedValues = (e) => {
    const { name, value } = e.target;
    setSericeData((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
    setImgSaved(false);
  };

  const submitUpdatedInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        baseUrlApi + `api/services/update/${id}`,
        serviceData,
        config
      );
      path("/services");
    } catch (error) {
      console.log(error);
    }
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
      setSericeData((prevCourse) => ({
        ...prevCourse,
        image: data.images[0],
      }));
      setImgSaved(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="bg-[#ecfeff] flex flex-col justify-center items-center">
      <form
        className="border p-10 rounded-md bg-white"
        onSubmit={submitUpdatedInfo}
      >
        <h1 className="text-4xl font-semibold mb-7">
          Xizmat malumotlarini taxrirlash
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="serviceTitle" className="text-lg">
              Xizmat Nomi:
            </label>
            <input
              required
              placeholder="Xizmat nomini kiriting"
              type="text"
              className="border py-2 px-5 text-md"
              id="serviceTitle"
              name="title"
              value={serviceData.title}
              onChange={getUpdatedValues}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="serviceDescription" className="text-lg">
              Xizmat haqida malumot:
            </label>
            <textarea
              required
              placeholder="Xizmat haqida malumot kiriting"
              className="border py-2 px-5 text-md min-h-32"
              id="serviceDescription"
              name="description"
              value={serviceData.description}
              onChange={getUpdatedValues}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="serviceCategory" className="text-lg">
              Xizmat kategoriyasi:
            </label>
            <select
              className="border py-2 px-2"
              name="category"
              id="serviceCategory"
              value={serviceData.category}
              onChange={getUpdatedValues}
            >
              <option value="" hidden>
                Xizmat kategoriyasini tanlang
              </option>
              <option value="web">Web</option>
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
              name="image"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <button
          disabled={imgSaved}
          type="submit"
          className="py-2 bg-green-700 px-10 mt-10 w-full rounded-sm text-white font-medium"
        >
          {imgSaved ? "Loading..." : "Taxrirlash"}
        </button>
      </form>
    </section>
  );
};

export default EditService;

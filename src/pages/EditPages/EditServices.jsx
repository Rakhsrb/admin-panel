import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateServiceInfo } from "../../toolkit/Slicer.jsx";

const EditService = () => {
  const dispatch = useDispatch();
  const path = useNavigate();
  const { services } = useSelector((state) => state.mainSlice);
  const { data } = services;
  const serviceID = useParams().id;
  const service = data.find((item) => item.id === +serviceID);
  const [editedService, setEditedService] = useState({
    id: serviceID,
    title: service.title,
    description: service.description,
    image: service.image,
    category: service.category,
  });

  const getUpdatedValues = (e) => {
    if (e.target.type === "file") {
      setEditedService({
        ...editedService,
        image: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setEditedService({
        ...editedService,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submitUpdatedInfo = (e) => {
    e.preventDefault();
    dispatch(updateServiceInfo(editedService));
    path("/services");
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
              value={editedService.title}
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
              value={editedService.description}
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
              value={editedService.category}
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
              onChange={getUpdatedValues}
            />
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

export default EditService;

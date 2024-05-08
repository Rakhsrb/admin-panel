import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const EditProject = () => {
  const dispatch = useDispatch();
  const path = useNavigate();
  const { portfolio } = useSelector((state) => state.mainSlice);
  const { data } = portfolio;
  const portdolioID = useParams().id;
  const portdolio = data.find((item) => item.id === +portdolioID);
  const [editedPortfolio, setEditedPortfolio] = useState({
    id: portdolioID,
    title: portdolio.title,
    price: portdolio.price,
    description: portdolio.description,
    image: portdolio.image,
    category: portdolio.category,
    url: portdolio.url,
  });

  const getUpdatedValues = (e) => {
    if (e.target.type === "file") {
      setEditedPortfolio({
        ...editedPortfolio,
        image: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setEditedPortfolio({
        ...editedPortfolio,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submitUpdatedInfo = (e) => {
    e.preventDefault();
    dispatch(updatePortfolioInfo(editedPortfolio));
    path("/projects");
  };
  return (
    <section className="bg-[#ecfeff] flex flex-col justify-center items-center">
      <form
        className="border p-10 rounded-md bg-white"
        onSubmit={submitUpdatedInfo}
      >
        <h1 className="text-4xl font-semibold mb-7">Portfolio Ynagilash</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="portfolioTitle" className="text-lg">
              Portfolio nomi:
            </label>
            <input
              required
              placeholder="Portfolio nomini kiriting"
              type="text"
              className="border py-2 px-5 text-md"
              id="portfolioTitle"
              name="title"
              value={editedPortfolio.title}
              onChange={getUpdatedValues}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="portfolioDescription" className="text-lg">
              Portfolio haqida malumot:
            </label>
            <textarea
              required
              placeholder="Portfolio haqida malumot kiriting"
              className="border py-2 px-5 text-md min-h-32"
              id="portfolioDescription"
              name="description"
              value={editedPortfolio.description}
              onChange={getUpdatedValues}
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-5 items-center">
            <div className="flex flex-col gap-2">
              <label htmlFor="portfolioCategory" className="text-lg">
                Portfolio kategoriyasi:
              </label>
              <select
                className="border py-2 px-2"
                name="category"
                id="portfolioCategory"
                value={editedPortfolio.category}
                onChange={getUpdatedValues}
              >
                <option value="" hidden>
                  Kategoriya tanlang
                </option>
                <option value="web">Web</option>
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
                required
                type="text"
                className="border py-1 px-5 text-lg "
                id="courseUrl"
                name="url"
                value={editedPortfolio.url}
                onChange={getUpdatedValues}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="courseImage" className="text-lg">
              Rasm:
            </label>
            <input
              type="file"
              className="border py-1 px-5 text-lg "
              id="courseImage"
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

export default EditProject;

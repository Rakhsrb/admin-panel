import React from "react";

const AddProjects = () => {
  return (
    <section className="bg-[#ecfeff] flex flex-col justify-center items-center">
      <form className="border p-10 rounded-md bg-white">
        <h1 className="text-4xl font-semibold mb-7">Portfolio Qo'shish</h1>
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
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="courseImage" className="text-lg">
              Rasm:
            </label>
            <input
              required
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

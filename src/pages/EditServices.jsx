import React from "react";

const EditService = () => {
  return (
    <section className="bg-[#ecfeff] flex flex-col justify-center items-center">
      <form className="border p-10 rounded-md bg-white">
        <h1 className="text-4xl font-semibold mb-7">Yangi Kurs Qo'shish</h1>
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
              required
              type="file"
              className="border py-1 px-5 text-lg "
              id="serviceImage"
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

export default EditService;

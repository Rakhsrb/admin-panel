import React from "react";

const EditCourse = () => {
  return (
    <section className="bg-[#ecfeff] flex flex-col justify-center items-center">
      <form className="border p-10 rounded-md bg-white">
        <h1 className="text-4xl font-semibold mb-7">Yangi Kurs Qo'shish</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="courseTitle" className="text-lg">
              Kurs Nomi:
            </label>
            <input
              required
              placeholder="Kurs nomini kiriting"
              type="text"
              className="border py-2 px-5 text-md"
              id="courseTitle"
              name="title"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="courseDescription" className="text-lg">
              Kurs haqida malumot:
            </label>
            <textarea
              required
              placeholder="Kurs haqida malumot kiriting"
              className="border py-2 px-5 text-md min-h-32"
              id="courseDescription"
              name="description"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="coursePrice" className="text-lg">
              Kurs narxi:
            </label>
            <input
              required
              type="number"
              placeholder="Kurs narxini kiriting"
              className="border py-1 px-5 text-lg "
              id="coursePrice"
            />
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

export default EditCourse;

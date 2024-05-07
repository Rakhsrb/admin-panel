import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateCourseInfo } from "../../toolkit/Slicer";

const EditCourse = () => {
  const dispatch = useDispatch();
  const path = useNavigate();
  const { courses } = useSelector((state) => state.mainSlice);
  const { data } = courses;
  const courseID = useParams().id;
  const course = data.find((item) => item.id === +courseID);
  const [editedCourse, setEditedCourse] = useState({
    id: courseID,
    title: course.title,
    price: course.price,
    description: course.description,
    image: course.image,
  });
  const getUpdatedValues = (e) => {
    if (e.target.type === "file") {
      setEditedCourse({
        ...editedCourse,
        image: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setEditedCourse({ ...editedCourse, [e.target.name]: e.target.value });
    }
  };

  const submitUpdatedInfo = (e) => {
    e.preventDefault();
    dispatch(updateCourseInfo(editedCourse));
    path("/courses");
  };

  return (
    <section className="bg-[#ecfeff] flex flex-col justify-center items-center">
      <form
        className="border p-10 rounded-md bg-white"
        onSubmit={submitUpdatedInfo}
      >
        <h1 className="text-4xl font-semibold mb-7">
          Kursning malumotlarini taxrirlash
        </h1>
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
              value={editedCourse.title}
              onChange={getUpdatedValues}
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
              value={editedCourse.description}
              onChange={getUpdatedValues}
              name="description"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="coursePrice" className="text-lg">
              Kurs narxi:
            </label>
            <input
              required
              type="text"
              placeholder="Kurs narxini kiriting"
              className="border py-1 px-5 text-lg "
              id="coursePrice"
              value={editedCourse.price}
              onChange={getUpdatedValues}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="courseImage" className="text-lg">
              Rasm:
            </label>
            <input
              type="file"
              className="border py-1 px-5 text-lg "
              id="courseImage"
              // value={editedCourse.image}
              onChange={getUpdatedValues}
              name="image"
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

export default EditCourse;

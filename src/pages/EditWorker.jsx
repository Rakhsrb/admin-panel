import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateWorkerInfo } from "../toolkit/Slicer";

const EditWorker = () => {
  const dispatch = useDispatch();
  const path = useNavigate();
  const { team } = useSelector((state) => state.mainSlice);
  const { data } = team;
  const workerID = useParams().id;
  const worker = data.find((item) => item.id === +workerID);
  const [editedWorker, setEditedWorker] = useState({
    id: workerID,
    name: worker.name,
    job: worker.job,
    image: worker.image,
  });

  const getUpdatedValues = (e) => {
    if (e.target.type === "file") {
      setEditedWorker({
        ...editedWorker,
        image: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setEditedWorker({
        ...editedWorker,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submitUpdatedInfo = (e) => {
    e.preventDefault();
    dispatch(updateWorkerInfo(editedWorker));
    if (worker.password === editedWorker.password) {
      path("/team");
    }
  };

  return (
    <section className="bg-[#ecfeff] flex flex-col justify-center items-center">
      <form
        className="border p-10 rounded-md bg-white"
        onSubmit={submitUpdatedInfo}
      >
        <h1 className="text-4xl font-semibold mb-7">
          Xodim malumotlarini yagilash
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="workerName" className="text-lg">
              Ism kiriting:
            </label>
            <input
              required
              placeholder="Ism Kiriting"
              type="text"
              className="border py-2 px-5 text-md"
              id="workerName"
              name="name"
              value={editedWorker.name}
              onChange={getUpdatedValues}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="workerJob" className="text-lg">
              Ishi:
            </label>
            <input
              required
              placeholder="ish kiriting"
              type="text"
              className="border py-2 px-5 text-md"
              id="workerJob"
              name="job"
              value={editedWorker.job}
              onChange={getUpdatedValues}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="workerImage" className="text-lg">
              Rasmi:
            </label>
            <input
              type="file"
              className="border py-1 px-5 text-lg"
              id="workerImage"
              onChange={getUpdatedValues}
            />
          </div>
        </div>
        <button
          type="submit"
          className="py-2 bg-green-700 px-10 mt-10 w-full rounded-sm text-white uppercase font-medium"
        >
          tahrirlash
        </button>
      </form>
    </section>
  );
};

export default EditWorker;

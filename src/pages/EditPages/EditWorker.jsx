import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const EditWorker = () => {
  const path = useNavigate();
  const { userData, baseUrlApi, config } = useSelector(
    (state) => state.mainSlice
  );
  const { id } = useParams();
  const [imgSaved, setImgSaved] = useState(false);
  const [workerData, setWorkerData] = useState({
    name: "",
    job: "",
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
        const response = await axios.get(baseUrlApi + `api/team/${id}`);
        setWorkerData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDataById();
  }, [id]);

  const getUpdatedValues = (e) => {
    const { name, value } = e.target;
    setWorkerData((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
    setImgSaved(false);
  };

  const submitUpdatedInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        baseUrlApi + `api/team/update/${id}`,
        workerData,
        config
      );
      path("/team");
    } catch (error) {
      console.log(error);
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
              value={workerData.name}
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
              value={workerData.job}
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
          taxrirlash
        </button>
      </form>
    </section>
  );
};

export default EditWorker;

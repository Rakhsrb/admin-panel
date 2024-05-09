import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddWorker = () => {
  const { userData, baseUrlApi, config } = useSelector(state => state.mainSlice)
  const [imgSaved, setImgSaved] = useState(false);
  const [workerData, setWorkerData] = useState({
    name: "",
    job: "",
    image: ""
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (!userData.isLogin) {
      navigate("/");
    }
  }, []);


  const handleGetValues = (e) => {
    const { name, value } = e.target
    setWorkerData((prev) => ({ ...prev, [name]: value }))
    setImgSaved(false)
  }


  const sendWorker = async (e) => {
    e.preventDefault()
    const workerForm = {
      name: workerData.name,
      job: workerData.job,
      image: workerData.image,
    };
    try {
      const response = await axios.post(baseUrlApi + "api/team/create", workerForm, config)
      setWorkerData({
        name: "",
        job: "",
        image: ""
      })
      navigate("/team");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Yangi Xodim Qo'shildi",
        showConfirmButton: false,
        timer: 3500,
      });
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className="bg-[#ecfeff] flex flex-col justify-center items-center">
      <form className="border p-10 rounded-md bg-white" onSubmit={sendWorker}>
        <h1 className="text-4xl font-semibold mb-7">Yangi Xodim Qo'shish</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="workerName" className="text-lg">
              Ism kiriting:
            </label>
            <input
              value={workerData.name || ""}
              onChange={handleGetValues}
              placeholder="Ism Kiriting"
              type="text"
              className="border py-2 px-5 text-md"
              id="workerName"
              name="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="workerJob" className="text-lg">
              Ishi:
            </label>
            <input
              value={workerData.job || ""}
              onChange={handleGetValues}
              placeholder="Ish kiriting"
              type="text"
              className="border py-2 px-5 text-md"
              id="workerJob"
              name="job"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="workerImage" className="text-lg">
              Rasmi:
            </label>
            <input
              onChange={handleGetValues}
              type="file"
              className="border py-1 px-5 text-lg"
              id="workerImage"
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

export default AddWorker;

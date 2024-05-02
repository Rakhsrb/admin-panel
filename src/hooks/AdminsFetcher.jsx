import { useEffect } from "react";
import { useSelector } from "react-redux";

export const AdminsFetcher = function (url) {
  const data = useSelector((state) => state.admins);
  async function getData() {
    try {
        
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, [url]);
};

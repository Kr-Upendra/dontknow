import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "./useGetBaseUrl";

export const useGetMatchDetail = (matchId) => {
  const [detail, setDetail] = useState({});
  const fetchMatchDetail = async () => {
    try {
      const response = await axios.get(`${baseUrl}scorecard/${matchId}`);
      console.log(response);
      setDetail(response.data.data.results);
    } catch (err) {
      console.log("something went very wrong!");
    }
  };

  useEffect(() => {
    fetchMatchDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { detail };
};

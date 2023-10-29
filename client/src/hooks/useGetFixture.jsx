import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "./useGetBaseUrl";

export const useGetFixture = () => {
  const [fixtures, setFixtures] = useState([]);

  const fetchFixtures = async () => {
    try {
      const response = await axios.get(`${baseUrl}fixture`);
      setFixtures(response.data.data.results);
    } catch (err) {
      console.log("something went wrong. please try again lator!");
    }
  };

  useEffect(() => {
    fetchFixtures();
  }, []);

  return { fixtures };
};

import axios from "axios";
import { BASE_URL } from "./api.constant";
const API_HEADER = {};

export const fetchBookList = () =>
  new Promise(async (resolve, reject) => {
    const url = BASE_URL;
    axios
      .get(url, {
        headers: API_HEADER,
      })
      .then((res) => {
        res && resolve(res.data);
      })
      .catch((error) => {
        // handle error
        reject(error);
        console.log(error);
      });
  });

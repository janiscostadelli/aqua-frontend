import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToMusicsPage } from "../routes/coordinator";

export const createMusic = (body, history) => {
  axios
    .post(`${BASE_URL}/music/createMusic`, body)
    .then((res) => {
      goToMusicsPage(history)
      console.log(res.data.message)
    })
    .catch((error) => {
      console.log(error.response.data.error)
    });
  
};

import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createMusic = (body) => {
  axios
    .post(`${BASE_URL}/music/createMusic`, body, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      alert(res.data.message || "Música criada com sucesso!");
      window.location.reload();
    })
    .catch((err) => {
      alert(err.response.data.error || "Erro no servidor");
    });
};

export const searchMusic = async (body) => {
  const result = await axios
    .post(`${BASE_URL}/music/searchMusic`, body)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return [];
    });
  return result;
};

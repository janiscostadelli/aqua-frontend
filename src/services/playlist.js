import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createPlaylist = (body) => {
  axios
    .post(`${BASE_URL}/playlist/create`, body)
    .then((res) => {
      alert(res.data.message || "Playlist criada com sucesso!");
      window.location.reload();
    })
    .catch((err) => alert(err.response.data.error || "Erro no servidor"));
};

export const getAllPlaylists = async () => {
  const result = await axios
    .get(`${BASE_URL}/playlist/all`)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return [];
    });
    return result;
};
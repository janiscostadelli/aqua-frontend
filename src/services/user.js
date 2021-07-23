import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToLogin, goToHomePage } from "../routes/coordinator";

export const login = (body, history) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert(
        "Usuário logado com sucesso!"
      );
      goToHomePage(history);
    })
    .catch((err) => alert(err.response.data.error || "Erro no servidor"));
};

export const signUp = (body, history) => {
  if (body.password.length < 6) {
    return alert("A senha precisa ter no mínimo 6 caracteres");
  }
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Usuário cadastrado com sucesso")
      goToHomePage(history);
    })
    .catch((err) => alert(err.response.data.error || "Erro no servidor"));
};

export const logout = (history) => {
  localStorage.removeItem("token");
  goToLogin(history);
};

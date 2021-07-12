import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToLogin, goToMusicsPage } from "../routes/coordinator"

export const login = (body, history) => {
  axios.post(`${BASE_URL}/user/login`, body)
  .then((res) => {
    localStorage.setItem("token", res.data.token)
    goToMusicsPage(history)
  })
  .catch((err) => console.log(err.response.data.message))
} 

export const signUp = (body, history) => {
  axios.post(`${BASE_URL}/user/singup`, body)
  .then((res) => {
    localStorage.setItem("token", res.data.token)
    goToMusicsPage(history)
  })
  .catch((err) => console.log(err.response.data.message))
} 

export const logout = (history) => {
  localStorage.removeItem('token');
  goToLogin(history);
}
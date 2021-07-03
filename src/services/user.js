import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToMusicsPage } from "../routes/coordinator"

export const login = (body, clear, history) => {
  axios.post(`${BASE_URL}/user/login`, body)
  .then((res) => {
    localStorage.setItem("token", res.data.token)
    clear()
    goToMusicsPage(history)
  })
  .catch((err) => alert(err.response.data.message))
} 

export const signUp = (body, clear, history) => {
  axios.post(`${BASE_URL}/user/singup`, body)
  .then((res) => {
    localStorage.setItem("token", res.data.token)
    clear()
    goToMusicsPage(history)
  })
  .catch((err) => alert(err.response.data.message))
} 
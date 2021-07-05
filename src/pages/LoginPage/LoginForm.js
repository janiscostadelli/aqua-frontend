import { goToSignUp, goToMusicsPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import logo from "../../assets/logo.png";
import { TextField, Button } from "@material-ui/core";
import React from "react";
import axios from "axios";
import {
  Form,
  Title,
  Logo,
  ButtonsContainer,
} from "./styled";



const LoginForm = () => {
  const history = useHistory();

  const [form, onChange] = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault()
    Login()
  };

  const Login = () => {
    axios
      .post(`${BASE_URL}/user/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Usuário logado com sucesso!");
        goToMusicsPage(history);
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Logo img src={logo} />
      <Title>Login</Title>
      <TextField
        name="email"
        value={form.email}
        onChange={onChange}
        type="email"
        label="Email"
        variant = "outlined"
        margin= "dense"
        required
      />
      <TextField
        name="password"
        value={form.password}
        onChange={onChange}
        type="password"
        label="Senha"
        variant= 'outlined'
        margin= "dense"
        required
      />
      <ButtonsContainer>
        <Button variant="outlined" color="primary" onClick={() => goToSignUp(history)}>
          Cadastrar
        </Button>
        <Button variant="contained" color="primary" type="submit">Logar</Button>
      </ButtonsContainer>
    </Form>
  );
};

export default LoginForm;

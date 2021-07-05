import { goToLogin, goToMusicsPage } from "../../routes/coordinator";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import logo from "../../assets/logo.png";
import React from "react";
import axios from "axios";
import {
  Form,
  Title,
  Logo,
  ButtonsContainer,
} from "./styled";

const SignUpForm = () => {
  const history = useHistory()

  const [form, onChange] = useForm({
    name: "",
    email: "",
    nickname: "",
    password: "",
  })

  const onSubmitForm = (event) => {
    event.preventDefault();
    SignUp();
    if (form.password.length < 6) {
      return alert("A senha ter no minimo 6 caracteres");
    }
  }

  const SignUp = () => {
    axios
      .post(`${BASE_URL}/user/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        alert("Usuário cadastrado com sucesso!")
        goToMusicsPage(history)
      })
      .catch((err) => {
        alert(err.response.data.error)
      })
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Logo img src={logo} />
      <Title>Inscreva-se</Title>
      <TextField
        name="name"
        value={form.name}
        onChange={onChange}
        type="text"
        label="Nome"
        variant='outlined'
        margin= "dense"
        required
      />
      <TextField
        name="email"
        value={form.email}
        onChange={onChange}
        type="email"
        label="Email"
        variant='outlined'
        margin= "dense"
        required
      />
      <TextField
        name="password"
        value={form.password}
        onChange={onChange}
        type="password"
        label="Senha"
        required
        variant='outlined'
        margin= "dense"
      />
      <TextField
        name="nickname"
        value={form.nickname}
        onChange={onChange}
        type="text"
        variant='outlined'
        margin= "dense"
        label="Nickname"
        required
      />
      <ButtonsContainer>
        <Button variant="outlined" color="primary" onClick={() => goToLogin(history)}>Voltar</Button>
        <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
      </ButtonsContainer>
    </Form>
  );
};

export default SignUpForm;

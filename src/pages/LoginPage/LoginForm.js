import { goToSignUp } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import logo from "../../assets/logo.png";
import { TextField, Button } from "@material-ui/core";
import React from "react";
import { Form, Title, Logo, ButtonsContainer, StyledTextField } from "./styled";
import { login } from "../../services/user";

const LoginForm = () => {
  const history = useHistory();

  const [form, onChange] = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, history);
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Logo img src={logo} />
      <StyledTextField
        name="email"
        value={form.email}
        onChange={onChange}
        type="email"
        label="Email"
        variant="outlined"
        margin="dense"
        required
      />
      <StyledTextField
        name="password"
        value={form.password}
        onChange={onChange}
        type="password"
        label="Senha"
        variant="outlined"
        margin="dense"
        required
      />
      <ButtonsContainer>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => goToSignUp(history)}
        >
          Cadastrar
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Logar
        </Button>
      </ButtonsContainer>
    </Form>
  );
};

export default LoginForm;

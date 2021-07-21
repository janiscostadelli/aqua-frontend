import { goToSignUp } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import React from "react";
import {
  Form,
  ButtonsContainer,
  StyledTextField,
  Title,
  StyledSignupButton,
  StyledLoginButton,
} from "./styled";
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
      <Title>Login</Title>
      <StyledTextField
        name="email"
        value={form.email}
        onChange={onChange}
        type="email"
        placeholder="Email"
        variant="outlined"
        margin="dense"
        required
      />
      <StyledTextField
        name="password"
        value={form.password}
        onChange={onChange}
        type="password"
        placeholder="Senha"
        variant="outlined"
        margin="dense"
        required
      />
      <ButtonsContainer>
        <StyledSignupButton
          variant="outlined"
          color="primary"
          onClick={() => goToSignUp(history)}
        >
          Cadastrar
        </StyledSignupButton>
        <StyledLoginButton variant="contained" color="primary" type="submit">
          Logar
        </StyledLoginButton>
      </ButtonsContainer>
    </Form>
  );
};

export default LoginForm;

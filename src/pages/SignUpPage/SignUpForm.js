import { goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import React from "react";
import { Form, ButtonsContainer, StyledTextField, Title, StyledBackButton, StyledSignupButton } from "./styled";
import { signUp } from "../../services/user";

const SignUpForm = () => {
  const history = useHistory();

  const [form, onChange] = useForm({
    name: "",
    email: "",
    nickname: "",
    password: "",
  });

  const onSubmitForm = (event) => {
      event.preventDefault();
      signUp(form, history);
    }

  return (
    <Form onSubmit={onSubmitForm}>
      <Title>Cadastro</Title>
      <StyledTextField
        name="name"
        value={form.name}
        onChange={onChange}
        type="text"
        placeholder="Nome"
        variant="outlined"
        margin="dense"
        required
      />
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
        required
        variant="outlined"
        margin="dense"
      />
      <StyledTextField
        name="nickname"
        value={form.nickname}
        onChange={onChange}
        type="text"
        variant="outlined"
        margin="dense"
        placeholder="Nickname"
        required
      />
      <ButtonsContainer>
        <StyledBackButton
          variant="outlined"
          color="primary"
          onClick={() => goToLogin(history)}
        >
          Voltar
        </StyledBackButton>
        <StyledSignupButton variant="contained" color="primary" type="submit">
          Cadastrar
        </StyledSignupButton>
      </ButtonsContainer>
    </Form>
  );
};

export default SignUpForm;

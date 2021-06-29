import { goToMusicsPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import React from "react";
import axios from "axios";

const SignUpForm = () => {

  const history = useHistory();

  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    nickname: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    if(form.password.length < 6){
      return alert('A senha ter no minimo 6 caracteres')
    }
    goToMusicsPage(history);
  };

  const SignUp = () => {
    
  }

  return (
    <div>
    <form onSubmit={onSubmitForm}>
      <input
        name="name"
        value={form.name}
        onChange={onChange}
        type="text"
        placeholder="Digite seu nome"
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={onChange}
        type="email"
        placeholder="Digite seu email"
        required
      />
      <input
        name="nickname"
        value={form.nickname}
        onChange={onChange}
        type="text"
        placeholder="Escolha um nickname"
        required
      />
      <input
        name="password"
        value={form.password}
        onChange={onChange}
        type="password"
        placeholder="Digite uma senha"
        required
      />
      <button type='submit'>cadastrar</button>
    </form>
    </div>
  );
};
export default SignUpForm;

import {
  goToLastPage
} from "../../routes/coordinator";
import {
  TextField,
  Button,
} from "@material-ui/core";
import GenreForm from "./GenreForm";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import React from "react";
import { Form, Title, ButtonsContainer } from "./styled";
import { createMusic } from "../../services/music";

const CreateMusicForm = () => {
  
  const history = useHistory();

  const [form, onChange] = useForm({
    title: "",
    file: "",
    genre: "qualquer, coisa",
    album: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createMusic(form, history);
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Title>Criar música</Title>
      <TextField
        name="title"
        value={form.title}
        onChange={onChange}
        type="text"
        label="Título da musica"
        variant="outlined"
        margin="dense"
        required
      />
      <TextField
        name="file"
        value={form.file}
        onChange={onChange}
        type="text"
        variant="outlined"
        margin="dense"
        label="URL"
        required
      />
      <TextField
        name="album"
        value={form.album}
        onChange={onChange}
        type="text"
        variant="outlined"
        margin="dense"
        label="Album"
        required
      />

      <ButtonsContainer>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => goToLastPage(history)}
        >
          Voltar
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Criar música
        </Button>
      </ButtonsContainer>
    </Form>
  );
};

export default CreateMusicForm;

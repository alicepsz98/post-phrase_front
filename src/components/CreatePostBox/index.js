import React from "react";
import * as Style from "./styles";

export const CreatePostBox = (props) => {
  return (
    <Style.Container>
      <h2>Solte a imaginação e crie um post...</h2>
      <input
        type="text"
        onChange={props.changePostedTo}
        value={props.postedTo}
        placeholder="Seu nome e sobrenome"
      />
      <textarea
        value={props.phrase}
        onChange={props.changePhrase}
        placeholder="Frase (não use aspas)"
        rows={6}
      ></textarea>
      <input
        type="text"
        value={props.author}
        onChange={props.changeAuthor}
        placeholder="Autor(a) da frase"
      />
      <p>*Se não souber o nome do(a) autor(a), coloque "desconhecido"</p>
      <button type="submit" onClick={props.onSubmit}>
        Salvar
      </button>
    </Style.Container>
  );
};

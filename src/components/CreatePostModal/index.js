import React from 'react';
import * as Style from './styles';

export const CreatePostModal = (props) => {
  return (
    <Style.ModalContainer>
      <p onClick={props.clickCloseModal}>X</p>
      <input 
          type='text'
          onChange={props.changePostedTo}
          value={props.postedTo}
          placeholder='Seu nome...'
          required
        /> 
        <input 
          type='text'
          value={props.phrase}
          onChange={props.changePhrase}
          placeholder='Frase...'
          required
        />
        <input 
          type='text'
          value={props.author}
          onChange={props.changeAuthor}
          placeholder='Autor(a) da frase...'
          required
        />
        <button
          type='submit'
          onClick={props.onSubmit}
        >
          Criar
        </button>
    </Style.ModalContainer>
  );  
};


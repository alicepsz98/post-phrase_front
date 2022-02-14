import React from 'react';
import * as Style from './styles';

export const Header = (props) => {
  return (
    <Style.HeaderContainer>
      <Style.HeaderContent>
        <Style.Logo>
          <img 
            src='./sheet-icon.png'
            alt='Ícone de folha de caderno'
          />
          <h1>Post_Phrase</h1>
        </Style.Logo>
        <button onClick={props.clickOpenModal}>Criar post</button>
      </Style.HeaderContent>
    </Style.HeaderContainer>
  );
};
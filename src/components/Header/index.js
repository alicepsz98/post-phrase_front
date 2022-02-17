import React from "react";
import * as Style from "./styles";

export const Header = () => {
  return (
    <Style.Container>
      <Style.Logo>
        <img src="./sheet-icon.png" alt="Ícone de folha de caderno" />
        <h1>Post_Phrase</h1>
      </Style.Logo>
    </Style.Container>
  );
};

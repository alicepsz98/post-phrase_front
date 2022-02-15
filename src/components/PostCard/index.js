import React from "react";
import * as Style from "./styles";

export const PostCard = (props) => {
  return (
    <Style.Container>
      {props.data?.map((phrase) => {
        return (
          <div key={phrase.id}>
            <h3>{phrase.posted_to}</h3>
            <p>"{phrase.phrase}"</p>
            <h4>{phrase.author}</h4>
            <h4>{phrase.created_at}</h4>
          </div>
        );
      })}
    </Style.Container>
  );
};

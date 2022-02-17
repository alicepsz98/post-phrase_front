import React from "react";
import * as Style from "./styles";
import moment from "moment";

export const PostCard = (props) => {
  return (
    <>
      {props.data &&
        props.data
          ?.map((phrase) => {
            return (
              <Style.Container key={phrase.id}>
                <h3>{phrase.posted_to}</h3>
                <p>"{phrase.phrase}"</p>
                {phrase.author && (
                  <div>
                    <h4>Autor(a):</h4>{" "}
                    <h4 className="authorName">{phrase.author}</h4>
                  </div>
                )}
                <h5>{moment(phrase.created_at).format("DD/MM/YYYY, HH:mm")}</h5>
              </Style.Container>
            );
          })
          .reverse()}
    </>
  );
};

import React, { useState } from "react";
import * as Style from "./styles";
import { apikey } from "../../services/api";
import { useRequest } from "../../hooks/useRequest";
import { CreatePostBox } from "../../components/CreatePostBox";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PostCard } from "../../components/PostCard";

const Home = () => {
  const [postedTo, setPostedTo] = useState("");
  const [phrase, setPhrase] = useState("");
  const [author, setAuthor] = useState("");
  const body = {
    posted_to: postedTo,
    phrase,
    author,
  };
  const { data, isLoading, createData } = useRequest("/phrases", body, {
    apikey: apikey,
  });
  const createPost = () => {
    if (postedTo === "") {
      alert("Preencha o primeiro campo, por favor!");
    } else if (phrase === "") {
      alert("Preencha o segundo campo, por favor!");
    } else {
      createData();
      setPostedTo("");
      setPhrase("");
      setAuthor("");
      alert(`Post criado com sucesso, ${postedTo} 🎉`);
    }
  };
  return (
    <Style.HomeContainer>
      <Header />
      <CreatePostBox
        changePostedTo={(e) => setPostedTo(e.target.value)}
        changePhrase={(e) => setPhrase(e.target.value)}
        changeAuthor={(e) => setAuthor(e.target.value)}
        postedTo={postedTo}
        phrase={phrase}
        author={author}
        onSubmit={(e) => {
          e.preventDefault();
          createPost();
        }}
      />
      {isLoading && (
        <p
          style={{
            margin: "40px 0 800px 0",
            fontSize: "30px",
            fontWeight: "bold",
            color: "#504f4f",
          }}
        >
          Carregando...
        </p>
      )}
      <Style.PostCards>
        <PostCard data={data} />
      </Style.PostCards>
      <Footer />
    </Style.HomeContainer>
  );
};

export default Home;

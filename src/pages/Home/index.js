import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Style from './styles';
import { useRequest } from '../../hooks/useRequest';
import { CreatePostModal } from '../../components/CreatePostModal';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { config } from '../../config';

const Home = () => {
  const [postedTo, setPostedTo] = useState('');
  const [phrase, setPhrase] = useState('');
  const [author, setAuthor] = useState('');
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);
  const body = {
    posted_to: postedTo,
    phrase,
    author
  };
  const { data, isLoading, createData } = useRequest('/phrases', body, {
    apikey: config.APIKEY
  }); 
  return (
    <Style.HomeContainer>
      <Header 
        clickOpenModal={() => setOpenCreatePostModal(true)}
      />
      {isLoading && <p>Carregando...</p>}
      <Style.PostCards>
        {data?.map(phrase => {
          return (
            <div key={phrase.id}>
              <h3>{phrase.posted_to}</h3>
              <p>"{phrase.phrase}"</p>
              <h4>{phrase.author}</h4>
              <h4>{phrase.created_at}</h4>
            </div>
          )
        })}
      </Style.PostCards>
      <Footer />
      {openCreatePostModal && <CreatePostModal 
        changePostedTo={e => setPostedTo(e.target.value)}
        changePhrase={e => setPhrase(e.target.value)}
        changeAuthor={e => setAuthor(e.target.value)}
        postedTo={postedTo}
        phrase={phrase}
        author={author}
        onSubmit={() => createData()} 
        clickCloseModal={() => setOpenCreatePostModal(false)}
      />}
    </Style.HomeContainer>
  );
};

export default Home;
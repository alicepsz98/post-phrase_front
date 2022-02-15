import React, { useState } from 'react';
import * as Style from './styles';
import { apikey } from '../../services/api';
import { useRequest } from '../../hooks/useRequest';
import { CreatePostModal } from '../../components/CreatePostModal';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PostCard } from '../../components/PostCard';

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
  const { data, isLoading, createData } = useRequest('/phrases', body, {apikey: apikey}); 
  return (
    <Style.HomeContainer>
      <Header 
        clickOpenModal={() => setOpenCreatePostModal(true)}
      />
      {isLoading && <p>Carregando...</p>}
      <Style.PostCards>
        <PostCard data={data} />
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
import React from 'react';
import GlobalStyles from './styles/global';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;

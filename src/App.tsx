import { useState } from 'react';
import './App.css';
import Subtitle from './components/subtitle';
import Title from './components/title';
import Footer from './components/footer/footer';

const App = () => {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    }}>
      <Title />
      <Subtitle />
      <Footer />
    </div>
  );
};

export default App;

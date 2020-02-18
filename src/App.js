import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';
import Routes from './Routes';
import Footer from './components/Footer';

function App() {
  return (
      <BrowserRouter>
        <Nav/>
        <Body>
          <Routes/>
        </Body>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;

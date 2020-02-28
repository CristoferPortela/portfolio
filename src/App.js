import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/liz.min.css';
import 'material-icons';
import './App.sass';
import Nav from './components/Nav';
import Header from './components/Header';
import Body from './components/Body';
import Routes from './Routes';
import Footer from './components/Footer';

export default () => {
  return (
      <BrowserRouter>
        <Nav/>
        <Header/>
        <Body>
          <Routes/>
        </Body>
        <Footer/>
      </BrowserRouter>
  );
}
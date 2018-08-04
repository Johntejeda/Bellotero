import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import  BelloteroLogo  from './img/bellotero-logo.svg';
import  BelloteroLogoF  from './img/bellotero-logo-white.svg';
import  Mock  from './img/hero-mockup@3x.png';

import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';



class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header logo={BelloteroLogo}/>
         <Main/>
         <Footer logoF={BelloteroLogoF}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './template/header/header';
import Hero from './template/hero/hero';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <section className="container-app">
          <Hero>
            <h1>Titulo de seccion</h1>
            <h2>Subtitulo</h2>
          </Hero>
          <div className="body-app">
            sdasd
          </div>
        </section>
      </div>
    );
  }
}

export default App;

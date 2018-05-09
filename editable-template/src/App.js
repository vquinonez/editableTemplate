import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './template/header/header';
import Footer from './template/footer/footer';
import Hero from './template/hero/hero';
import Section from './template/section/section';
import Color from './template/colors/colors';
import Button from './template/button/button';

import Editor from './editor/editor';

class App extends Component {
  render() {
    return (
      <div>
        <Editor></Editor>
        <Header></Header>
        <section className="container-app">
          <Hero>
            <h1>Titulo de seccion</h1>
            <h2>Subtitulo</h2>
          </Hero>
          <div className="body-section">
            <Section title="Colores">
              <Color name="Black" color="black" className="quarter"></Color>
              <Color name="White" color="white" className="quarter"></Color>
              <Color name="Primary" color="blue" className="quarter"></Color>
              <Color name="Secondary" color="red" className="quarter"></Color>
              <Color name="Tertiary" color="brown" className="quarter"></Color>
              <Color name="Success" color="green" className="quarter"></Color>
              <Color name="Error" color="purple" className="quarter"></Color>
              <Color name="Warning" color="yellow" className="quarter"></Color>
            </Section>
            <Section title="Headers" className="half">
              <h1>Titulo 1</h1>
              <h2>Titulo 2</h2>
              <h3>Titulo 3</h3>
              <h4>Titulo 4</h4>
              <h5>Titulo 5</h5>
            </Section>
            <Section title="Paragraph" className="half">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis, massa vitae ornare tristique, quam ante lacinia enim, eu consectetur magna dolor ac massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc enim est, condimentum vel sapien non, consequat bibendum diam. Integer scelerisque metus quis elit commodo, in venenatis metus pulvinar. Suspendisse euismod imperdiet ligula id feugiat. Nunc a elit posuere, dictum neque ac, pellentesque tortor. Sed non ante mi. Nulla eget finibus eros. Nullam pellentesque luctus odio, id porta justo vestibulum nec. Nam laoreet ornare turpis eget facilisis.</p>
            </Section>
            <Section title="Buttons">
              <div className="quarter padings">
                <Button className="primary" color="blue" colorText="white">Primario</Button>
              </div>
              <div className="quarter padings">
              <Button className="primary" color="blue" inverted={true}>Primario invertido</Button>
              </div>
              <div className="quarter padings">
              <Button className="secondary">Secundario</Button>
              </div>
              <div className="quarter padings">
              <Button className="secondary" inverted={true}>Secundario invertido</Button>
              </div>
              <div className="quarter padings">
              <Button className="Success">Success</Button>
              </div>
              <div className="quarter padings">
              <Button className="Success" inverted={true}>Success invertido</Button>
              </div>
              <div className="quarter padings">
              <Button className="Cancel">Cancel</Button>
              </div>
              <div className="quarter padings">
              <Button className="Cancel" inverted={true}>Cancel invertido</Button>
              </div>
            </Section>
          </div>
        </section>
        <Footer>
          <p> Accenture </p>
          <p> Footer </p>
        </Footer>
      </div>
    );
  }
}

export default App;

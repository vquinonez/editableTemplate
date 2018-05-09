import React, { Component } from 'react';
import './editor-color.css';

import Section from '../../template/section/section'
import Color from '../common-form/color/color'
import TextBox from '../common-form/textbox/textbox'
import Number from '../common-form/number/number'

class EditorColor extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.handleColor = this.handleColor.bind(this);
  }

  render() {
    return (
      <Section title="Colores" className="quarter padings">
          <Color name="black"label="Black:" hex={this.state.black} onChange={this.handleColor}></Color>
          <Color name="white" label="White:" hex={this.state.white} onChange={this.handleColor}></Color>
          <Color name="primary" label="Primary color:" hex={this.state.primary} onChange={this.handleColor}></Color>
          <Color name="secondary" label="Secondary color:" hex={this.state.secondary} onChange={this.handleColor}></Color>
          <Color name="tertiary" label="Tertiary color:" hex={this.state.tertiary} onChange={this.handleColor}></Color>
          <Color name="success" label="Success color:" hex={this.state.success} onChange={this.handleColor}></Color>
          <Color name="error" label="Error color:" hex={this.state.error} onChange={this.handleColor}></Color>
          <Color name="warning" label="Warning color:" hex={this.state.warning} onChange={this.handleColor}></Color>
      </Section>
    );
  } 

  handleColor(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

}

export default EditorColor;

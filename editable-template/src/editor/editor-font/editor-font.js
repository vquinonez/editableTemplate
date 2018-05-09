import React, { Component } from 'react';
import './editor-font.css';

import Section from '../../template/section/section'
import TextBox from '../common-form/textbox/textbox'
import Number from '../common-form/number/number'

function EditorFont (  ) {
  return (
    <Section title="Fonts" className="quarter padings">
        <TextBox label="Font url:"></TextBox>
        <Number label="FontSize Base:" secondLabel="PX"></Number>
    </Section>
  );
}

export default EditorFont;

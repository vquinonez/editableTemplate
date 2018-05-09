import React, { Component } from 'react';
import './editor.css';

import ToggleEditor from "./toggle-editor/toggle-editor";
import Section from '../template/section/section'
import EditorColor from './editor-color/editor-color'
import EditorFont from './editor-font/editor-font'

class Editor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: true
        }
    }

    render() {
        return (
            <div className={`editor ${(this.state.open) ? '' : 'hide'}`}>
                <ToggleEditor text="Abrir Editor" click={this.toggleEditor.bind(this)}></ToggleEditor>
                <ToggleEditor text="Cerrar Editor" click={this.toggleEditor.bind(this)} style = { { left: 'calc(100vw - 140px)' } }></ToggleEditor>
                
                <Section title="Editor" className="body-section">
                    <EditorColor>

                    </EditorColor>
                    <EditorFont>

                    </EditorFont>
                </Section>

            </div>
        );
    }

    toggleEditor(e) {
        console.log(this.state.open);
        this.setState({open: !this.state.open})
    }

}

export default Editor;

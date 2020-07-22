import React, { useState } from 'react';
import Slider from './Slider';
import { chromePicker, ChromePicker } from 'react-color';
import Content from './Content';
import Toggle from './Toggle';
import css from './../css/sliders.css';
import ColorPicker from './ColorPicker';

class Sliders extends React.Component {

    state = {
        inset: false,
        offsetX: 0,
        offsetY: 0,
        blurRadius: 0,
        spreadRadius: 0,
        color: "rgba(0,0,0,1)",
        shadowIndex: 0,
        boxColor: "",
        backgroundColor: ""
    }

    handler = (model, value) => {
        this.setState({ [model]: value });
    }

    handleColor = color => {
        this.setState({ color: color.rgb });
    }

    render() {
        return (
            <div className="sliders">
                <Slider label="Horizontal Offset" handler={this.handler.bind(this, "offsetX")} />
                <Slider label="Vertical Offset" handler={this.handler.bind(this, "offsetY")} />
                <Slider label="Blur Radius" handler={this.handler.bind(this, "blurRadius")} min={0} />
                <Slider label="Spread Radius" handler={this.handler.bind(this, "spreadRadius")} />

                <ColorPicker label="Shadow Color" handler={this.handler.bind(this, "color")}/>

                <ColorPicker label="Box Color" 
                handler={this.handler.bind(this, "boxColor")}
                defaultColor={ {r: 240, g: 240, b: 240, a: 1} } />

                <ColorPicker label="Background Color" 
                handler={this.handler.bind(this, "backgroundColor")}
                defaultColor={ {r: 255, g: 255, b: 255, a: 1} } />

                <Toggle label="Outset / Inset"
                    handler={this.handler.bind(this, "inset", !this.state.inset)}
                    enabledText="Inset"
                    disabledText="Outset" />
            </div>
        )
    }
};

export default Sliders;
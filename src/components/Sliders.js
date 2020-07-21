import React, { useState } from 'react';
import Slider from './Slider';
import { chromePicker, ChromePicker } from 'react-color';
import Content from './Content';

class Sliders extends React.Component {

    state = {
        inset: false,
        offsetX: 0,
        offsetY: 0,
        blurRadius: 0,
        spreadRadius: 0,
        color: {
            r: 0,
            g: 0,
            b: 0,
            a: 0
        },
        shadowIndex: 0
    }

    handler = (model, event) => {
        this.setState({ [model]: event.target.value });
    }

    handleColor = color => {
        this.setState({ color: color.rgb });
    }

    render() {
        return (
            <div className="sliders">
                <Slider label="Horizontal Offset" handler={this.handler.bind(this, "offsetX")} />
                <Slider label="Vertical Offset" handler={this.handler.bind(this, "offsetY")} />
                <Slider label="Blur Radius" handler={this.handler.bind(this, "blurRadius")} min="0" />
                <Slider label="Spread Radius" handler={this.handler.bind(this, "spreadRadius")} />
                
                <ChromePicker color={this.state.color}
                onChange={this.handleColor.bind(this)} />

            </div>
        )
    }
};

export default Sliders;
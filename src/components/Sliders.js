import React from 'react';
import Slider from './Slider';
import Toggle from './Toggle';
import './../css/sliders.css';
import ColorPicker from './ColorPicker';

class Sliders extends React.Component {

    state = {
        inset: false,
        offsetX: 0,
        offsetY: 2,
        blurRadius: 5,
        spreadRadius: 2,
        color: "rgba(0,0,0,0.40)",
        shadowIndex: 0,
        boxColor: "rgba(240, 240, 240, 1)",
        backgroundColor: "rgba(255, 255, 255, 1)",
        boxSize: 100
    }

    componentDidMount() {
        this._callHandlerProp();
    }

    handler = (model, value) => {
        this.setState({ [model]: value }, this._callHandlerProp);
    }

    handleColor = color => {
        this.setState({ color: color }, this._callHandlerProp);
    }

    _callHandlerProp = () => {
        this.props.onChangeValues( this.state );
    }

    render() {
        return (
            <div className="sliders">
                <Toggle label="Outset / Inset"
                    handler={this.handler.bind(this, "inset", !this.state.inset)}
                    enabledText="Inset"
                    disabledText="Outset" />
                <Slider label="Horizontal Offset" handler={this.handler.bind(this, "offsetX")} defaultValue={0}/>
                <Slider label="Vertical Offset" handler={this.handler.bind(this, "offsetY")} defaultValue={2}/>
                <Slider label="Blur Radius" handler={this.handler.bind(this, "blurRadius")} min={0} defaultValue={5} />
                <Slider label="Spread Radius" handler={this.handler.bind(this, "spreadRadius")} defaultValue={2} />

                <ColorPicker label="Shadow Color" handler={this.handleColor.bind(this)}
                defaultColor={{r: 0, g: 0, b: 0, a: 0.40}}/>

                <ColorPicker label="Box Color" 
                handler={this.handler.bind(this, "boxColor")}
                defaultColor={ {r: 240, g: 240, b: 240, a: 1} } />

                <ColorPicker label="Background Color" 
                handler={this.handler.bind(this, "backgroundColor")}
                defaultColor={ {r: 255, g: 255, b: 255, a: 1} } />

                <Slider label="Box Size" 
                handler={this.handler.bind(this, "boxSize")} 
                min={0} 
                max={150} 
                defaultValue={100}/>

            </div>
        )
    }
};

export default Sliders;
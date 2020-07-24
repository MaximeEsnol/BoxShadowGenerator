import React from 'react';
import Slider from './Slider';
import Toggle from './Toggle';
import './../css/sliders.css';
import ColorPicker from './ColorPicker';
import { stringToRgbObject } from './../utils/shadow';


class Sliders extends React.Component {

    state = {
        inset: false,
        offsetX: 0,
        offsetY: 0,
        blurRadius: 0,
        spreadRadius: 0,
        color: "rgba(0,0,0,0)",
        shadowIndex: 0,
        boxColor: "rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(240, 240, 240, 1)",
        boxSize: 100
    }

    componentDidUpdate(prevProps) {
        if ( prevProps.defaultShadow !== this.props.defaultShadow ){
            this.setState({...this.props.defaultShadow});
        }
    }

    componentDidMount() {
        this.setState( {...this.props.defaultShadow}, () => this._callHandlerProp() );
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
                <Slider label="Horizontal Offset" handler={this.handler.bind(this, "offsetX")} defaultValue={this.props.defaultShadow.offsetX}/>
                <Slider label="Vertical Offset" handler={this.handler.bind(this, "offsetY")} defaultValue={this.props.defaultShadow.offsetY}/>
                <Slider label="Blur Radius" handler={this.handler.bind(this, "blurRadius")} min={0} defaultValue={this.props.defaultShadow.blurRadius} />
                <Slider label="Spread Radius" handler={this.handler.bind(this, "spreadRadius")} defaultValue={this.props.defaultShadow.spreadRadius} />

                <ColorPicker label="Shadow Color" handler={this.handleColor.bind(this)}
                defaultColor={stringToRgbObject( this.props.defaultShadow.color )}/>

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
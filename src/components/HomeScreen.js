import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Sliders from './Sliders';
import Box from './Box';
import Code from './Code';
import css from './../css/homescreen.css';

class HomeScreen extends Component {

    state = {
        boxShadow: "0px 2px 5px 2px rgba(0, 0, 0, 0.40)",
        backgroundColor: "rgba(255, 255, 255, 1)",
        boxColor: "rgba(240, 240, 240, 1)",
        boxSize: 100
    }

    handleShadowValues = values => {
        let boxShadow = "";

        boxShadow += ( values.inset ) ? "inset " : " ";
        boxShadow += values.offsetX + "px ";
        boxShadow += values.offsetY + "px ";
        boxShadow += values.blurRadius + "px ";
        boxShadow += values.spreadRadius + "px ";
        boxShadow += values.color;

        this.setState({
            boxShadow: boxShadow, 
            backgroundColor: values.backgroundColor, 
            boxColor: values.boxColor,
            boxSize: values.boxSize
        });
    }

    render() {
        return(
            <div className="container">
                <Header/>
                <Content>
                    <Sliders onChangeValues={this.handleShadowValues.bind(this)} />
                    <Box backgroundColor={this.state.backgroundColor} 
                    boxColor={this.state.boxColor} 
                    boxShadow={this.state.boxShadow}
                    boxSize={this.state.boxSize}/>
                </Content>

                
                <Code shadows={this.state.boxShadow}/>
            </div>
        )
    }
};

export default HomeScreen;
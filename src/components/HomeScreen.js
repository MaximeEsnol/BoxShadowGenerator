import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Sliders from './Sliders';
import Box from './Box';
import Code from './Code';
import css from './../css/homescreen.css';

class HomeScreen extends Component {

    state = {
        boxShadow: "0px 2px 5px 2px #00000059;"
    }

    handleShadowValues = values => {
        let boxShadow = "";

        boxShadow += ( values.inset ) ? "inset " : " ";
        boxShadow += values.offsetX + "px ";
        boxShadow += values.offsetY + "px ";
        boxShadow += values.blurRadius + "px ";
        boxShadow += values.spreadRadius + "px ";
        boxShadow += values.color;

        console.log(boxShadow);

        this.setState({boxShadow: boxShadow});
    }

    render() {
        return(
            <div className="container">
                <Header/>
                <Content>
                    <Sliders onChangeValues={this.handleShadowValues.bind(this)} />
                    <Box boxShadow={this.state.boxShadow}/>
                </Content>
                <Content>
                    <Code/>
                </Content>
            </div>
        )
    }
};

export default HomeScreen;
import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Sliders from './Sliders';
import Box from './Box';
import Code from './Code';
import css from './../css/homescreen.css';

class HomeScreen extends Component {

    render() {
        return(
            <div className="container">
                <Header/>
                <Content>
                    <Sliders/>
                    <Box/>
                </Content>
                <Content>
                    <Code/>
                </Content>
            </div>
        )
    }
};

export default HomeScreen;
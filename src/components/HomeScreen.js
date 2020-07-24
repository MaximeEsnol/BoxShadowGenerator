import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Sliders from './Sliders';
import Box from './Box';
import Code from './Code';
import './../css/homescreen.css';
import ShadowList from './ShadowList';
import { DEFAULT_SHADOW } from './../utils/shadow';

class HomeScreen extends Component {

    state = {
        currentShadowIndex: 0,
        boxShadows: [],
        defaultSelection: DEFAULT_SHADOW,
        backgroundColor: "rgba(255, 255, 255, 1)",
        boxColor: "rgba(240, 240, 240, 1)",
        boxSize: 100
    }

    verifyValidShadowIndex = () => {
        if ( this.state.boxShadows.length <= this.state.currentShadowIndex ) {
            let newIndex = this.state.boxShadows.length;
            
            this.setState( {
                boxShadows: [...this.state.boxShadows, {}],
                currentShadowIndex: newIndex
            } );
        }
    }

    updateCurrentShadow = newShadow => {
        let shadows = [...this.state.boxShadows];
        let targetShadow = [shadows[ this.state.currentShadowIndex ]];
        targetShadow = newShadow;
        shadows[ this.state.currentShadowIndex ] = targetShadow;

        return shadows;
    }

    handleShadowValues = values => {

        this.verifyValidShadowIndex();

        let shadow = {
            inset: values.inset,
            offsetX: values.offsetX,
            offsetY: values.offsetY,
            blurRadius: values.blurRadius,
            spreadRadius: values.spreadRadius,
            color: values.color
        };

        this.setState({
            boxShadows: this.updateCurrentShadow( shadow ), 
            backgroundColor: values.backgroundColor, 
            boxColor: values.boxColor,
            boxSize: values.boxSize
        });
    }

    handleAddShadow = () => {
        let lastShadow = { ...this.state.boxShadows[this.state.currentShadowIndex]};
        this.setState( { 
            boxShadows: [...this.state.boxShadows, lastShadow ],
            currentShadowIndex: this.state.currentShadowIndex+1
        } );

    }

    handleSelectLayer = ( layerIndex ) => {
        this.setState({
            currentShadowIndex: layerIndex,
            defaultSelection: this.state.boxShadows[layerIndex]
        });
    }

    render() {
        return(
            <div className="container">
                <Header/>
                <Content>
                    <Sliders onChangeValues={this.handleShadowValues.bind(this)}
                    defaultShadow={this.state.defaultSelection} />
                    <Box backgroundColor={this.state.backgroundColor} 
                    boxColor={this.state.boxColor} 
                    boxShadows={this.state.boxShadows}
                    boxSize={this.state.boxSize}/>
                    <ShadowList shadows={this.state.boxShadows}
                    current={this.state.currentShadowIndex}
                    addShadowHandler={this.handleAddShadow.bind(this)}
                    onClickLayer={this.handleSelectLayer.bind(this)}/>
                </Content>

                
                <Code shadows={this.state.boxShadows}/>
            </div>
        )
    }
};

export default HomeScreen;
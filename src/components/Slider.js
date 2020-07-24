import React, { Component } from 'react';
import uniqid from 'uniqid';
import './../css/slider.css';
import PropTypes from 'prop-types';

/**
 * Represents a stylized input with type "range". 
 */
class Slider extends Component {
    state = {
        currentValue: 0
    }

    static propTypes = {
        /** The minimum value. Default: -100 */
        min: PropTypes.number,
        /** The maximum value. Default: 100 */
        max: PropTypes.number,
        /** The default value. Default: 0 */
        defaultValue: PropTypes.number,
        /** A function that handles the slider value. */
        handler: PropTypes.func,
        /** A label to shortly describe the slider. Default: "Slider" */
        label: PropTypes.string
    }

    static defaultProps = {
        min: -100,
        max: 100,
        defaultValue: 0,
        label: "Slider"
    }

    componentDidMount() {
        this.setState({currentValue: this.props.defaultValue});
    }

    constructor( props ) {
        super();
        this.props = props;
        this.uniqueId = uniqid();
    }

    handleChange = ( event ) => {
        event.stopPropagation();
        let numberValue = parseInt( event.target.value );
        this.setState( { currentValue: numberValue } );
        this.props.handler( numberValue );
    }

    render() {
        return(
            <div className="input-field slider">
                <div className="user-information">
                    <label htmlFor={this.uniqueId}>
                        { this.props.label }
                    </label>

                    <input type="number" 
                    id={this.uniqueId}
                    value={this.state.currentValue} 
                    onChange={ event => this.handleChange( event ) }/>
                </div>
                
                <input type="range" 
                min={this.props.min}
                max={this.props.max} 
                value={this.state.currentValue}
                onChange={ event => this.handleChange( event ) }/>
            </div>
        )
    }
}

export default Slider;
import React from 'react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import css from './../css/toggle.css';

class Toggle extends React.Component {

    constructor() {
        super();
        this.uniqueId = uniqid();
    }

    static propTypes = {
        /** A label to shortly described what is being toggled. Default: "Toggle" */
        label: PropTypes.string,
        /** Text to appear on the off/disabled side of the toggle. Default: null */
        disabledText: PropTypes.string,
        /** Text to appear on the on/enabled side of the toggle. Default: null */
        enabledText: PropTypes.string,
        /** A function to handle the changes in value of the toggle. */
        handler: PropTypes.func
    };

    static defaultProps = {
        label: "Toggle"
    };

    state = {
        toggled: false
    };

    shouldComponentUpdate(newProps, newState) {
        return newState.toggled !== this.state.toggled;
    }

    handleChange = event => {
        this.setState({ toggled: event.target.value });
        this.props.handler(event);
    }

    render() {
        return (
            <div className="input-field toggle">
                <label for={this.uniqueId}>
                    {this.props.label}
                </label>
                {
                    this.props.disabledText &&
                    <p>
                        {this.props.disabledText}
                    </p>
                }
                <input type="checkbox"
                    checked={this.state.toggled}
                    onChange={event => this.handleChange(event)} />
                {
                    this.props.enabledText &&
                    <p>
                        {this.props.enabledText}
                    </p>
                }
            </div>
        );
    }
};

export default Toggle;
import React from 'react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import './../css/toggle.css';

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

    handleChange = () => {
        this.setState({ toggled: !this.state.toggled });
        this.props.handler( );
    }

    render() {
        return (
            <div className="input-field toggle">
                <label htmlFor={this.uniqueId}>
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
                    onChange={ this.handleChange }
                    id={this.uniqueId} />
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
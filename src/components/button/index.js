import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
class sharedButton extends Component {
    summitEvent() {
        if (this.props.emitEvent) {
            this.props.emitEvent();
        }
    }
    render() {
        const { buttonText } = this.props;
        return (
            <button data-test="buttonComponent" onClick={() => this.summitEvent()}>
                {buttonText}
            </button>
        )
    }
}

sharedButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: func
}
export default sharedButton;
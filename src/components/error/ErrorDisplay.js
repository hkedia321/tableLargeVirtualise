import React from 'react';
import PropTypes from 'prop-types';

const ErrorDisplay = (props) => {
    return (
        <h4 align="center" style={{color: '#F44336'}}>
            Error: {props.message}
        </h4>
    )
}

ErrorDisplay.propTypes = {
    message: PropTypes.string
}

export default ErrorDisplay;
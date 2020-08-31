import React from 'react';
import PropTypes from 'prop-types';

const ErrorDisplay = React.memo(function(props){
    return (
        <h4 data-testid="errorDisplay" align="center" style={{color: '#F44336'}}>
            Error: {props.message}
        </h4>
    )
})

ErrorDisplay.propTypes = {
    message: PropTypes.string
}

export default ErrorDisplay;
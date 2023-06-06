import { PropTypes } from 'prop-types'
import React from 'react';

function ShowCount ({count}) {
    console.log("Show Count")
    
    return (
        <>
        <p>Count Value: {count}</p>
        </>
    )
}

ShowCount.propTypes = {
    count: PropTypes.number
}

export default React.memo(ShowCount);
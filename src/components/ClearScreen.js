import React, { Component } from 'react';

const ClearScreen = ({action}) => {
	return (
		<button onClick={action} className="clear">clear</button>
	)
}

export default ClearScreen

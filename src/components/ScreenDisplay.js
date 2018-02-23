import React, { Component } from 'react';

// const ScreenDisplay = ({display, displayNumber}) => {
class ScreenDisplay extends Component {
	// constructor(props) {
	// 	super(props)
	//
	// 	// var screen = document.querySelector('.calc__screen');
	// }
	// componentDidMount() {
	// 	// var screen = document.querySelector('.calc__screen');
	// }
	// componentWillMount() {
	// 	if (screen) {
	// 		// var screen = document.querySelector('.calc__screen');
	// 		// if (this.props.displayNumber.length > 10) {
	// 		// 	// screen = document.querySelector('.calc__screen');
	// 		// 	// console.log(screen.classList);
	// 		// 	screen.classList.add('calc__screen--small-txt');
	// 		// 	// screen.style.font-size = "5px;"
	// 		// } else {
	// 		// 	screen.classList.remove('.calc__screen--small-txt');
	// 		// 	console.log('make it big again');
	// 		// }
	// 		console.log(screen);
	// 	}
	// }
	render() {
		return (
			<div className="calc__screen">{this.props.display}</div>
		)
	}
}

export default ScreenDisplay

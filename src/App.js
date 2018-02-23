import React, { Component } from 'react';
import ClearFormulaBtnHighlights from './components/ClearButtonHighlights';
import ClearScreen from './components/ClearScreen';
import ScreenDisplay from './components/ScreenDisplay';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSymbol: "",
			screenDisplay: 0,
			firstValue: 0,
			secondValue: 0,
			hasTyped: false,
			wasFormulaStarted: false
		}
		this.updateValue = this.updateValue.bind(this);
		this.calculateSum = this.calculateSum.bind(this);
		this.clearScreen = this.clearScreen.bind(this);

	}

	calculateSum() {
		const formula = this.state.firstValue + this.state.activeSymbol + this.state.secondValue;
		console.log(formula);
		function calculateValues(fn) {
			return new Function('return ' + fn)();
		}
		const formulatedValue = calculateValues(formula);
		console.log(formulatedValue);
		this.setState({
			firstValue: formulatedValue,
			screenDisplay: formulatedValue,
			secondValue: 0
		})
	}

	updateValue(event) {
		//  adds/removes the btn highlights
		//  sets the
		const btnPressed = event.target.getAttribute('data-calc-symbol');

		if (event.target.classList.contains('calc__symbol')) {
			ClearFormulaBtnHighlights();
			event.target.classList.add('activeEquationBtn');

			this.setState({
				wasFormulaStarted: true,
				hasTyped: false,
				activeSymbol: btnPressed
			})
		}

		// CALCULATION FUNCTION
		if (this.state.wasFormulaStarted === true &&
			this.state.activeSymbol !== "" &&
			event.target.classList.contains('calc__symbol')) {
				if (this.state.secondValue === 0) {
					console.log('inside if calculate fn');
					this.setState({
						activeSymbol: btnPressed
					})
				} else {
					console.log('inside else calculate fn');
					const formula = this.state.firstValue + this.state.activeSymbol + this.state.secondValue;
					console.log(formula);
					function calculateValues(fn) {
						return new Function('return ' + fn)();
					}
					const formulatedValue = calculateValues(formula);
					console.log(formulatedValue);
					this.setState({
						firstValue: formulatedValue,
						screenDisplay: formulatedValue,
						secondValue: 0
					})
				}
		}

		if (!event.target.classList.contains('calc__symbol')) {
			if (this.state.wasFormulaStarted === false) {
				if (this.state.hasTyped === false) {
					this.setState({
						screenDisplay: event.target.getAttribute('data-btn-number'),
						firstValue: event.target.getAttribute('data-btn-number'),
						hasTyped: true
					})
				} else {
					this.setState({
						firstValue: this.state.firstValue += event.target.getAttribute('data-btn-number'),
						screenDisplay: this.state.screenDisplay += event.target.getAttribute('data-btn-number')
					})
				}
			} else {
				ClearFormulaBtnHighlights();

				if (this.state.hasTyped === false) {
					this.setState({
						screenDisplay: event.target.getAttribute('data-btn-number'),
						secondValue: event.target.getAttribute('data-btn-number'),
						hasTyped: true
					})
				} else {
					this.setState({
						secondValue: this.state.secondValue += event.target.getAttribute('data-btn-number'),
						screenDisplay: this.state.secondValue
					})
				}
			}
		}
	}

	clearScreen() {
		ClearFormulaBtnHighlights();
		this.setState({
			activeSymbol: "",
			screenDisplay: 0,
			firstValue: 0,
			secondValue: 0,
			hasTyped: false,
			wasFormulaStarted: false
		})
	}

	render() {
		return (
			<div className="calc">
				<ScreenDisplay display={this.state.screenDisplay}
							   displayNumber={this.state.screenDisplay}/>
				<ClearScreen action={this.clearScreen} />
				<button onClick={this.updateValue} data-calc-symbol="/" className="input calc__symbol">÷</button>
				<button onClick={this.updateValue} data-btn-number="7" className="input">7</button>
				<button onClick={this.updateValue} data-btn-number="8" className="input">8</button>
				<button onClick={this.updateValue} data-btn-number="9" className="input">9</button>
				<button onClick={this.updateValue} data-calc-symbol="-" className="input calc__symbol">-</button>
				<button onClick={this.updateValue} data-btn-number="4" className="input">4</button>
				<button onClick={this.updateValue} data-btn-number="5" className="input">5</button>
				<button onClick={this.updateValue} data-btn-number="6" className="input">6</button>
				<button onClick={this.updateValue} data-calc-symbol="+" className="input calc__symbol">+</button>
				<button onClick={this.updateValue} data-btn-number="1" className="input">1</button>
				<button onClick={this.updateValue} data-btn-number="2" className="input">2</button>
				<button onClick={this.updateValue} data-btn-number="3" className="input">3</button>
				<button onClick={this.calculateSum} className="input calc__symbol">=</button>
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';

const ClearFormulaBtnHighlights = () => {
	let active = Array.from(document.getElementsByClassName('activeEquationBtn'));
		active.map((btn) => {
			btn.classList.remove('activeEquationBtn');
		})
}

export default ClearFormulaBtnHighlights;

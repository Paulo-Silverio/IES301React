import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './CSS.css';

function Calculadora() {
	const [displayValue, setDisplayValue] = useState('0');
	const [firstOperand, setFirstOperand] = useState(null);
	const [operator, setOperator] = useState(null);
	const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

	const inputDigit = (digit) => {
		if (waitingForSecondOperand) {
			setDisplayValue(String(digit));
			setWaitingForSecondOperand(false);
		} else {
			setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
		}
	};

	const inputDecimal = () => {
		if (!displayValue.includes('.')) {
			setDisplayValue(displayValue + '.');
		}
	};

	const clearDisplay = () => {
		setDisplayValue('0');
		setFirstOperand(null);
		setOperator(null);
		setWaitingForSecondOperand(false);
	};

	const performOperation = (nextOperator) => {
		const inputValue = parseFloat(displayValue);

		if (firstOperand === null) {
			setFirstOperand(inputValue);
		} else if (operator) {
			const result = calculate(firstOperand, inputValue, operator);
			setDisplayValue(String(result));
			setFirstOperand(result);
		}

		setWaitingForSecondOperand(true);
		setOperator(nextOperator);
	};

	const calculate = (firstOperand, secondOperand, operator) => {
		if (operator === '+') {
			return firstOperand + secondOperand;
		} else if (operator === '-') {
			return firstOperand - secondOperand;
		} else if (operator === '*') {
			return firstOperand * secondOperand;
		} else if (operator === '/') {
			return firstOperand / secondOperand;
		}

		return secondOperand;
	};

	return (
		<div class="calculator">
			<div className="display">

				<input type="text" id="display-input" value={displayValue} disabled />
			</div>
			<div className="buttons">
				<div className="row">
					<button className="button" onClick={() => inputDigit('7')}>7</button>
					<button className="button" onClick={() => inputDigit('4')}>4</button>
					<button className="button" onClick={() => inputDigit('1')}>1</button>
					<button className="button" onClick={() => inputDigit('.')}>.</button>
				</div>
				<div className="row">
					<button className="button" onClick={() => inputDigit('8')}>8</button>
					<button className="button" onClick={() => inputDigit('5')}>5</button>
					<button className="button" onClick={() => inputDigit('2')}>2</button>
					<button className="button" onClick={() => performOperation('0')}>0</button>
				</div>
				<div className="row">
					<button className="button" onClick={() => inputDigit('9')}>9</button>
					<button className="button" onClick={() => inputDigit('6')}>6</button>
					<button className="button" onClick={() => inputDigit('3')}>3</button>
					<button className="button" onClick={() => performOperation('-')}>-</button>
				</div>
				<div className="row">
					
					<button className="button" onClick={() => performOperation('*')}>x</button>
					<button className="button" onClick={() => performOperation('/')}>÷</button>
					<button className="button" onClick={() => performOperation('+')}>+</button>
					<button className="button" onClick={() => performOperation('=')}>=</button>
					<button onClick={clearDisplay}>AC</button>
				</div>
			</div>
		</div>
	);
}

ReactDOM.render(<Calculadora />, document.getElementById('root'));
export default Calculadora;

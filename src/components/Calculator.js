import Button from "./Button";
import Display from "./Display";
import { useState } from 'react';

function Calculator() {
    const [currentOperand, setCurrentOperand] = useState('0');
    const [previousOperand, setPreviousOperand] = useState('0');
    const [operator, setOperator] = useState('');

    // functions to alter current operand
    function handleClickDigit(clickedValue) {
        if(currentOperand === '0') {
            setCurrentOperand( clickedValue );
        } else {
            setCurrentOperand( currentOperand.concat(clickedValue) );
        }
    }

    function handleClickSign() {
        if( currentOperand !== '0') {
            if(currentOperand.charAt() === '-') {
                setCurrentOperand( currentOperand.slice(1) );
            } else {
                setCurrentOperand( currentOperand.padStart(currentOperand.length + 1, '-') );
            }
        }
    }

    function resetToZero() {
        setCurrentOperand('0');
    }

    function handleClickBackspace() {
        if(currentOperand.length === 1 || (currentOperand.length === 2 && currentOperand.charAt() === '-') ) {
            resetToZero(0);
        } else {
            setCurrentOperand( currentOperand.slice(0, currentOperand.length-1) );
        }
    }

    function handleClickPoint() {
        if( currentOperand.indexOf('.') === -1 ) {
            setCurrentOperand( currentOperand.concat('.') );
        }
    }

    // functions for operations
    function handleClickBinaryOp(symbol) {
        if(operator !== '') {
            const result = calculateBinaryOp(Number(previousOperand), Number(currentOperand), operator);
            setPreviousOperand(result.toString());
        } else {
            setPreviousOperand(currentOperand);
        }
        setOperator(symbol);
        resetToZero();
    }

    function handleClickEqual() {
        if(operator !== '') {
            const result = calculateBinaryOp(Number(previousOperand), Number(currentOperand), operator);
            setCurrentOperand(result.toString());
            setOperator('');
            setPreviousOperand('0');
        }
    }

    function calculateBinaryOp(x, y, op) {
        if(op === '+') {
            return x + y;
        } else if(op === '-') {
            return x - y;
        } else if(op === '*') {
            return x * y;
        } else if(op === '/') {
            return x / y;
        }
    }
    
    function handleClickUnaryOp(symbol) {
        let result;
        if(operator !== '') {
            result = calculateUnaryOp( calculateBinaryOp(Number(previousOperand), Number(currentOperand), operator), symbol );
        } else {
            result = calculateUnaryOp(Number(currentOperand), symbol);
        }
        setCurrentOperand(result.toString());
    }

    function calculateUnaryOp(x, op) {
        if(op === '%') {
            return x / 100;
        } else if (op === 'pow') {
            return x * x;
        } else if (op === 'sqr') {
            return Math.sqrt(x);
        } else if (op === 'inv') {
            return 1 / x;
        }
    }

    // reset whole calculation
    function resetCalculation() {
        resetToZero();
        setPreviousOperand('0');
        setOperator('');
    }

    return(
        <div className="calculator-container">
            <Display currentText={currentOperand}/>

            <div className="button-container">
                <Button text={'%'} onClickButton={() => handleClickUnaryOp('%')}/>
                <Button text={'CE'} onClickButton={resetToZero}/>
                <Button text={'C'} onClickButton={resetCalculation}/>
                <Button text={'\u232b'} onClickButton={handleClickBackspace}/>

                <Button text={'¹⁄ₓ'} onClickButton={() => handleClickUnaryOp('inv')}/>
                <Button text={'x\u00b2'} onClickButton={() => handleClickUnaryOp('pow')}/>
                <Button text={'\u221a'} onClickButton={() => handleClickUnaryOp('sqr')}/>
                <Button text={'\u00f7'} onClickButton={() => handleClickBinaryOp('/')}/>

                <Button text={'7'} onClickButton={() => handleClickDigit('7')}/>
                <Button text={'8'} onClickButton={() => handleClickDigit('8')}/>
                <Button text={'9'} onClickButton={() => handleClickDigit('9')}/>
                <Button text={'\u00d7'} onClickButton={() => handleClickBinaryOp('*')}/>

                <Button text={'4'} onClickButton={() => handleClickDigit('4')}/>
                <Button text={'5'} onClickButton={() => handleClickDigit('5')}/>
                <Button text={'6'} onClickButton={() => handleClickDigit('6')}/>
                <Button text={'-'} onClickButton={() => handleClickBinaryOp('-')}/>

                <Button text={'1'} onClickButton={() => handleClickDigit('1')}/>
                <Button text={'2'} onClickButton={() => handleClickDigit('2')}/>
                <Button text={'3'} onClickButton={() => handleClickDigit('3')}/>
                <Button text={'+'} onClickButton={() => handleClickBinaryOp('+')}/>

                <Button text={'⁺⁄₋'} onClickButton={handleClickSign}/>
                <Button text={'0'} onClickButton={() => handleClickDigit('0')}/>
                <Button text={'.'} onClickButton={handleClickPoint}/>
                <Button text={'='} onClickButton={handleClickEqual}/>                
            </div>
        </div>
    );
}

export default Calculator;
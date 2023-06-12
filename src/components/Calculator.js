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
        setPreviousOperand(currentOperand);
        setOperator(symbol);
        resetToZero();
    }

    function handleClickEqual() {
        let result;
        if(operator === '+') {
            result = Number(previousOperand) + Number(currentOperand);
        } else if(operator === '-') {
            result = Number(previousOperand) - Number(currentOperand);
        } else if(operator === '*') {
            result = Number(previousOperand) * Number(currentOperand);
        } else if(operator === '/') {
            result = Number(previousOperand) / Number(currentOperand);
        }
        if(operator !== '') {
            setCurrentOperand(result.toString());
            setOperator('');
            setPreviousOperand('0');
        }
    }
    
    function handleClickUnaryOp(symbol) {
        let result;
        if(symbol === '%') {
            result = Number(currentOperand) / 100;
        } else if(symbol === 'pow') {
            result = Number(currentOperand) * Number(currentOperand);
        } else if(symbol === 'sqr') {
            result = Math.sqrt(Number(currentOperand));
        } else if(symbol === 'inv') {
            result = 1 / Number(currentOperand);
        }
        setCurrentOperand(result.toString());
    }

    // reset whole calculation
    function resetCalculation() {
        resetToZero();
        setPreviousOperand('0');
        setOperator('');
    }

    return(
        <div>
            <Display currentText={currentOperand} />

            <div>
                <Button text={'+'} onClickButton={() => handleClickBinaryOp('+')}/>
                <Button text={'-'} onClickButton={() => handleClickBinaryOp('-')}/>
                <Button text={'*'} onClickButton={() => handleClickBinaryOp('*')}/>
                <Button text={'/'} onClickButton={() => handleClickBinaryOp('/')}/>

                <Button text={'%'} onClickButton={() => handleClickUnaryOp('%')}/>
                <Button text={'pow'} onClickButton={() => handleClickUnaryOp('pow')}/>
                <Button text={'sqr'} onClickButton={() => handleClickUnaryOp('sqr')}/>
                <Button text={'1/x'} onClickButton={() => handleClickUnaryOp('inv')}/>

                <Button text={'='} onClickButton={handleClickEqual}/>

                <Button text={'7'} onClickButton={() => handleClickDigit('7')}/>
                <Button text={'8'} onClickButton={() => handleClickDigit('8')}/>
                <Button text={'9'} onClickButton={() => handleClickDigit('9')}/>
                <Button text={'4'} onClickButton={() => handleClickDigit('4')}/>
                <Button text={'5'} onClickButton={() => handleClickDigit('5')}/>
                <Button text={'6'} onClickButton={() => handleClickDigit('6')}/>
                <Button text={'1'} onClickButton={() => handleClickDigit('1')}/>
                <Button text={'2'} onClickButton={() => handleClickDigit('2')}/>
                <Button text={'3'} onClickButton={() => handleClickDigit('3')}/>
                <Button text={'0'} onClickButton={() => handleClickDigit('0')}/>

                <Button text={'.'} onClickButton={handleClickPoint}/>

                <Button text={'C'} onClickButton={resetCalculation}/>
                <Button text={'CE'} onClickButton={resetToZero}/>
                <Button text={'<x'} onClickButton={handleClickBackspace}/>

                <Button text={'+/-'} onClickButton={handleClickSign}/>
            </div>
        </div>
    );
}

export default Calculator;
import Button from "./Button";
import Display from "./Display";
import { useState } from 'react';

function Calculator() {
    const [currentOperand, setcurrentOperand] = useState('0');

    // functions to alter current operand
    function appendDigit(clickedValue) {
        if(currentOperand === '0') {
            setcurrentOperand( clickedValue );
        } else {
            setcurrentOperand( currentOperand.concat(clickedValue) );
        }
    }

    function switchSign() {
        if( currentOperand !== '0') {
            if(currentOperand.charAt() === '-') {
                setcurrentOperand( currentOperand.slice(1) );
            } else {
                setcurrentOperand( currentOperand.padStart(currentOperand.length + 1, '-') );
            }
        }
    }

    function resetToZero() {
        setcurrentOperand('0');
    }

    function backspace() {
        if(currentOperand.length === 1 || (currentOperand.length === 2 && currentOperand.charAt() === '-') ) {
            resetToZero(0);
        } else {
            setcurrentOperand( currentOperand.slice(0, currentOperand.length-1) );
        }
    }

    function addDecimalPoint() {
        if( currentOperand.indexOf('.') === -1 ) {
            setcurrentOperand( currentOperand.concat('.') );
        }
    }

    // functions for operations

    return(
        <div>
            <Display currentText={currentOperand}/>

            <div>
                <Button text={'+'}/>
                <Button text={'-'}/>
                <Button text={'*'}/>
                <Button text={'/'}/>
                <Button text={'='}/>

                <Button text={'7'} onClickButton={() => appendDigit('7')}/>
                <Button text={'8'} onClickButton={() => appendDigit('8')}/>
                <Button text={'9'} onClickButton={() => appendDigit('9')}/>
                <Button text={'4'} onClickButton={() => appendDigit('4')}/>
                <Button text={'5'} onClickButton={() => appendDigit('5')}/>
                <Button text={'6'} onClickButton={() => appendDigit('6')}/>
                <Button text={'1'} onClickButton={() => appendDigit('1')}/>
                <Button text={'2'} onClickButton={() => appendDigit('2')}/>
                <Button text={'3'} onClickButton={() => appendDigit('3')}/>
                <Button text={'0'} onClickButton={() => appendDigit('0')}/>

                <Button text={'.'} onClickButton={addDecimalPoint}/>

                <Button text={'C'}/>
                <Button text={'CE'} onClickButton={resetToZero}/>
                <Button text={'<x'} onClickButton={backspace}/>

                <Button text={'+/-'} onClickButton={switchSign}/>
            </div>
        </div>
    );
}

export default Calculator;
import Button from "./Button";
import Display from "./Display";
import { useState } from 'react';

function Calculator() {
    const [firstOperand, setFirstOperand] = useState(0);

    // functions to alter operands
    function appendDigit(clickedValue) {
        const newOperand = firstOperand.toString().concat(clickedValue);
        setFirstOperand( Number(newOperand) );
    }

    function switchSign() {
        setFirstOperand( firstOperand * -1 );
    }

    function resetToZero() {
        setFirstOperand(0);
    }

    function backspace() {
        const newOperand = firstOperand.toString();
        
        if(newOperand.length === 1 || (newOperand.length === 2 && newOperand.charAt() === '-') ) {
            setFirstOperand(0);
        } else {
            setFirstOperand( Number(newOperand.slice(0, newOperand.length-1)) );
        }
    }

    function addDecimalPoint() {
        const newOperand = firstOperand.toString().concat('.');
        setFirstOperand( Number(newOperand) );
    }

    return(
        <div>
            <Display currentText={firstOperand}/>

            <div>
                <Button text={'+'}/>
                <Button text={'-'}/>
                <Button text={'*'}/>
                <Button text={'/'}/>
                <Button text={'='}/>

                <Button text={'7'} onClickButton={() => appendDigit(7)}/>
                <Button text={'8'} onClickButton={() => appendDigit(8)}/>
                <Button text={'9'} onClickButton={() => appendDigit(9)}/>
                <Button text={'4'} onClickButton={() => appendDigit(4)}/>
                <Button text={'5'} onClickButton={() => appendDigit(5)}/>
                <Button text={'6'} onClickButton={() => appendDigit(6)}/>
                <Button text={'1'} onClickButton={() => appendDigit(1)}/>
                <Button text={'2'} onClickButton={() => appendDigit(2)}/>
                <Button text={'3'} onClickButton={() => appendDigit(3)}/>
                <Button text={'0'} onClickButton={() => appendDigit(0)}/>

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
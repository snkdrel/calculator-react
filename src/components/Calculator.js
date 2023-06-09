import Button from "./Button";
import Display from "./Display";
import { useState } from 'react';

function Calculator() {
    const [firstOperand, setFirstOperand] = useState(0);

    function handleFirstOperand(clickedValue) {
        const newOperand = firstOperand.toString().concat(clickedValue);
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

                <Button text={'7'} onClickButton={handleFirstOperand}/>
                <Button text={'8'} onClickButton={handleFirstOperand}/>
                <Button text={'9'} onClickButton={handleFirstOperand}/>
                <Button text={'4'} onClickButton={handleFirstOperand}/>
                <Button text={'5'} onClickButton={handleFirstOperand}/>
                <Button text={'6'} onClickButton={handleFirstOperand}/>
                <Button text={'1'} onClickButton={handleFirstOperand}/>
                <Button text={'2'} onClickButton={handleFirstOperand}/>
                <Button text={'3'} onClickButton={handleFirstOperand}/>
                <Button text={'0'} onClickButton={handleFirstOperand}/>

                <Button text={'.'}/>

                <Button text={'C'}/>
                <Button text={'CE'}/>
                <Button text={'<x'}/>

                <Button text={'+/-'}/>
            </div>
        </div>
    );
}

export default Calculator;
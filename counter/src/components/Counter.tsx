import React, {useState} from 'react';
import Button from "./Button"
import Settings from './Settings';

// const MAX_COUNT = 5;

const Counter = () => {

    const [count, setCount] = useState<number>(0);
    const [maxNumber, setMaxNumber] = useState(0);

    const [isSettings, setIsSettings] = useState(false);

    const handleIncrement = () => {
        count < maxNumber && setCount(count + 1)
    };



    const handleReset = () => {
        setCount(0);
    };




    return (
        <div>
            {!isSettings &&
              <div className="frm">
                <div className={`display ${count === maxNumber ? "red" : ""}`}>
                    {count}
                </div>
                <div className="frm-buttons">
                  <Button title="Inc" onClick={handleIncrement} className="buttons" isDisabled={count === maxNumber}/>
                  <Button title="Reset" onClick={handleReset} className="buttons"/>
                  <Button title="Settings" onClick={() => setIsSettings(!isSettings)} className="buttons"/>
                </div>
              </div>
            }

            {isSettings &&
              <Settings
                count={count}
                setCount={setCount}
                setIsSettings={setIsSettings}
                setMaxNumber={setMaxNumber}
                maxNumber={maxNumber}
              />
            }
        </div>
    )
        ;
};

export default Counter;

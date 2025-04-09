import React, {useEffect, useState} from 'react';
import Button from './Button';

type SettingsPropsType = {
    count: number,
    setCount: (count: number) => void,
    setIsSettings: (isSettings: boolean) => void,
    setMaxNumber: (maxNumber: number) => void,
    maxNumber: number,
}

const Settings = (props:SettingsPropsType) => {
    const [maxCount, setMaxCount] = useState(0);

    useEffect(() => {
        setMaxCount(props.maxNumber);
    }, [props.maxNumber]);

    const handlePlus = () => {
        setMaxCount(maxCount + 1)
    }

    const handleMinus = () => {
        setMaxCount(maxCount - 1)
    }

    const handleSave = () => {
        props.setIsSettings(false)
        props.setMaxNumber(maxCount)
        if (props.count >= maxCount) {
            props.setCount(0)
        }
    };

    return (
        <div className="frm">

            <div className="frm-buttons">

                <Button title="- 1" onClick={handleMinus} className="buttons"/>
                <input
                    type="number"
                    value={maxCount}
                    onChange={(e) => {
                        setMaxCount(Number(e.currentTarget.value))
                    }}
                />
                <Button title="+ 1" onClick={handlePlus} className="buttons"/>
            </div>

            <div className="frm-buttons">

                <Button title="Cansel" onClick={() => {
                    props.setIsSettings(false)
                }} className="buttons"/>

                <Button title="Save" onClick={handleSave} className="buttons"/>
            </div>
        </div>
    );
};

export default Settings;
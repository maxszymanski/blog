import styles from './rangeInput.module.scss';
import { useState, useEffect } from "react";

export default function RangeInput(props) {
    const [value, setValue] = useState(props.value ? props.value : 0);

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    const handleChange = (e) => {
        setValue(e.target.value);
        if (props.onChange) {
            props.onChange(e.target.value);
        }
    };

    return (
        <div className={styles.rangeInputContainer}>
            <input
                min={props.min}
                max={props.max}
                step={props.step}
                onChange={handleChange}
                value={value}
                type="range"
                className={styles.rangeInput}
            />
            <div className={styles.rangeInputSlider}>
                <div className={styles.rangeInputShadow} style={{ left: ((value / props.max) * 100) + "%" }}></div>
            </div>
            <div className={styles.rangeInputBullet} style={{ left: ((value / props.max) * 100) + "%" }}></div>
        </div>
    );
}
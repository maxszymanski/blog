import React from 'react';
import styles from './customSelect.module.scss';

const CustomSelect = ({ options, value, onChange, id, isOpen }) => {
    const handleSelect = (option) => {
        onChange(option);
    };

    return (
        <div className={styles.customSelect}>
            <div className={styles.customSelect__selected}>
                {value}
                <div className={`${styles.customSelect__selected__arrow} ${isOpen ? styles.active : ''}`}></div>
            </div>
            {isOpen && (
                <div className={styles.customSelect__options}>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={styles.customSelect__option}
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
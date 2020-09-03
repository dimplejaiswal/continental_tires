import React from 'react';
import styles from './button.module.css';

const Button = (props) => (
    <div className={`${styles.button} ${props.modifier}`}>
        <button type='button' className={styles[props.btnCls]}>
            {props.img && (
                <span>
                    <img src={props.img}  alt='Icon'/>
                </span>
            )}
            {props.children}
        </button>
    </div>
);

export default Button;
import React from 'react';
import styles from './totalPrice.module.css';

const TotalPrice = (props) => (
    <div className={`${styles.totalPrice} ${props.modifier}`} >
        Total ₪{props.prodTotalPrice * 4}
    </div>
)

export default TotalPrice;
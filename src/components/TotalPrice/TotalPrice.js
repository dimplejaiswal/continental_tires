import React from 'react';
import styles from './totalPrice.module.css';
import common from '../../styles/common.module.css';

const TotalPrice = (props) => (
    <div className={`${styles.totalPrice} ${common[props.listItem]}`} >
        Total ₪{props.prodTotalPrice * 4}
    </div>
)

export default TotalPrice;
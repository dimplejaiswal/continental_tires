import React from 'react';
import Tick from '../../assets/images/tick.png';
import Warning from '../../assets/images/warning.png';
import Cross from '../../assets/images/criss-cross.png';
import styles from './stock.module.css';
import common from '../../styles/common.module.css';
import Price from '../Price/Price';

const getStockIcon = (stock) => {
    if (stock === 8) {
        return (
            <>
                <img src={Warning} className={styles.icon} alt='Icon'/>
                <p className={styles.warningTxt}>8 Tiers left!</p>
            </>
        );
    }
    if (stock > 8) {
        return (
            <img src={Tick} className={styles.icon} alt='Icon'/>
        );
    }
    if (stock === 0) {
        return (
            <>
                <img src={Cross} className={styles.icon} alt='Icon'/>
                <p className={styles.noStockTxt}>Back in 1 Week!</p>
            </>
        );
    }
}
const Stock = (props) => {
    return (
        <div className={`${styles.stock} ${common[props.listItem]}`}>
            Stock 
            {getStockIcon(props.prodStock)}
            {props.badge ? <Price prodPrice = {props.price} listItem='stockPrice'/> : ''}
        </div>
    )
};

export default Stock;

import React from 'react';
import styles from './filter.module.css';
import Close from '../../assets/images/close.png';
import DownArrow from '../../assets/images/down-arrow.png';

const Filter = () => (
    <div className={styles.filter}>
        <div className={styles.left}>
            Selected-Filter <span className={styles.selectedItem}>Continental <span><img src={Close} /></span></span>
        </div>
        <div className={styles.right}>
            Sort by: <span className={styles.selectedItem}>Popularity <span><img src={DownArrow} /></span></span>
        </div>
    </div>
)

export default Filter;
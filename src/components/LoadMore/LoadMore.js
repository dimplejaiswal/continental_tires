import React from 'react';
import styles from './loadMore.module.css';

const LoadMore = ({ text }) => {
    return <button className={styles.loadMore}>
        {text}
    </button>
};

export default LoadMore;

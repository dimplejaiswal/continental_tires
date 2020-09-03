import React from 'react';
import styles from './authBadge.module.css';

const AuthBadge = ( props ) => (
    <div className={`${styles.badge} ${props.modifier}`}>
        <img src={props.authBadge} className={styles.badgeImage} alt='Auth Badge' />
    </div>
);
   

export default AuthBadge;

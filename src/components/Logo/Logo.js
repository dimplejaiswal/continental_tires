import React from 'react';
import LogoImg from '../../assets/images/Rechteck_106@1X.png';
import styles from './logo.module.css';
const Logo = ( ) => (
    <div className={styles.logo}>
        <img src={LogoImg} alt='Logo' />
    </div>
)


export default Logo;
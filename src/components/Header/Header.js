import React from 'react';
import styles from '../../styles/header.module.css';
import RightHeader from '../RightHeader/RightHeader';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';

const Header = (props) => (
    <div className={styles.header}>
        <Logo />
        <Search />
        <RightHeader />
    </div>
)
    


export default Header;
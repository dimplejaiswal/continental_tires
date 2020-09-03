import React from 'react';
import styles from './header.module.css';
import RightHeader from '../RightHeader/RightHeader';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import {isMobile} from '../../utils/utils';

const Header = (props) => (
    <div className={styles.header}>
        <Logo />
        <Search placeHolderTxt= {!isMobile() && 'Search'}/>
        <RightHeader />
    </div>
)
    


export default Header;
import React from 'react';
import styles from './search.module.css';
import SearchIcon from '../../assets/images/icons8-search-24.png';
const Search = (props ) => (
        <div className={styles.search}>            
            <input className={styles.searchBox} type="text" placeholder={props.placeHolderTxt} ></input>
            <span className={styles.iconCover}>
                <img className={styles.icon} src={SearchIcon} alt='Search Icon' />
            </span>
        </div>
)



export default Search;
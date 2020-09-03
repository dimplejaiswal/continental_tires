import React from 'react';
import styles from '../../styles/search.module.css';
import SearchIcon from '../../assets/images/icons8-search-24.png';
const Search = ( ) => (
        <div className={styles.search}>            
            <input className={styles.searchBox} type="text" placeholder="Search" ></input>
            <span className={styles.iconCover}>
                <img className={styles.icon} src={SearchIcon} alt='Search Icon' />
            </span>
        </div>
)



export default Search;
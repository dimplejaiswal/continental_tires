import React from 'react';
import styles from './rightHeader.module.css';

import AccontImg from '../../assets/images/person-sharp@1X.png';
import OrderImg from '../../assets/images/Pfad_48@1X.png';
import CartImg from '../../assets/images/cart-sharp@1X.png';
import {isMobile} from '../../utils/utils';

const DATA = [
    {
        "img": AccontImg,
        "text": "Account",
        "action": ""
    },
    {
        "img": OrderImg,
        "text": "Orders",
        "action": ""
    },
    {
        "img": CartImg,
        "text": "Cart",
        "action": ""
    }
];
const RightHeader = ( props ) => (
    <ul className={styles.rightHeader}>
        {
            DATA.map((items, i )=> (
                 <li className={styles.icon} key={i}>
                     <img src={items.img}  className={styles.iconImg} alt={items.text}/>
                     {!isMobile() && <p className={styles.itemText}>{items.text}</p>}
                 </li>
             
            ))
        }
    </ul>
)

export default RightHeader;
import React from 'react';
import styles from '../../styles/rightHeader.module.css';

import AccontImg from '../../assets/images/person-sharp@1X.png';
import OrderImg from '../../assets/images/Pfad_48@1X.png';
import CartImg from '../../assets/images/cart-sharp@1X.png';

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
                     <img src={items.img}  alt={items.text}/>
                     <p className={styles.itemText}>{items.text}</p>
                 </li>
             
            ))
        }
    </ul>
)

export default RightHeader;
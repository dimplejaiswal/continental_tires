import React from 'react';
import styles from './button.module.css';
import common from '../../styles/common.module.css';
import BellIcon from '../../assets/images/notifications-sharp@1X.png';
import CartIcon  from '../../assets/images/cart-sharp-black@1X.png';
import {isTab} from '../../utils/utils';
const getButtonText = (stock) => {
    return stock === 0 ? styles.notifymeBtn : styles.addToCartBtn
}

const Button = ( props ) => (
    <div className={`${styles.button} ${common[props.listItem]}`}>
        <button type='button' className={getButtonText(props.btnCls)}>
            <spna>
                <img src={props.stockLast === 0 ? BellIcon : CartIcon}  alt='Icon'/>
            </spna>
            {!isTab() && props.badgeTxt ?  props.text : ''}
        </button>
    </div>
)



export default Button;
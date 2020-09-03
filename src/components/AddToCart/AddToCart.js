import React from 'react';
import Button from '../Button/Button';
import BellIcon from '../../assets/images/notifications-sharp@1X.png';
import CartIcon  from '../../assets/images/cart-sharp-black@1X.png';
import common from '../../styles/common.module.css';

const AddToCart = (props) => {
    const text = props.stock === 0 ? 'Notify Me!' : 'Add to Cart';
    return (
        <Button
            modifier={common.listItem}
            btnCls={props.stock === 0 ? 'notifymeBtn' : 'addToCartBtn' }
            img={props.stock === 0 ? BellIcon : CartIcon}
        >
            {!!props.showText && text}
        </Button>
    );
};

export default AddToCart;

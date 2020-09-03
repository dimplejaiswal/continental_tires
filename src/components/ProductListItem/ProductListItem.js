import React from 'react';
import Heading from '../Heading/Heading';
import AuthBadge from '../AuthBadge/AuthBadge';
import ProductModal from '../ProductModal/ProductModal';
import Stock from '../Stock/Stock';
import Price from '../Price/Price';
import ProductCount from '../ProductCount/ProductCount';
import TotalPrice from '../TotalPrice/TotalPrice';
import AddToCart from '../AddToCart/AddToCart';
import { isTabLandscape } from '../../utils/utils';
import styles from './productListItem.module.css';
import common from '../../styles/common.module.css';

const ProductListItem = (props) => {
    return  (
        <div className={styles.productListItem} >
            <Heading
                prodHeading='listHeading'
                productNameHeading={props.prodName}
            />
            <AuthBadge
                authBadge={props.authImg}
                modifier={common.listItem}
            />
            <ProductModal
                prodType={props.type}
                prodModal={props.modal}
                textAlg='textAlg'
                modifier={common.listItem}
            />
            <Stock
                prodStock={props.stock}
                modifier={common.listItem}
            />
            <Price
                prodPrice={props.price}
                modifier={common.listItem}
            />
            <ProductCount />
            <TotalPrice
                prodTotalPrice={props.totalPrice}
                modifier={common.listItem}
            />
            <AddToCart
                stock={props.stock}
                showText={!isTabLandscape()}
            />
        </div>
    )
};
    

export default ProductListItem;
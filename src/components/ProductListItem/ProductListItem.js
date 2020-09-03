import React from 'react';
import Heading from '../Heading/Heading';
import AuthBadge from '../AuthBadge/AuthBadge';
import ProductModal from '../ProductModal/ProductModal';
import Stock from '../Stock/Stock';
import Price from '../Price/Price';
import ProductCount from '../ProductCount/ProductCount';
import TotalPrice from '../TotalPrice/TotalPrice';
import Button from '../Button/Button';
import MobProductListItem from '../MobProductListItem/MobProductListItem';
import {isMobile} from '../../utils/utils';
import styles from './productListItem.module.css';


const ProductListItem = (props) => {
    return  (
        !isMobile()
        ?     
            <div className={styles.productListItem} >
                <Heading
                    prodHeading='listHeading'
                    productNameHeading={props.prodName}
                    listItem='listItem'
                />
                <AuthBadge
                    authBadge={props.authImg}
                    listItem='listItem'
                />
                <ProductModal
                    prodType={props.type}
                    prodModal={props.modal}
                    textAlg='textAlg'
                    listItem='listItem'
                />
                <Stock
                    prodStock={props.stock}
                    listItem='listItem'
                />
                <Price
                    prodPrice={props.price}
                    listItem='listItem'
                />
                <ProductCount
                    listItem='listItem'
                />
                <TotalPrice
                    prodTotalPrice={props.totalPrice}
                    listItem='listItem'
                />
                <Button
                    btnCls = {props.stockQty}
                    text={props.btnText === 0 ? 'Notify Me!' : 'Add to Cart'}
                    listItem='listItem'
                    badgeTxt ={props.badgeText}
                />
            </div>
        : 
        <MobProductListItem
            prodName={props.prodName}
            authImg={props.authImg}
            stock={props.stock}
            type={props.type}
            modal={props.modal}
            price={props.price}
            btnText={props.stock}
            badgeText={props.badgeTxt}
        />
    )
};
    

export default ProductListItem;
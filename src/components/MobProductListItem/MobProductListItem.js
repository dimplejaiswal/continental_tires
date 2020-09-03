import React from 'react';
import Heading from '../Heading/Heading';
import AuthBadge from '../AuthBadge/AuthBadge';
import ProductModal from '../ProductModal/ProductModal';
import Stock from '../Stock/Stock';
import Price from '../Price/Price';
import ProductCount from '../ProductCount/ProductCount';
import TotalPrice from '../TotalPrice/TotalPrice';
import AddToCart from '../AddToCart/AddToCart';
import styles from './mobProductListItem.module.css';
import common from '../../styles/common.module.css';

const MobProductListItem = (props) => {
    return  (
        <div className={styles.mobProductListItem}>
            <div className={styles.lhsProdList} >
                <Heading
                    prodHeading='listHeading'
                    productNameHeading={props.prodName}
                    modifier={common[props.listItem]}
                />
                <AuthBadge
                    authBadge={props.authImg}
                    modifier={common[props.listItem]}
                />
                <Stock
                    prodStock={props.stock}
                    modifier={common[props.listItem]}
                />
                <ProductCount
                    modifier={common[props.listItem]}
                />
            </div>
            <div className={styles.rhsProdList}>
                <ProductModal
                    prodType={props.type}
                    prodModal={props.modal}
                    textAlg='textAlg'
                    modifier={common[props.listItem]}
                />
                <Price
                    prodPrice = {props.price}
                />
                <TotalPrice

                />
                <AddToCart
                    stock={props.stock}
                    showText={true}
                />
            </div>
        </div>
    )
};
    

export default MobProductListItem;
import React from 'react';
import Heading from '../Heading/Heading';
import AuthBadge from '../AuthBadge/AuthBadge';
import ProductModal from '../ProductModal/ProductModal';
import Stock from '../Stock/Stock';
import Price from '../Price/Price';
import ProductCount from '../ProductCount/ProductCount';
import TotalPrice from '../TotalPrice/TotalPrice';
import Button from '../Button/Button';
import styles from './mobProductListItem.module.css';


const MobProductListItem = (props) => {
    return  (
        <div className={styles.mobProductListItem}>
            <div className={styles.lhsProdList} >
                <Heading
                    prodHeading='listHeading'
                    productNameHeading={props.prodName}
                    listItem='listItem'
                />
                <AuthBadge
                    authBadge={props.authImg}
                    listItem='listItem'
                />
                <Stock
                    prodStock={props.stock}
                    listItem='listItem'
                />
                <ProductCount
                    listItem='listItem'
                />
            </div>
            <div className={styles.rhsProdList}>
                <ProductModal
                    prodType={props.type}
                    prodModal={props.modal}
                    textAlg='textAlg'
                    listItem='listItem'
                />
                <Price
                    prodPrice = {props.price}
                    listItem='stockPrice'
                />
                <TotalPrice

                />
                <Button
                    btnCls = {props.stock}
                    text={props.btnText === 0 ? 'Notify Me!' : 'Add to Cart'}
                    listItem='listItem'
                    badgeTxt ={props.badgeText}
                />
            </div>
        </div>
    )
};
    

export default MobProductListItem;
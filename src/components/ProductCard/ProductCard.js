import React from 'react';
import ProductImage from '../ProductImage/ProductImage';
import styles from './productCardStacked.module.css';
import Button from '../Button/Button';
import ProductCount from '../ProductCount/ProductCount';
import Heading from '../Heading/Heading';
import ProductModal from '../ProductModal/ProductModal';
import AuthBadge from '../AuthBadge/AuthBadge';
import Stock from '../Stock/Stock';
import TotalPrice from '../TotalPrice/TotalPrice';

const ProductCard = ( props ) => {
    return (
        <div className={styles.productCard} >
                <ProductImage image={props.prodImage} badgeText={props.badgeText} />
                <div className={styles.rhs}>
                    <Heading
                        productNameHeading={props.prodName}
                        prodHeading='cardHeading'
                    />
                    <div className={styles.subDetails}>
                        <AuthBadge
                            listItem= 'cardItems'
                            authBadge={props.authImg}
                        />
                        <ProductModal
                            prodType={props.type}
                            prodModal={props.modal}
                            textAlg='textAlg'
                            listItem='cardItems'
                        />
                        <Stock
                            prodStock={props.stock}
                            price={props.price}
                            listItem='cardItems'
                            badge ={props.badgeText}
                        />
                        <TotalPrice
                            prodTotalPrice={props.totalPrice}
                            listItem='cardItems'
                        />
                    </div>
                    <div className={styles.bottom}>
                        <ProductCount />
                        <Button
                            btnCls = {props.stockQty}
                            badgeTxt = {props.badgeText}
                            text={props.btnText === 0 ? 'Notify Me!' : 'Add to Cart'}
                        />
                    </div>
                </div>
        </div>
    )
}

export default ProductCard;
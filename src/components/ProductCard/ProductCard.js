import React from 'react';
import ProductImage from '../ProductImage/ProductImage';
import styles from './productCard.module.css';
import ProductCount from '../ProductCount/ProductCount';
import Heading from '../Heading/Heading';
import ProductModal from '../ProductModal/ProductModal';
import AuthBadge from '../AuthBadge/AuthBadge';
import Stock from '../Stock/Stock';
import TotalPrice from '../TotalPrice/TotalPrice';
import common from '../../styles/common.module.css';
import AddToCart from '../AddToCart/AddToCart';

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
                            modifier={common.cardItems}
                            authBadge={props.authImg}
                        />
                        <ProductModal
                            prodType={props.type}
                            prodModal={props.modal}
                            textAlg='textAlg'
                            modifier={common.cardItems}
                        />
                        <Stock
                            prodStock={props.stock}
                            price={props.price}
                            modifier={common.cardItems}
                            badge ={props.badgeText}
                        />
                        <TotalPrice
                            prodTotalPrice={props.totalPrice}
                            modifier={common.cardItems}
                        />
                    </div>
                    <div className={styles.bottom}>
                        <ProductCount />
                        <AddToCart
                            stock={props.stock}
                            showText={true}
                        />
                    </div>
                </div>
        </div>
    )
}

export default ProductCard;
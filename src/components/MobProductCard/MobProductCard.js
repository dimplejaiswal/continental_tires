import React from 'react';
import ProductImage from '../ProductImage/ProductImage';
import styles from './mobProductCard.module.css';
import ProductCount from '../ProductCount/ProductCount';
import Heading from '../Heading/Heading';
import ProductModal from '../ProductModal/ProductModal';
import AuthBadge from '../AuthBadge/AuthBadge';
import Stock from '../Stock/Stock';
import TotalPrice from '../TotalPrice/TotalPrice';
import common from '../../styles/common.module.css';
import AddToCart from '../AddToCart/AddToCart';
import Price from '../Price/Price';

const MobProductCard = ( props ) => {
    return (
        <div className={styles.productCard} >
                <ProductImage image={props.prodImage} badgeText={props.badgeText} />
                <div className={styles.rhs}>
                    <Heading
                        productNameHeading={props.prodName}
                        prodHeading='cardHeading'
                    />
                    <div className={styles.firstRow}>
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
                    </div>
                    <div className={styles.middle}>
                        <Stock
                            prodStock={props.stock}
                            price={props.price}
                            modifier={common.cardItems}
                            badge ={props.badgeText}
                        />
                        <Price prodPrice={props.price}/>
                        <TotalPrice
                            prodTotalPrice={props.totalPrice}
                            modifier={common.cardItems}
                        />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <ProductCount />
                    <AddToCart
                        stock={props.stock}
                        showText={true}
                    />
                </div>
        </div>
    )
}

export default MobProductCard;
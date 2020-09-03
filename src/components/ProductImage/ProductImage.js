import React from 'react';
import styles from './productImage.module.css';
import badgeLogo from '../../assets/images/Gruppe_maskieren_14@1X.png';


const ProductImage = ({ image, badgeText }) => (
    <>
        <span className={styles.badge}>
            {badgeText}
        </span>
        <div className={styles.imgBox}>
            <img className={styles.img} src={image} alt='Img'/>
            <span className={styles.aeIcon}><img src={badgeLogo} alt='Txt'/></span>
        </div>
    </>
);

export default ProductImage;

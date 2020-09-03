import React from 'react';
import styles from './productModal.module.css';

const ProductModal = (props) => (
    <div className={`${styles[props.textAlg]} ${props.modifier}`}>
        <div>
            {props.prodType}
        </div>
        <div>
            {props.prodModal}
        </div>
    </div>
)

export default ProductModal;
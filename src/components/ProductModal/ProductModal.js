import React from 'react';
import common from '../../styles/common.module.css';
import styles from './productModal.module.css';

const ProductModal = (props) => (
    <div className={`${common[props.listItem]} ${styles[props.textAlg]}`}>
        <div>
            {props.prodType}
        </div>
        <div>
            {props.prodModal}
        </div>
    </div>
)

export default ProductModal;
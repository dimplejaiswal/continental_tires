import React from 'react';
import common from '../../styles/common.module.css';

const Price = (props) => (
    <div className={common[props.listItem]}>
        Price ₪{props.prodPrice}
    </div>
);

export default Price;
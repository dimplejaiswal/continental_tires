import React from 'react';

const Price = (props) => (
    <div className={props.modifier}>
        Price ₪{props.prodPrice}
    </div>
);

export default Price;
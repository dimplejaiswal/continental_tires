import React from 'react';
import styles from './heading.module.css';

const Heading = ( props ) => (
    <h2 className={`${styles.heading} ${props.modifier || ''} ${styles[props.prodHeading]}`}>
        {props.productNameHeading}
    </h2>
);
   

export default Heading;

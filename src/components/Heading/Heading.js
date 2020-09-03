import React from 'react';
import styles from './heading.module.css';
import common from '../../styles/common.module.css';


const Heading = ( props ) => (
    <h2 className={`${styles.heading} ${styles[props.prodHeading]} ${common[props.listItem]} `}>
        {props.productNameHeading}
    </h2>
);
   

export default Heading;

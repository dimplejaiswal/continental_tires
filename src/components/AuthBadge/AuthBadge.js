import React from 'react';
import common from '../../styles/common.module.css';

const AuthBadge = ( props ) => (
    <div className={common[props.listItem]}>
        <img src={props.authBadge} alt='Auth Badge' />
    </div>
);
   

export default AuthBadge;

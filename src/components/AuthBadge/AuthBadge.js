import React from 'react';

const AuthBadge = ( props ) => (
    <div className={`${props.modifier}`}>
        <img src={props.authBadge} alt='Auth Badge' />
    </div>
);
   

export default AuthBadge;

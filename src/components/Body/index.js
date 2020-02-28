import React from 'react';
import FloatButton from './FloatButton';

export default props => {
    return(
        <main className="transition-05">
            { props.children }
            <FloatButton bg="bgprimary" icon="phone"/>
        </main>
    );
}
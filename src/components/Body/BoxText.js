import React from 'react';

export default ({ children, title, classes, titleClass }) => {
    return(
        <section className={`${classes} pad-30 box`}>
            <h3 className={`font-lg ${titleClass}`}>{ title }</h3>
            { children }
        </section>
    );
}
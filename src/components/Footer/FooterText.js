import React from 'react';

export default ({ children, title }) => {
    return(
        <section className="margin-20 flex-lg-5">
            <h5 className="white font-md light-weight">{ title }</h5>
            <p className="justify grey-bbb pad-top-10">
                { children }
            </p>
        </section>
    );
}
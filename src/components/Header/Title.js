import React from 'react';

export default ({ title, color }) => {
    return(
        <section className="pad-top-20 pad-bottom-20">
            <h2 className={`font-xlg ${color} margin-bottom-10`}>
                { title }
            </h2> 
        </section>
    );
}
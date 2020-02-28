import React from 'react';

export default ({ content }) => {
    return(
        <div className="container _center-flex flex-lg-16 margin-top-20">
            { content.map( ({name, image}) => 
                <div className="flex-md-4 flex-16 flex-sm-7 margin-10 treasure-box" >
                
                    <img src={image} alt={name} />

                    <div>
                        { name }
                    </div>
                </div>    
            )}
        </div>
    );
}
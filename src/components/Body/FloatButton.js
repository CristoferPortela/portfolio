import React from 'react';

export default ({ bg, icon }) => {
    return(
        <button className={`float-button ${bg}`} type="button">
            <i className="material-icons white">
                { icon }
            </i>
        </button>
    );
}
import React, {useState} from 'react';

export default ({ bg, icon }) => {

    const [showContent, setShowContent] = useState(false);

    return(
        <>
        <button className={`float-button ${bg}`} type="button" onClick={() => setShowContent(!showContent)}>
            <i className="material-icons white">
                { icon }
            </i>
        </button>
        <div className={`float-content ${showContent ? 'show' : 'hide'}`}>
            
        </div>
        </>
    );
}
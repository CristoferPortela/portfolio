import React, { useState } from 'react';
import './style.sass';
import { Drawer, DrawerHeader, DrawerBody } from '../Drawer';
import Links from './Links';

export default props => {
    const lang = "pt";

    const [color, setColor] = useState(window.scrollY > 0);

    document.addEventListener('scroll', () => setColor(window.scrollY > 0))

    const shadow = {
        boxShadow: color ? "3px 3px 5px rgba(0,0,0,.4)" : "none"
    }

    let bg = color ? 'bgprimary': 'transparent';

    return(
        <nav style={shadow} className={`navbar pad-top-20 pad-bottom-20 ${bg}`}>
            <div className="container row-flex stretch-sm justify-between items-center">
                <Drawer>
                    <DrawerHeader>
                        Palavras aqui
                    </DrawerHeader>
                    <DrawerBody>
                        <Links/>
                    </DrawerBody>
                </Drawer>
                <div className="row-flex items-center">
                    <h1 className="font-lg white">
                        Portfólio
                    </h1>
                    <span className="pad-left-30 white">
                        {lang}
                    </span>
                </div>
                
                <Links className="flex-lg-5 hide-sm" listClass="row-flex justify-between" color="white"/>
            </div>
        </nav>
    );
}
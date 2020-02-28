import React, { useState } from 'react';
import menu from './menu-24px.svg';
import './style.sass';

import { Swipeable, defineSwipe } from 'react-touch';
import DrawerMenu from './DrawerMenu';

const Drawer = ({ children, onDesktop }) => {
    const [showMenu, setShowMenu] = useState(false);

    const hideShowMenu = () => setShowMenu(!showMenu);

    const swipe = defineSwipe({ swipeDistance: 40 });

    return(
        <section className="drawer">
            <button onClick={ hideShowMenu } className={`drawer-button pad-left-20 pad-right-20 ${!onDesktop ? 'none' : ''}`}>
                <img src={menu} alt="menu icon from material-icons"/>
            </button>

            <Swipeable config={swipe} onSwipeRight={hideShowMenu}>
              <div className="swipeable-drawer"></div>
            </Swipeable>

            <DrawerMenu show={showMenu} action={e => setShowMenu(e)}>
               { children }
            </DrawerMenu>
        </section>
    );
}

const DrawerHeader = ({ bg, children, style = {}}) => {
    const drawerHeader = {
        ...style,
        backgroundColor: bg ? bg : '#6a1b9a',
    }
    
    return(
        <section className="drawer-header" style={drawerHeader}>
            { children }
        </section>
    );
}

const DrawerBody = ({ children, style }) => {
    return(
        <section className="drawer-body" style={style}>
            { children }
        </section>
    );
}

export default Drawer;
export { Drawer, DrawerHeader, DrawerBody }
import React from 'react';
import { Swipeable, defineSwipe } from 'react-touch';
import './style.sass';

export default ({ children, show, action }) => {
    const swipe = defineSwipe({ swipeDistance: 75 });

    return(
        <Swipeable config={swipe} onSwipeLeft={() => action(!show)}>
            <div className="drawer-menu">
                <div className={show ? 'drawer-show' : 'drawer-hide'}>
                    { children }
                </div>
                <div className={show ? 'drawer-bg' : 'drawer-hide'} onClick={() => action(!show)}></div>
            </div>
        </Swipeable>
    );
}
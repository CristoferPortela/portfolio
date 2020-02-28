import React from 'react';
import { useLocation } from 'react-router-dom';
import computer from '../../assets/gray-laptop-computer-showing-html-codes-in-shallow-focus-160107.jpg';
import phone from '../../assets/selective-focus-photography-of-black-rotary-phone-163007.jpg';
import building from '../../assets/low-angle-photo-of-four-high-rise-curtain-wall-buildings-830891.jpg';
import store from '../../assets/grocery-cart-with-item-1005638.jpg';
import './style.sass';
import Title from './Title';

export default () => {

    let location = useLocation();
    let page = {};

    if (location.pathname === "/") page = { title: "Vamos trabalhar... Juntos!?", image: computer } 
    else if (location.pathname === "/contato") page = { title:"O que acha de conversarmos?", image: phone}
    else if (location.pathname === "/plus/intitucionais-blogs") page = { title: "Blogs e sites institucionais", image: building}
    else if (location.pathname === "/plus/ecommerce") page = { title: "Vendas online", image: store } 

    return(
        <header style={{backgroundImage: `url(${page.image})`}} className="transition-05 image _center-flex">
                <Title 
                title={page.title}
                color="titleC"
            />
        </header>
    );
}
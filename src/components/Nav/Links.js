import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ className, listClass, color }) => {
    return(
        <section className={className}>
            <ul className={listClass}>
                <li>
                    <NavLink to="/" className={color}>              
                        Home
                    </NavLink>                  
                </li>
                <li>
                    <NavLink to="/" className={color}>
                        Serviços
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={color}>             
                        Preços
                    </NavLink>                 
                </li>
                <li>
                    <NavLink to="/contato" className={color}>
                        Contato
                    </NavLink>
                </li>
            </ul>
        </section>
    );
}
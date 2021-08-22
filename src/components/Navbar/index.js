import React from "react";
import logo from '../../assets/Yummy-Logo.png';

import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <img src={logo} alt="Logo"/>
            </NavLogo>
            <Bars />

            <NavMenu>

                <NavBtn>
                    <NavBtnLink to="/sign-up">Connect</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;
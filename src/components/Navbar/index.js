import React, {useState, useEffect} from 'react';
import { FaBars } from "react-icons/fa";
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavLink, NavItem, NavBtn, NavBtnLink } from './NavbarStyles';
import {animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const handleScroll = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect( () => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    const getHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavbarLogo to="/" onClick={getHome}>JOUDA</NavbarLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="about" activeClass="active" smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="discover" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="services" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="signup" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Sign Up</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;

import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    margin-top: -80px;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: .8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1100px;
    z-index: 1;
    height: 80px;
    padding: 0 24px;
`

export const NavbarLogo = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-self: flex-start;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    margin-left: 24px;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`
export const NavLink = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    text-decoration: none;
    cursor: pointer;
    height: 100%;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`

export const NavBtn = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf72;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all .2s ease-in-out;
        background: #fff;
    }
`

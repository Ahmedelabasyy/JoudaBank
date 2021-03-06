import styled from "styled-components";
import {FaTimes} from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR} from "react-router-dom";

export const SideBarContainer = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    z-index: 999;
    transition: .3s all ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? "100%" : "0")};
    top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SideBarWrapper = styled.div`
    color: #fff;
`

export const SideBarMenu = styled.ul`
    list-style: none;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-size: 1.5rem;
    transition: .2s ease-in-out;

    &:hover {
        color: #01bf71;
        transition: .2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SideBarRoute = styled(LinkR)`
    background: #01bf71;
    border-radius: 50px;
    padding: 16px 56px;
    white-space: nowrap;
    color: #010600;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
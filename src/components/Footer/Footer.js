import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color: #101522;
`

export const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

    @media screen and (max-width: 820px) {
        padding-top: 30px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const LinksConatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 160px;
    margin: 16px;
    color: #fff;
    box-sizing: border-box;

    @media screen and (max-width: 420px) {
        margin: 10px;
        padding: 10px;
        width: 100%;
    }
`

export const LinksHeading = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`

export const LinkItem = styled(Link)`
    font-size: 14px;
    margin-bottom: .5rem;
    text-decoration: none;
    color: #fff;

    &:hover {
        color: #01bf71;
        transition: .3s all ease-in-out;
    }
` 

export const SocialMedia = styled.div`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
`

export const WebsiteRights = styled.small`
    color: #fff;
    line-height: 1.6;
    font-size: 10px;
    margin-bottom: 16px;

    @media screen and (max-width: 480px) {
        margin-bottom: 22px;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`
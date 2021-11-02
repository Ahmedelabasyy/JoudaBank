import React from 'react'
import { FooterContainer, FooterWrapper , FooterLinksContainer, FooterLinksWrapper , LinksConatiner , LinksHeading , LinkItem, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights } from './Footer'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import {animateScroll as scroll} from 'react-scroll';
const Footer = () => {

    const getHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <LinksConatiner>
                            <LinksHeading>About Us</LinksHeading>
                            <LinkItem to='/signin'>How it works</LinkItem>
                            <LinkItem to='/signin'>Testimonials</LinkItem>
                            <LinkItem to='/signin'>Careers</LinkItem>
                            <LinkItem to='/signin'>Investors</LinkItem>
                            <LinkItem to='/signin'>Terms of services</LinkItem>
                        </LinksConatiner>
                        <LinksConatiner>
                            <LinksHeading>Contact Us</LinksHeading>
                            <LinkItem to='/'>Contact</LinkItem>
                            <LinkItem to='/'>Support</LinkItem>
                            <LinkItem to='/'>Destinations</LinkItem>
                            <LinkItem to='/'>Sponsorships</LinkItem>
                        </LinksConatiner>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <LinksConatiner>
                            <LinksHeading>Videos</LinksHeading>
                            <LinkItem to='/'>Submit Video</LinkItem>
                            <LinkItem to='/'>Testimonials</LinkItem>
                            <LinkItem to='/'>Careers</LinkItem>
                            <LinkItem to='/'>Influncer</LinkItem>
                        </LinksConatiner>
                        <LinksConatiner>
                            <LinksHeading>Social Media</LinksHeading>
                            <LinkItem to='/'>Instagram</LinkItem>
                            <LinkItem to='/'>Facebook</LinkItem>
                            <LinkItem to='/'>Twitter</LinkItem>
                            <LinkItem to='/'>LinkedIn</LinkItem>
                        </LinksConatiner>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={getHome}>JOUDA</SocialLogo>
                        <WebsiteRights>Jouda Ⓒ {new Date().getFullYear()} All Rights Reserved.<br/>Redesigned By Ahmed Elabasy</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" area-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" area-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" area-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" area-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer

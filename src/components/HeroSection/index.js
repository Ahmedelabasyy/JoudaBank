import React, {useState} from 'react'
import Video from "../../videos/video.mp4";
import { HeroContainer, HeroBg, VideoBg } from './Hero';
import {HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowRight, ArrowForward} from "./Hero";
import {Button} from "../ButtonsElements";
const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted type="video/mp4" src={Video} />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign Up for a new account today and receive $250 in credit towards your new payment.</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHover}
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        exact="true"
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;

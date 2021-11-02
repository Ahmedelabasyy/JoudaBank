import React from 'react'
import { Button } from '../ButtonsElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2,TextWrapper, TopLine, Heading,Subtitle, BtnWrap ,ImgWrap, Img } from './info'

const InfoSection = ({id, desc, img, alt, lightBg, lightText, darkText,dark, primary, topline, headline, buttonLabel, imgStart}) => {
    return (
        <>
            <InfoContainer id={id} lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topline}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{desc}</Subtitle>
                                <BtnWrap>
                                    <Button to="home"
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        exact={true}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}                                    
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection

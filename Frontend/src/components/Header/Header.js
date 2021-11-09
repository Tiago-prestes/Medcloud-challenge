import React from 'react'
import { ImageLogo, LogoContainer, MainHeader, TextLogo } from './styled'

export const Header = () => {
    return (
        <MainHeader>
            <LogoContainer>
                <ImageLogo>
                    <img src="https://avatars.githubusercontent.com/u/46346268?s=200&v=4"></img>
                </ImageLogo>
                <TextLogo>
                    <p>medcloud</p>
                </TextLogo>
            </LogoContainer>
        </MainHeader>
    )
}

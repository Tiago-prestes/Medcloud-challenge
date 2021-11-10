import { Button } from '@material-ui/core'
import React from 'react'
import { ImageLogo, LogoContainer, MainHeader, TextLogo, ButtonsContainer } from './styled'

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
            <ButtonsContainer>
            <Button
            color='primary'
            variant='outlined'
            size='small'
            >Análises</Button>
            <Button
            color='primary'
            variant='outlined'
            size='small'
            >Usuários</Button>
            </ButtonsContainer>
        </MainHeader>
    )
}

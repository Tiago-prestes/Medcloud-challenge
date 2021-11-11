import React from 'react'
import { useHistory } from "react-router-dom"
import { ImageLogo, LogoContainer, MainHeader, TextLogo, ButtonsContainer } from './styled'
import { Button } from '@material-ui/core'
import { goToAnalises, goToUserPage } from '../../routes/coordinator'

export const Header = () => {
    const history = useHistory()

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
            onClick={() => goToAnalises(history)}
            >Análises</Button>
            <Button
            color='primary'
            variant='outlined'
            size='small'
            onClick={() => goToUserPage(history)}
            >Usuários</Button>
            </ButtonsContainer>
        </MainHeader>
    )
}

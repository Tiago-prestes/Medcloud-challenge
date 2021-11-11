import React, { useContext } from 'react'
import { UserCard } from '../../components/UserCard/UserCard'
import { MainContainer } from './styled'

export const UsersPage = () => {
    
    return (
        <MainContainer>
            <UserCard/>
        </MainContainer>
    )
}

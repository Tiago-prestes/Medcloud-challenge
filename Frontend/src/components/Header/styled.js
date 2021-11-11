import styled from "styled-components";

export const MainHeader = styled.div`
    display: flex;
    background-color: white;
    border-bottom: 1px solid #D6D6D6;
    
`

export const LogoContainer = styled.div`
    display: flex;
    padding-left: 1rem;
`

export const TextLogo = styled.div`
    display: flex;
    align-items: flex-end;
    padding-bottom: 0.6rem;
            p { 
            font-size: 2vw;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            align-items: baseline;
        }
`

export const ImageLogo = styled.div`
    display: flex;
    align-items: center;
    img {
            width: 4vw;
        }
`

export const ButtonsContainer = styled.div`
    display: flex;
    margin: 0 auto;
    width: 14vw;
    justify-content: space-evenly;
`
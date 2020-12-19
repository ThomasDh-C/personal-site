import React from 'react'
import styled from 'styled-components'
import HighlightLabel from './highlightLabel'
import Rocket from '../../public/rocketbright.svg'
import Chip from '../../public/chip.svg'
import Surelight from '../../public/surelighticon.svg'

const BackgroundText = styled.h1`
  font-size: 15vw;
  position: absolute;
  left:28vw;
  top:0;
  z-index: -99;
  opacity: 0.5;
`

const RocketStyled = styled(Rocket)`
    position: absolute;
    height: 70vh;
    left: 28vw;
    top: 30vh;

    opacity: 70%;
    
    &:hover {
        transition: 300ms;
        opacity: 100%;
      }
`
const ChipStyled = styled(Chip)`
    position: absolute;
    height: 25vh;
    left: 40vw;
    top: 33vh;

    opacity: 70%;
    
    &:hover {
        transition: 300ms;
        opacity: 100%;
    }
`


const SurelightStyled = styled(Surelight)`
    position: absolute;
    height: 40vh;
    left: 45vw;
    top: 60vh;

    opacity: 70%;

    &:hover {
        transition: 300ms;
        opacity: 100%;
    }
`



const Engineer = () => {
    return (
        <>
            <BackgroundText>Engineer</BackgroundText>
            <HighlightLabel label="Gimbal Motor Design"/>
            <RocketStyled />
            <ChipStyled />
            <SurelightStyled />
        </>
    )
}

export default Engineer
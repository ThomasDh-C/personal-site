import React from 'react'
import styled from 'styled-components'
import BasicThing from '../public/climbing/bouldering.svg'
import BackgroundText from './backgroundtext'

const CustomBasic = styled(BasicThing)`
  margin-top: 10vw;
  width: 100%;
  z-index:-99;
`

const FrostedDiv = styled.div`
  background-color: rgba(255, 255, 255, .15);
  backdrop-filter: blur(5px);
  position: absolute;
  border-radius: 1em;
  box-shadow: 2px 2px 5px gold;
  padding: 32px;
`

const TennisContainer = styled(FrostedDiv)`
  top: 23vw;
  left: 20%;
  
`
const ClimberContainer = styled(FrostedDiv)`
  top: 35vw;
  left: 40%;
`

const BackpackerContainer = styled(FrostedDiv)`
  top: 54vw;
  right: 10%;
`

const ChefContainer = styled(FrostedDiv)`
  top: 60vw;
  left: 10%;
`

const Labels = styled.h2`
  margin-bottom:0;
`


const Adventurer = () => {
  return (
    <>
      <BackgroundText text="Adventurer" />
      <CustomBasic />
      <TennisContainer>
        <Labels>Tennis</Labels>
      </TennisContainer>
      <ClimberContainer>
        <Labels>Climber</Labels>
      </ClimberContainer>
      <BackpackerContainer>
        <Labels>Backpacker</Labels>
      </BackpackerContainer>
      <ChefContainer>
        <Labels>Chef</Labels>
      </ChefContainer>
    </>

  )
}

export default Adventurer;
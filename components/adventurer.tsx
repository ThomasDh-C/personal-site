import React from 'react'
import styled from 'styled-components'
import BasicThing from '../public/climbing/bouldering.svg'

const BackgroundText = styled.h1`
  font-size: 15vw;
  position: absolute;
  left:28vw;
  top:0;
  z-index: -99;
  opacity: 0.5;
`

const CustomBasic = styled(BasicThing)`
  width: 100vw;
  z-index:-100;
`
const Adventurer = () => {
  return (
    <div style={{ position: 'relative' }}>
      <BackgroundText>Adventurer</BackgroundText>
      <CustomBasic />
    </div>

  )
}

export default Adventurer;
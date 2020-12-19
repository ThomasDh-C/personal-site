import React from 'react'
import styled from 'styled-components'


const BackgroundText = styled.h1`
  font-size: 15vw;
  position: absolute;
  left:28vw;
  top:0;
  z-index: -99;
  opacity: 0.5;
`

const Adventurer = () => {
  return (
    <div style={{ position: 'relative' }}>
      <BackgroundText>Adventurer</BackgroundText>
    </div>

  )
}

export default Adventurer;
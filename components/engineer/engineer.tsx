import React from 'react'
import styled from 'styled-components'
// import Princeton from '../../public/PU.svg'

const BackgroundText = styled.h1`
  font-size: 15vw;
  position: absolute;
  left:28vw;
  top:0;
  z-index: -99;
  opacity: 0.5;
`

const Logo = styled.img`
    fill: white;
`
const Engineer = () => {
    return (
        <>
            <BackgroundText>Engineer</BackgroundText>
            {/* <Princeton fill='white' /> */}
        </>
    )
}

export default Engineer
import React from 'react'
import styled from 'styled-components'

const Text = styled.h1`
  font-size: 14.5vw;
  position: absolute;
  left: 28vw;
  top: 0;
  z-index: -1;
  opacity: 0.5;
`

const BackgroundText = (props) => {
  return (
    <Text>{props.text}</Text>
  )
}

export default BackgroundText
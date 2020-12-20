import React from 'react'
import styled from 'styled-components'


const ThinH1 = styled.h2`
    margin-bottom: 0px;
    line-height: 1em;
`

const RisingYellowBackground = styled.span`
    text-decoration: none;
    padding: 5px 5px 1px 0px;

    background-position-y: -0%;
    background-image: linear-gradient( transparent 50%, gold 50%);
    transition: background 500ms ease;
    background-size: auto 175%;

    &:hover {
        background-position-y: 100%;
    }
`

const HighlightLabel = (props) => {



    return (
        <ThinH1 >
            <RisingYellowBackground>{props.label}</RisingYellowBackground>
        </ThinH1>
    )
}

export default HighlightLabel

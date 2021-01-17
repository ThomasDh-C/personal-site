import React from "react";
import styled from 'styled-components'
import { GoRuby, GoMarkGithub, GoDeviceDesktop } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'
import Princeton from '../../public/PUwhite.svg'
import HighlightLabel from '../engineer/highlightLabel'

const SidebarWrapper = styled.div`
    position: absolute;
    height: 100%;
    
    flex-direction: column;
    border-left: 1px solid;
    border-radius: 15px;
    transition: 0.8s ease;
`

const ToggleMenuButton = styled.button`
    height: 50px;
    border-top-left-radius: 10rem;
    border-bottom-left-radius: 10rem;
    width: 10px;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -14px;

    z-index: 10;
    border-color: #17141d;
    outline: none;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding-left: 16px;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
`

const LinkBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
`

const SmallPrinceton = styled(Princeton)`
    height: 2em;
    padding-bottom: 4px;
`

export const Sidebar = () => {
    const [xPosition, setX] = React.useState('-50%')
    const [visible, setVisible] = React.useState(false)


    const toggleMenu = () => {
        if (xPosition == "-150%") {
            setX('-50%')
            setVisible(false)
        } else {
            setX('-150%')
            setVisible(true)
        }

    };

    // expansion animation on reload
    React.useEffect(() => {
        setX('-150%')
        setVisible(true)
    }, []);

    return (


        <SidebarWrapper
            style={{
                transform: `translateX(${xPosition})`,
            }}
        >
            <ToggleMenuButton
                onClick={() => toggleMenu()}
            ></ToggleMenuButton>
            <Content visible={visible}>
                <LinkBox>
                    <GoMarkGithub color="white" size="2em" style={{ paddingBottom: "4px" }} />
                    <a href='https://github.com/ThomasDh-C?tab=repositories'>
                        <HighlightLabel label="GitHub" />
                    </a>
                </LinkBox>
                <LinkBox>
                    <FaLinkedin color="white" size="2em" style={{ paddingBottom: "4px" }} />

                    <a href='https://www.linkedin.com/in/thomas-dhome-casanova/'>
                        <HighlightLabel label="LinkedIn" />
                    </a>
                </LinkBox>


                <LinkBox>
                    <SmallPrinceton />
                    <a href='mailto:tmd4@princeton.edu'>
                        <HighlightLabel label="Princeton '23" /></a>
                </LinkBox>
            </Content>
        </SidebarWrapper >


    )
}


export default Sidebar
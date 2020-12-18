import React from 'react'
import styled from 'styled-components'
import styles from './firstpage.module.css'
import Typical from 'react-typical'
import headshot from '../../public/face.png'
import { Link } from "react-scroll";
import { FaPaperPlane } from 'react-icons/fa';

const Name = styled.h1`
  margin-bottom: 0px;
  line-height: 1em;
`

const Description = styled.p`
  margin-top: 32px;
`

const FirstCentreText = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto 28vw
`

const Headshot = styled.img`
  position: absolute;
  width: 40vw;
  bottom: 0;
  right: 0;
`

const LearnMore = styled.button`
  margin-top: 32px;
  color: white;
  background-color: transparent;
  font-size: 2em;
  padding: 8px 32px 8px 32px;
  border: 3px solid white;
  border-radius: 30px;
  width: auto;
`

const SendEmail = styled.button`
  margin-top: 32px;
  background-color: white;
  border: 1px solid white;
  border-radius: 30px;
  width: 60px;
  height: 60px;

  position: fixed;
  right: 32px;
  bottom: 32px;
  z-index: 99;
`

const FirstPage = () => {
  return (
    <>
      <FirstCentreText>
        <Name className={styles.inside}>Thomas</Name>
        <Name ><span className={styles.inside}>Dhome-Casanova</span></Name>

        <Description>I'm <Typical
          steps={['a developer', 3000, 'an engineer', 3000, 'an adventurer', 3000]}
          loop={Infinity}
          wrapper="b"
        />
        </Description>
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          duration={500}
        ><LearnMore>Learn More</LearnMore></Link>
      </FirstCentreText>
      <SendEmail>
        <a href='mailto:tmd4@princeton.edu'><FaPaperPlane color="#17141d" size="20px" /></a>
      </SendEmail>
      <Headshot src={headshot} /></>

  )
}

export default FirstPage;
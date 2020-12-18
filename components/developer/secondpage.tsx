import React from 'react'
import styled from 'styled-components'
import styles from './secondpage.module.css'
import { FaChevronRight } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import northStar16 from '@iconify-icons/octicon/north-star-16';
import markGithub16 from '@iconify-icons/octicon/mark-github-16';
import browser16 from '@iconify-icons/octicon/browser-16';
import punc from '../../public/punc.png'
import surelight from '../../public/surelight.png'
import mlplanner from '../../public/mlplanner.png'

const BackgroundText = styled.h1`
  font-size: 15vw;
  position: absolute;
  left:28vw;
  top:0;
  z-index: -99;
  opacity: 0.5;
`

const RightArrow = styled(FaChevronRight)`
  position: absolute;
  left: 40%;
  top: 30%;
  opacity: 50%
`

const IconifyIcon = styled(Icon)`
  color: white;
  width: 2em;
  height: 2em;
  margin-right: 16px;
`

const StatsBox = styled.div`
  position: absolute;
  right: 32px;
  top: 70%;
`
const StatsRow = styled.div`
  display: flex;
`

const Image = styled.img`
  width: 100%;
  height:100px;
  border-radius: 3px;
  object-fit: cover;
`
const SecondPage = () => {
  return (
    <>
      <BackgroundText>Developer</BackgroundText>
      <RightArrow color="gold" size="30vw" />

      <section className={styles.cardlist}>
        <article className={styles.card}>
          <header className={styles.cardheader}>
            <p>December 2020</p>
            <h2>Machine Learning App for Courses</h2>
          </header>
          <Image src={mlplanner} />
          <div className={styles.tags}>
            <a>python</a>
          </div>
        </article>

        <article className={styles.card}>
          <header className={styles.cardheader}>
            <p>November 2020</p>
            <h2>SureLight Tech Kickstarter</h2>
          </header>
          <div>
            <Image src={surelight} />
          </div>
          <div className={styles.tags}>
            <a >C++</a>
            <a >C</a>
            <a >Wordpress</a>
          </div>
        </article>

        <article className={styles.card}>
          <header className={styles.cardheader}>
            <p>October 2020</p>
            <h2>8-bit TA Processor debugger app</h2>
          </header>
          <div>
            <Image src={punc} />
          </div>
          <div className={styles.tags}>
            <a>typescript</a>
            <a>reactjs</a>
            <a>verilog</a>
          </div>
        </article>
      </section>

      <StatsBox>
        <StatsRow><IconifyIcon icon={browser16} /><h2>10,000 views</h2></StatsRow>
        <StatsRow><IconifyIcon icon={markGithub16} /><h2>332 commits</h2></StatsRow>
        <StatsRow><IconifyIcon icon={northStar16} /><h2>Arctic Vault Contributor</h2></StatsRow>
      </StatsBox>

    </>

  )
}

export default SecondPage;
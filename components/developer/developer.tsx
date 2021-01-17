import React from 'react'
import styled from 'styled-components'
import styles from './developer.module.css'
import BackgroundText from '../backgroundtext'
import { FaChevronRight } from 'react-icons/fa';
import { GoRuby, GoMarkGithub, GoDeviceDesktop } from 'react-icons/go'
import punc from '../../public/punc.png'
import surelight from '../../public/surelight.png'
import mlplanner from '../../public/MLplanner.png'


const RightArrow = styled(FaChevronRight)`
  position: absolute;
  left: 40%;
  top: 30%;
  opacity: 50%
`

const StatsHeader = styled.h2`
  margin-left: 16px;
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
const Developer = () => {
  return (
    <div id="section1" style={{ position: 'relative' }}>
      <BackgroundText text="Developer" />
      <RightArrow color="gold" size="30vw" />

      <section className={styles.cardlist}>
        <article className={styles.card}>
          <header className={styles.cardheader}>
            <p>January 2020</p>
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
            <a href="https://www.kickstarter.com/projects/benray/surelight-the-safest-bike-light"><h2>SureLight Tech Kickstarter</h2></a>
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
            <a href="https://github.com/ThomasDh-C/VerilogPUNCViewer"><h2>8-bit TA Processor debugger app</h2></a>
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
        <StatsRow><GoDeviceDesktop color="white" size="2em" /><StatsHeader>10,000 views</StatsHeader></StatsRow>
        <StatsRow><GoMarkGithub color="white" size="2em" /><StatsHeader>332 commits</StatsHeader></StatsRow>
        <StatsRow><GoRuby color="white" size="2em" /><StatsHeader>Arctic Vault Contributor</StatsHeader></StatsRow>
      </StatsBox>

    </div>

  )
}

export default Developer;
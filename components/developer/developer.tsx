import React from 'react'
import styled from 'styled-components'
import styles from './developer.module.css'
import BackgroundText from '../backgroundtext'
import { FaChevronRight } from 'react-icons/fa';
import { GoRuby, GoMarkGithub, GoDeviceDesktop } from 'react-icons/go'
import punc from '../../public/punc.png'
import surelight from '../../public/surelight.png'
import dormdesigner from '../../public/dormdesigner.png'


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
            <p>July 2021</p>
            <h2><a href="https://github.com/ThomasDh-C/Dorm-Designer">Dorm room designer app</a></h2>
          </header>
          <Image src={dormdesigner} />
          <div className={styles.tags}>
            <a href='https://nextjs.org/'>next.js</a>
            <a href='https://konvajs.org/'>konva.js</a>
            <a href='https://dexie.org/'>dexie.js</a>
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
            <a href='https://docs.microsoft.com/en-us/cpp/cpp/'>C++</a>
            <a href='https://docs.microsoft.com/en-us/cpp/c-language/c-language-reference'>C</a>
            <a href='https://wordpress.com/'>Wordpress</a>
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
            <a href='https://www.typescriptlang.org/docs/'>typescript</a>
            <a href='https://reactjs.org/'>reactjs</a>
            <a href='https://verilogguide.readthedocs.io/en/latest/'>verilog</a>
          </div>
        </article>
      </section>

      <StatsBox>
        <StatsRow><GoDeviceDesktop color="white" size="2em" /><StatsHeader>10,000 views</StatsHeader></StatsRow>
        <StatsRow><GoMarkGithub color="white" size="2em" /><StatsHeader>867 commits</StatsHeader></StatsRow>
        <StatsRow><GoRuby color="white" size="2em" /><StatsHeader>Arctic Vault Contributor</StatsHeader></StatsRow>
      </StatsBox>

    </div>

  )
}

export default Developer;
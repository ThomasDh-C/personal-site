import React from 'react'
import styled from 'styled-components'
import styles from '../styles/index.module.css'
import Head from 'next/head'
import FirstPage from '../components/firstPage/firstpage'
import Developer from '../components/developer/developer'
import Engineer from '../components/engineer/engineer'
import Adventurer from '../components/adventurer'
import { FaRegCopyright } from 'react-icons/fa'

const Page = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`
const FooterText = styled.p`
  font-size: 1em;
  padding-top: 16px;
`

const Home = () => {
  return (
    <div >
      <Head>
        <title>Thomas DC | Home</title>
        <meta name="Home page" content="Thomas Dhome-Casanova's portfolio website" />
        <link rel="icon" href="/PUwhite.svg" />
      </Head>

      <main>
        <Page>
          <FirstPage />
        </Page>
        <Developer />
        <Engineer />
        <div style={{ position: 'relative', marginTop: '120vh', marginBottom: '32px', width: '100%' }}>
          <Adventurer />
        </div>
        <div style={{ width: '100%', height: '100px' }}></div>
      </main>

      <footer className={styles.footer}>
        <FooterText><FaRegCopyright style={{ marginBottom: '-.2em', marginRight: '8px' }} /> Thomas Dhome-Casanova 2022</FooterText>
      </footer>
    </div >
  )
}

export default Home; 
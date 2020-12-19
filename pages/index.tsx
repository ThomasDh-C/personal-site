import React from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import FirstPage from '../components/firstPage/firstpage'
import Developer from '../components/developer/developer'
import Engineer from '../components/engineer/engineer'
import Adventurer from '../components/adventurer'
const Page = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thomas DC | Home</title>
        <link rel="icon" href="/PUwhite.svg" />
      </Head>

      <main>
        <Page>
          <FirstPage />
        </Page>
        <Developer />
        <Engineer />
        <Page style={{marginTop:'120vh'}}>
          <Adventurer />
        </Page>

      </main>

    </div >
  )
}

export default Home; 
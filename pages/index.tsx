import React from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import FirstPage from '../components/firstPage/firstpage'

const Page = styled.div`
  height: 100vh;
  width: 100vw;
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
        <Page id="section1">

        </Page>
      </main>

    </div >
  )
}

export default Home; 
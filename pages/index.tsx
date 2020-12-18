import React from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import FirstPage from '../components/firstPage/firstpage'

const Page = styled.div`
  height: 100vh;
  width: 100vw;
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
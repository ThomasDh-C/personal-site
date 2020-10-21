import React from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 8px 8px 8px;
  align-content: space-between;
`
const FirstPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #000D0F;
`
const Line1 = styled.h1`
padding-left:1vw;
  position: absolute;
  color: white;
  text-align:center;
  font-size: 16vw;
`
const Line1Small = styled.h1`
  padding-top: 0;
  position: absolute;
  color: #faa866;
  text-align:center;
  font-size: 17vw;
`
const Line2 = styled.h1`
  padding-left:1vw;
  position: absolute;
  color: white;
  text-align:center;
  font-size: 11vw;
  letter-spacing: 4px;
`
const Line2Small = styled.h1`
  padding-top: 0;
  position: absolute;
  color: #028b9b;
  text-align:center;
  font-size: 12vw;
  letter-spacing: 100%;
`

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thomas DC | Home</title>
        <link rel="icon" href="/PUwhite.svg" />
      </Head>

      <main>
        <FirstPage>
          <div style={{ paddingTop: "5vh", paddingLeft: "10vw" }}><Line1Small>Thomas</Line1Small><Line1>Thomas  </Line1></div>

          <div style={{ paddingTop: "50vh", paddingLeft: "10vw" }}><Line2Small>Dhome-Casanova</Line2Small><Line2>Dhome-Casanova</Line2></div>
        </FirstPage>
      </main>
    </div >
  )
}

export default Home; 
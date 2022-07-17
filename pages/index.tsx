import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { PageProps } from '../src/interfaces'

const Home: NextPage<PageProps> = ({ cursorRef }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>void.ceo - ⚛ 🎀 𝒸𝒶𝓇𝒹 𝓌𝑒𝒷 𝓅𝒶𝑔𝑒 🎀 ⚛</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          If excellence is a diamond, its facets are technologies whose
          intersections produce tips that carve solutions into our black glass.
        </h1>
      </main>
    </div>
  )
}

export default Home

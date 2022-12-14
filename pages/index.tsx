import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Well Noted!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Well Noted
        </h1>

        <p className={styles.description}>
          Get started by adding public notes <a href="/notes/add-notes">
            here</a>
        </p>

        <div className={styles.grid}>
          <a href="/notes/add-notes" className={styles.card}>
            <h2>Add Note &rarr;</h2>
            <p>Got something to say? Well Note it</p>
          </a>

          <a href="/notes" className={styles.card}>
            <h2>Public Notes &rarr;</h2>
            <p>l wonder what people have been noting well</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Panda
        </a>
      </footer>
    </div>
  )
}

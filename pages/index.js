import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
    <title>Memory</title>
    </Head>

    <div>
      <h1 className={styles.title}>Memory</h1>
      <p>are you ready to limbo</p>
      <div className={styles.avatarIcons}>
        
    </div>
    <Link href="/game">
        <a className={styles.btn} >New Game</a>
        </Link>
    </div>
    </>
  )
}

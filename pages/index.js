import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <title>Memory | Home</title>
      </Head>

      <div>
        <h1 className={styles.title}>Are you ready to play?</h1>
      </div>

      <div className={styles.avatar_container1}>
        <Image
          className={styles.avatar1}
          src="/log4.png"
          width={200}
          height={178}
        />
        <input className={styles.avatarInput} placeholder="Enter Player One's Name"/>
        
        <Image
          className={styles.avatar2}
          src="/log2.png"
          width={160}
          height={148}
        />
        <input className={styles.avatarInput} placeholder="Enter Player Two's Name" />
        </div>
        <Link href="/game">
          <a className={styles.btn}>Let's Play</a>
        </Link>
      
    </>
  );
}

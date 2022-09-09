import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function Home() {
  // const { user, setUser } = useContext(UserContext);

  return (
    <>
      <Head>
        <title>Memory | Home</title>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800"
          rel="stylesheet"
        />
      </Head>
      <Link href="/">
        <a className={styles.exit_btn}>Exit Game</a>
      </Link>

      <div className={styles.title}>
        <h2>Memory</h2>
        <h1>Are you ready to play?</h1>
      </div>

      <div className={styles.avatar_container1}>
        <Image
          className={styles.avatar1}
          src="/log4.png"
          width={300}
          height={278}
          objectFit="contain"
        />
        <input
          className={styles.avatarInput}
          placeholder="Enter player One's Name"
        />

        <Image
          className={styles.avatar2}
          src="/log2.png"
          width={210}
          height={248}
          objectFit="contain"
        />
        <input
          className={styles.avatarInput}
          placeholder="Enter Player Two's Name"
        />
      </div>
      <Link href="/game">
        <a className={styles.btn}>Let's Play</a>
      </Link>
    </>
  );
}

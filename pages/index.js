import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { usePlayerStore } from "../store/players/players";


export default function Home() {
  const [ player1, setPlayer1 ] = useState('');
  const [ player2, setPlayer2 ] = useState('');
  const setPlayer1Name = usePlayerStore(((state)=>state.setPlayer1Name))
  const setPlayer2Name = usePlayerStore(((state)=>state.setPlayer2Name))


  function submit(){

    var game={
      player1:player1,
      player2:player2
    }

    localStorage.setItem('games',JSON.stringify(game))
  }

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
          type='text'
          placeholder="Name of Player1"
          
          onChange={(e) =>{setPlayer1Name(e.target.value)}}
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
          type='text'
          placeholder="Name of Player2"
      
          onChange={(e) =>{setPlayer2Name(e.target.value)}}
        />
      </div>
      <Link href="/game">
        <a className={styles.btn} onClick={submit}>Let's Play</a>
      </Link>
    </>
  );
}

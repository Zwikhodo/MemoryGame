import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import { usePlayerStore } from "../store/players/players";

const updateWinner = usePlayerStore((state) => state.updateWinner);
const updateWinnerScore = usePlayerStore((state) => state.updateWinner);
const updateRunnerUp = usePlayerStore((state) => state.updateWinner);
const updateRunnerUpScore = usePlayerStore((state) => state.updateWinner);





const WinnerPage = () => {
  return (
    <div className={styles.container}>
      <h2>Well Done!</h2>
      <h1>{winner.playerName}</h1>
      <Image
        className={styles.victory}
        src="/winner.png"
        width={290}
        height={208}
        objectFit="contain"
      />
      <div className={styles.scoreBoard1}>
        <div className={styles.firstPlace}>
        <Image
          className={styles.avatar1}
          src="/log4.png"
          width={98}
          height={78}
          objectFit="contain"
        />
          <p>
            <strong>1st Place</strong>
          </p>{" "}
          <p>Player1</p>
          <p>Score:</p>
        </div>
      </div>
      <div className={styles.scoreBoard2}>
        <div className={styles.secondPlace}>
        <Image
          className={styles.avatar2}
          src="/log2.png"
          width={60}
          height={48}
          objectFit="contain"
        />
          <p>
            <strong>2nd Place</strong>
          </p>{" "}
          <p>Player2</p>
          <p>Score:</p>
        </div>
      </div>
      <div className={styles.btn_container}>
        <Link href="/">
          <a className={styles.btn}>Play Again</a>
        </Link>
      </div>
    </div>
  );
};

export default WinnerPage;

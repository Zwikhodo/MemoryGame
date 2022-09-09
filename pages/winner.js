import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <h2>Well Done!</h2>
      <h1>Player 1</h1>
      <Image
        className={styles.victory}
        src="/winner.png"
        width={290}
        height={208}
        objectFit="contain"
      />
      <div className={styles.scoreBoard1}>
        <div className={styles.firstPlace}>
          <p>
            <strong>1st Place</strong>
          </p>{" "}
          <p>Player1</p>
          <p>Score:</p>
        </div>
      </div>
      <div className={styles.scoreBoard2}>
        <div className={styles.secondPlace}>
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

export default About;

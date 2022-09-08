import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import styles from "../styles/Layout.module.css";
const About = () => {
  return (
    <div className={styles.title}>

      < h2>Well Done!</h2>
      <h1>Player 1</h1>
     <div className={styles.container}>
      

      <Image
          className={styles.victory}
          src="/done.png"
          width={160}
          height={148}
        />
        <div className={styles.scoreBoard1}>
          we are trying
          </div>
        <div className={styles.scoreBoard2}>
          we are trying also
          </div>
          <div className={styles.btn_container}>
          <Link href="/">
        <a className={styles.btn} >Play Again</a>
        </Link>
        
        </div>
        </div>
    </div>

     
     
     
  );
};

export default About;

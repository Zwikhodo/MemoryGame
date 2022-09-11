import styles from "../styles/Card.module.css";

const SingleCard = ({ card, handleChoice, flipped, inactive }) => {
  const handleClick = () => {
    if (!inactive) {
      handleChoice(card);
    }
  };
  return (
    <div className={styles.card}>
      <div className={flipped ? styles.flipped : ""}>
        <img className={styles.frontCover} src={card.src} alt="card front" />
        <img
          className={styles.backCover}
          src="./cards/Card_Back.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCard;

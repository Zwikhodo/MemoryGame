import styles from "../../styles/Game.module.css";
import Link from "next/link";
import { GiCard10Clubs } from "react-icons/gi";
import { useEffect, useState } from "react";
import SingleCard from "../../Components/SingleCard";

const flipCards = [
  { "src": "./cards/A.png","color": "Black","suit": "Spades", matched: false },
  { "src": "./cards/2.png","color": "Black","suit": "Spades", matched: false },
  { "src": "./cards/3.png","color": "Black","suit": "Spades", matched: false },
  { "src": "./cards/4.png","color": "Black","suit": "Spades", matched: false },
  { "src": "./cards/5.png","color": "Black","suit": "Spades", matched: false },
  { "src": "./cards/6.png","color": "Black","suit": "Spades", matched: false },
  { "src": "./cards/7.png","color": "Black","suit": "Spades", matched: false },
  { "src": "./cards/8.png","color": "Black","suit": "Spades", matched: false },
  { "src": "./cards/9.png","color": "Black","suit": "Spades", matched: false },
  { "src": "./cards/10.png","color": "Black","suit": "Spades", matched: false },
  { "src": "./cards/J.png","color": "Black","suit": "Spades", matched: false },
  { "src": "./cards/K.png","color": "Black","suit": "Spades", matched: false },
  { "src": "./cards/Q.png","color": "Black","suit": "Spades", matched: false },
  { "src": "./cards/Ad.png","color": "Red","suit":"Diamonds", matched: false },
  { "src": "./cards/2d.png","color": "Red","suit":"Diamonds", matched: false },
  { "src": "./cards/3d.png","color": "Red","suit":"Diamonds", matched: false },
  { "src": "./cards/4d.png","color": "Red","suit":"Diamonds", matched: false },
  { "src": "./cards/5d.png","color": "Red","suit":"Diamonds", matched: false },
  { "src": "./cards/6d.png","color": "Red","suit":"Diamonds", matched: false },
  { "src": "./cards/7d.png","color": "Red","suit":"Diamonds", matched: false },
  { "src": "./cards/8d.png","color": "Red","suit":"Diamonds", matched: false },
  { "src": "./cards/9d.png","color": "Red","suit":"Diamonds", matched: false },
  { "src": "./cards/10d.png","color": "Red","suit":"Diamonds", matched: false },
  { "src": "./cards/Jd.png","color": "Red","suit":"Diamonds", matched: false },
  { "src": "./cards/Kd.png","color": "Red","suit":"Diamonds", matched: false },
  { "src": "./cards/Qd.png","color": "Red","suit":"Diamonds", matched: false },
  { "src": "./cards/Ac.png","color": "Black","suit": "Clubs", matched: false },
  { "src": "./cards/2c.png","color": "Black","suit": "Clubs", matched: false },
  { "src": "./cards/3c.png","color": "Black","suit": "Clubs", matched: false },
  { "src": "./cards/4c.png","color": "Black","suit": "Clubs", matched: false },
  { "src": "./cards/5c.png","color": "Black","suit": "Clubs", matched: false },
  { "src": "./cards/6c.png","color": "Black","suit": "Clubs", matched: false },
  { "src": "./cards/7c.png","color": "Black","suit": "Clubs", matched: false },
  { "src": "./cards/8c.png","color": "Black","suit": "Clubs", matched: false },
  { "src": "./cards/9c.png","color": "Black","suit": "Clubs", matched: false },
  { "src": "./cards/10c.png","color": "Black","suit": "Clubs", matched: false },
  { "src": "./cards/Jc.png","color": "Black","suit": "Clubs", matched: false },
  { "src": "./cards/Kc.png","color": "Black","suit": "Clubs", matched: false },
  { "src": "./cards/Qc.png","color": "Black","suit": "Clubs", matched: false },
  { "src": "./cards/Ah.png","color": "Red","suit": "Hearts", matched: false  },
  { "src": "./cards/2h.png","color": "Red","suit": "Hearts", matched: false },
  { "src": "./cards/3h.png","color": "Red","suit": "Hearts", matched: false },
  { "src": "./cards/4h.png","color": "Red","suit": "Hearts", matched: false },
  { "src": "./cards/5h.png","color": "Red","suit": "Hearts", matched: false },
  { "src": "./cards/6h.png","color": "Red","suit": "Hearts", matched: false },
  { "src": "./cards/7h.png","color": "Red","suit": "Hearts", matched: false },
  { "src": "./cards/8h.png","color": "Red","suit": "Hearts", matched: false },
  { "src": "./cards/9h.png","color": "Red","suit": "Hearts", matched: false },
  { "src": "./cards/10h.png","color": "Red","suit": "Hearts", matched: false },
  { "src": "./cards/Jh.png","color": "Red","suit": "Hearts", matched: false },
  { "src": "./cards/Qh.png","color": "Red","suit": "Hearts", matched: false },
  { "src": "./cards/Kh.png","color": "Red","suit": "Hearts", matched: false },
  { "src": "./cards/Joker_1.png","color": "Red","suit":"Joker",matched: false },
  { "src": "./cards/Joker_2.png","color": "Red","suit":"Joker", matched: false},
];

const Game = () => {
  const [cardsChosen, setCardsChosen] = useState([]);
  const [card1, setCard1] = useState(null)
  const [card2, setCard2] = useState(null)
  const [points, setPoints] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...flipCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCardsChosen(shuffledCards);
    setPoints(0);
  };

  const handleChoice = (card) => {
    card1 ? setCard2(card) : setCard1(card)
  };

  useEffect(() => {
    if (card1 &&card2){
        if (card1.color === card2.color && card1.suit === card2.suit){
            setCardsChosen(prevCards => {
                return prevCards.map(card =>{
                    if (card.src === card1)

                })
            }
                )
            
            resetTurn()
        }else {
            
            resetTurn()
        }
    }
  }, [card1,card2])

  const resetTurn = () =>{
    setCard1(null)
    setCard2(null)

  }




//   const removeCard= () =>{
//     setCard1(null)
//     setCard2(null)

  return (
    <div className={styles.Game}>
      <button className={styles.btn} onClick={shuffleCards}>
        Restart Game
      </button>
      <h1>Memory</h1>

      <div className={styles.cardGrid}>
        {cardsChosen.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
};

export default Game;

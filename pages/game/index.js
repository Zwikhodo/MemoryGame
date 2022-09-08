import styles from "../../styles/Game.module.css";
import Link from "next/link";
import { GiCard10Clubs } from "react-icons/gi";
import { useEffect, useState } from "react";
import SingleCard from "../../Components/SingleCard";
import Image from 'next/image';

const flipCards = [
  { "src": "./cards/A.png","color": "Black","number": "1", matched: false },
  { "src": "./cards/2.png","color": "Black","number": "2", matched: false },
  { "src": "./cards/3.png","color": "Black","number": "3", matched: false },
  { "src": "./cards/4.png","color": "Black","number": "4", matched: false },
  { "src": "./cards/5.png","color": "Black","number": "5", matched: false },
  { "src": "./cards/6.png","color": "Black","number": "6", matched: false },
  { "src": "./cards/7.png","color": "Black","number": "7", matched: false },
  { "src": "./cards/8.png","color": "Black","number": "8", matched: false },
  { "src": "./cards/9.png","color": "Black","number": "9", matched: false },
  { "src": "./cards/10.png","color": "Black","number": "10", matched: false },
  { "src": "./cards/J.png","color": "Black","number": "J", matched: false },
  { "src": "./cards/K.png","color": "Black","number": "K", matched: false },
  { "src": "./cards/Q.png","color": "Black","number": "Q", matched: false },
  { "src": "./cards/Ad.png","color": "Red","number":"1", matched: false },
  { "src": "./cards/2d.png","color": "Red","number":"2", matched: false },
  { "src": "./cards/3d.png","color": "Red","number":"3", matched: false },
  { "src": "./cards/4d.png","color": "Red","number":"4", matched: false },
  { "src": "./cards/5d.png","color": "Red","number":"5", matched: false },
  { "src": "./cards/6d.png","color": "Red","number":"6", matched: false },
  { "src": "./cards/7d.png","color": "Red","number":"7", matched: false },
  { "src": "./cards/8d.png","color": "Red","number":"8", matched: false },
  { "src": "./cards/9d.png","color": "Red","number":"9", matched: false },
  { "src": "./cards/10d.png","color": "Red","number":"10", matched: false },
  { "src": "./cards/Jd.png","color": "Red","number":"J", matched: false },
  { "src": "./cards/Kd.png","color": "Red","number":"K", matched: false },
  { "src": "./cards/Qd.png","color": "Red","number":"Q", matched: false },
  { "src": "./cards/Ac.png","color": "Black","number": "1", matched: false },
  { "src": "./cards/2c.png","color": "Black","number": "2", matched: false },
  { "src": "./cards/3c.png","color": "Black","number": "3", matched: false },
  { "src": "./cards/4c.png","color": "Black","number": "4", matched: false },
  { "src": "./cards/5c.png","color": "Black","number": "5", matched: false },
  { "src": "./cards/6c.png","color": "Black","number": "6", matched: false },
  { "src": "./cards/7c.png","color": "Black","number": "7", matched: false },
  { "src": "./cards/8c.png","color": "Black","number": "8", matched: false },
  { "src": "./cards/9c.png","color": "Black","number": "9", matched: false },
  { "src": "./cards/10c.png","color": "Black","number": "10", matched: false },
  { "src": "./cards/Jc.png","color": "Black","number": "J", matched: false },
  { "src": "./cards/Kc.png","color": "Black","number": "K", matched: false },
  { "src": "./cards/Qc.png","color": "Black","number": "Q", matched: false },
  { "src": "./cards/Ah.png","color": "Red","number": "1", matched: false  },
  { "src": "./cards/2h.png","color": "Red","number": "2", matched: false },
  { "src": "./cards/3h.png","color": "Red","number": "3", matched: false },
  { "src": "./cards/4h.png","color": "Red","number": "4", matched: false },
  { "src": "./cards/5h.png","color": "Red","number": "5", matched: false },
  { "src": "./cards/6h.png","color": "Red","number": "6", matched: false },
  { "src": "./cards/7h.png","color": "Red","number": "7", matched: false },
  { "src": "./cards/8h.png","color": "Red","number": "8", matched: false },
  { "src": "./cards/9h.png","color": "Red","number": "9", matched: false },
  { "src": "./cards/10h.png","color": "Red","number": "10", matched: false },
  { "src": "./cards/Jh.png","color": "Red","number": "J", matched: false },
  { "src": "./cards/Qh.png","color": "Red","number": "Q", matched: false },
  { "src": "./cards/Kh.png","color": "Red","number": "K", matched: false },
  { "src": "./cards/Joker_1.png","color": "Red","number":"0",matched: false },
  { "src": "./cards/Joker_2.png","color": "Red","number":"0", matched: false},
];

const Game = () => {
  const [cardsChosen, setCardsChosen] = useState([]);
  const [card1, setCard1] = useState(null)
  const [card2, setCard2] = useState(null)
  const [points, setPoints] = useState(0);
  const [winner, setWinner] = useState ('')
  const [player1, setPlayer1] = useState ([])
  const [player2, setPlayer2] = useState ([])
  const [turn, setTurn] = useState ('')

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
        if (card1.color === card2.color && card1.number === card2.number) {
            setCardsChosen(prevCards => {
                return prevCards.map(card =>{
                    if (card.color === card1.color && card.number === card1.number) {
                        return {...card, matched: true}           
                        } else {
                            return card
                        }

                })
            })
            
            resetTurn()
        }else {
            
           setTimeout(() => resetTurn(), 2000)
        }
    }
  }, [card1,card2])

  console.log(cardsChosen)

  const resetTurn = () =>{
    setCard1(null)
    setCard2(null)

  }


  return (
    <div className={styles.Game}>
      <button className={styles.btn} onClick={shuffleCards}>
        Start Game
      </button>
      <div className={styles.player1}>
        <Image
          className={styles.avatar1}
          src="/log4.png"
          width={200}
          height={178}
        />
        <h2>Player 1</h2>
        <h1>Score:</h1>
        </div>
        <div className={styles.player2}>
        <Image
          className={styles.avatar2}
          src="/log2.png"
          width={160}
          height={148}
        />
        <h2>Player 2</h2>
        <h1>Score:</h1>
        </div>
      
    <div className={styles.container}>
      <div className={styles.cardGrid}>
        {cardsChosen.map((card) => (
          <SingleCard 
          key={card.id} 
          card={card} 
          handleChoice={handleChoice}
          flipped={card === card1 || card === card2 || card.matched}
          />
          
        ))}
      </div>
    </div>
    </div>
  );
};

export default Game;

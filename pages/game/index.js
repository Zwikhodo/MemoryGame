import styles from '../../styles/Game.module.css'
import Link from 'next/link';
import { GiCard10Clubs } from "react-icons/gi";
import { useEffect, useState } from "react"
import SingleCard from '../../Components/SingleCard';

const flipCards = [
    { "src": "./cards/A.png" },
    { "src": "./cards/2.png" },
    { "src": "./cards/3.png" },
    { "src": "./cards/4.png" },
    { "src": "./cards/5.png" },
    { "src": "./cards/6.png" },
    { "src": "./cards/7.png" },
    { "src": "./cards/8.png" },
    { "src": "./cards/9.png" },
    { "src": "./cards/10.png" },
    { "src": "./cards/J.png" },
    { "src": "./cards/K.png" },
    { "src": "./cards/Q.png" },
    { "src": "./cards/Ad.png" },
    { "src": "./cards/2d.png" },
    { "src": "./cards/3d.png" },
    { "src": "./cards/4d.png" },
    { "src": "./cards/5d.png" },
    { "src": "./cards/6d.png" },
    { "src": "./cards/7d.png" },
    { "src": "./cards/8d.png" },
    { "src": "./cards/9d.png" },
    { "src": "./cards/10d.png" },
    { "src": "./cards/Jd.png" },
    { "src": "./cards/Kd.png" },
    { "src": "./cards/Qd.png" },
    { "src": "./cards/Ac.png" },
    { "src": "./cards/2c.png" },
    { "src": "./cards/3c.png" },
    { "src": "./cards/4c.png" },
    { "src": "./cards/5c.png" },
    { "src": "./cards/6c.png" },
    { "src": "./cards/7c.png" },
    { "src": "./cards/8c.png" },
    { "src": "./cards/9c.png" },
    { "src": "./cards/10c.png" },
    { "src": "./cards/Jc.png" },
    { "src": "./cards/Kc.png" },
    { "src": "./cards/Qc.png" },
    { "src": "./cards/Ah.png" },
    { "src": "./cards/2h.png" },
    { "src": "./cards/3h.png" },
    { "src": "./cards/4h.png" },
    { "src": "./cards/5h.png" },
    { "src": "./cards/6h.png" },
    { "src": "./cards/7h.png" },
    { "src": "./cards/8h.png" },
    { "src": "./cards/9h.png" },
    { "src": "./cards/10h.png" },
    { "src": "./cards/Jh.png" },
    { "src": "./cards/Qh.png" },
    { "src": "./cards/Kh.png" },
    { "src": "./cards/Joker_1.png" },
    { "src": "./cards/Joker_2.png" },
]



const Game = () => {
    // const [imagesArray, setImagesArray] = useState([])    
    const [cardsChosen, setCardsChosen] = useState([])    
    const [cardsChosenIds, setCardsChosenIds] = useState([])    
    const [points, setPoints] = useState(0)


    const shuffleCards = () => {
        const shuffledCards = [...flipCards]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random()}))

    setCardsChosen(shuffledCards)
    setPoints(0)
    }

    console.log(cardsChosen,points)
    return ( 
        <div className={styles.Game}>
        <button className={styles.btn} onClick={shuffleCards}>Restart Game</button>
            <h1>Memory</h1>
            

            <div className={styles.cardGrid}>
                {cardsChosen.map(card =>(
                <SingleCard key ={card.id} card = {card}/>
                    
                ))}
            </div>
        </div>

        
     );
}
 
export default Game;
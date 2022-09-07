import styles from '../styles/Card.module.css'


const SingleCard = ({card}) => {
    return ( 
        
                <div className={styles.card}>
                    <div>
                        <img className={styles.frontCover} src={card.src} alt="card front" />
                        <img className={styles.backCover} src="./cards/Card_Back.png" alt="card back"/>
                        </div>
                        </div>
                
                );
}
 
export default SingleCard;
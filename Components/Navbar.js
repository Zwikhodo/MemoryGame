import Link from 'next/link'
import Image from 'next/image';

const Navbar = ({shuffleCards}) => {
    return (  
        <nav>
            <div className="logo">
                <h1 >Memory</h1>
            </div>
            <button className="exit_btn" >
        Exit Game
      </button>
      <button className="btn"  onClick={shuffleCards}>
        Restart Game
      </button>
            {/* <Link href="/about" ><a>About</a></Link> */}

        </nav>
    );
}
 
export default Navbar;
import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return (  
        <nav>
            <div className="logo">
                <Image src="/logo2.png" width={200} height={78} />
            </div>
           <Link href="/"><a>Home</a></Link> 
            <Link href="/about" ><a>About</a></Link>

        </nav>
    );
}
 
export default Navbar;
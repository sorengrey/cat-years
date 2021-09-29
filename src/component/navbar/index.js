import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';



function Navbar(){
    return <nav>
        <a href="#" className="kitty"><FontAwesomeIcon icon={ faCat } /></a>
        <a href="#">Home</a> 
        <a href="#">Contact</a> 
        <a href="#">Links</a>
    </nav>
}

export default Navbar;


import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.css'


function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.sociallist}>
                <li>
                    <FontAwesomeIcon icon={faFacebook} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faLinkedin} /> 
                </li>
            </ul>
            <p className={styles.copyright}>
                <span>
                    Vanilla
                </span> &copy; 2024
            </p>
        </footer>
    )
    
}
export default Footer
import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../components/img/logovanilla.png'
import lupa2 from '../../components/img/lupa2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import CartButton  from '../CartButton/CartButton';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';


function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link>
                    <img src={logo} alt="logo" className={styles.img}/>
                </Link>
                <div className={styles.boxsearch}>
                    <input type='text' className={styles.searchtxt} placeholder='pesquisar por produto'></input>
                    <a href='#' className={styles.btnsearch}>
                         <img src={lupa2} alt='lupa' height="30" width="30"/>
                    </a>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                    <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/contato">Contato</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/company">Sobre nós</Link>
                    </li>
                </ul>
                <div className={styles.icons}>
                <FontAwesomeIcon icon={faUser} className={styles.iconuser} />
                <FontAwesomeIcon icon={faHeart} className={styles.iconheart}  />
                < CartButton />
                <FontAwesomeIcon icon={faHeadset} className={styles.iconhead}  />
                </div>
            </Container>
        </nav>
    )
}
export default Navbar
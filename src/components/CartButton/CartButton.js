import styles from './CartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartButton() {
    return(
        <button className={styles.buttoncart}>
            <FontAwesomeIcon icon={faCartShopping} className={styles.iconcart}  />
            <span className={styles.cartstatus}>0</span>
        </button>
    )
}
export default CartButton;
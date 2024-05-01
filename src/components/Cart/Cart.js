import styles from './Cart.module.css'
import CartItem from '../CartItem/CartItem'

function Cart(){
    return(
        <section className={styles.cart}>
            <div className={styles.cartitens}>
                <CartItem data={{ thumbnail: '', title: '', price: '123'}} />
            </div>
            <div className={styles.cartresume}>
                Resumo do carrinho
            </div>

        </section>
    )
}
export default Cart;
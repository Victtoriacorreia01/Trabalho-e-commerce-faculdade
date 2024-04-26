import styles from './Cart.module.css'

function Cart(){
    return(
        <section>
            <div className={styles.cartitens}>
                itens do carrinho
            </div>
            <div className={styles.cartresume}>
                Resumo do carrinho
            </div>

        </section>
    )
}
export default Cart;
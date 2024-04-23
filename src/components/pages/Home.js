import styles from './Home.module.css'
import rosamulher from '../../components/img/rosamulher.jpg'

function Home(){
    return (
        <section className={styles}>
             <div><img src={rosamulher} alt="mulher rosa" className={styles.img} /></div>
            <div className={styles.content}>
                <div className={styles.contentbox}>
                    <h2>Novos produtos de primavera</h2>
                    <label>A maior promoção do ano na Vanilla !</label>
                    <br></br>
                    <a href='#'>Shop Now <i className='fa-solid fa-arrow-right'></i></a>
                </div>
            </div>

            <div className={styles.category}>
                <div className={styles.categorysec}>
                    <h2>Categoria de Roupas</h2>
                </div>
                <div className={styles.categorybox}>
                    <div className={styles.boxdress}>
                        <div className={styles.boxcontent}>
                            <h3>Os mais populares</h3>
                            <label>Vestidos</label>
                            <a href='#'>Compre agora!</a>
                        </div>
                        <img src=''/>
                    </div>

                    <div className={styles.boxshirt}>
                        <div className={styles.boxcontent}>
                            <h3>Tudo com 50% de desconto</h3>
                            <label>Saias</label>
                            <a href='#'>Compre agora!</a>
                        </div>
                        <img src=''/>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Home;
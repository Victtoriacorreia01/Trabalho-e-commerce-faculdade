import styles from './Home.module.css'
import rosamulher from '../../components/img/rosamulher.jpg'
import toprosa from '../../components/img/toprosa.jpg'
import saiapreta from '../../components/img/saiapreta.jpg'
import Dress from '../../components/img/Dress.jpg'
import vestidobranco from '../../components/img/vestido.jpg'
import oculos from '../../components/img/oculos.jpg'
import salto from '../../components/img/salto.jpg'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                    <div className={styles.boxshirt}>
                        <div className={styles.boxcontent}>
                            <h3>As mais populares</h3>
                            <label>Blusas</label>
                            <a href='#'>Compre agora!</a>
                        </div>
                        <img src={toprosa} alt="mulher de vestido" />
                    </div>

                    <div className={styles.boxshirt}>
                        <div className={styles.boxcontent}>
                            <h3>50% de desconto</h3>
                            <label>Saias</label>
                            <a href='#'>Compre agora!</a>
                        </div>
                        <img src={saiapreta} alt="saia preta"/>
                    </div>
                    <div className={styles.boxshirt}>
                        <div className={styles.boxcontent}>
                            <h3>80% de desconto</h3>
                            <label>Vestidos</label>
                            <a href='#'>Compre agora!</a>
                        </div>
                        <img src={Dress} alt="vestido"/>
                    </div>
                </div>
            </div>


                    <div className={styles.mostrated}>
                        <div className={styles.mostratedbox}>
                            <div className={styles.mostratedtitle}>
                                <h2>Os favoritos</h2>
                            </div>

                            <div className={styles.mostrateditens}>
                                <div className={styles.mostrateditem}>
                                    <div className={styles.mostimage}>
                                        <img src={salto} alt='salto'/>
                                    </div>
                                    <div className={styles.mostratedbody}>
                                        <h4>Saltos</h4>
                                        <FontAwesomeIcon icon={faStar} className={styles.icons} />
                                        <FontAwesomeIcon icon={faStar} className={styles.icons} />
                                        <FontAwesomeIcon icon={faStar} className={styles.icons} />
                                        <FontAwesomeIcon icon={faStar} className={styles.icons} />
                                        <FontAwesomeIcon icon={faStar} className={styles.icons} />
                                        <div className={styles.price}>
                                            <label className={styles.sale}>R$89.99</label>
                                            <label>R$48.99</label>
                                        </div>
                                </div>
                            </div>

                            <div className={styles.mostrateditem}>
                                    <div className={styles.mostimage}>
                                        <img src={oculos} alt='oculos'/>
                                    </div>
                                    <div className={styles.mostratedbody}>
                                        <h4>Oculos escuros</h4>
                                        <div>
                                        <FontAwesomeIcon icon={faStar} className={styles.icons} />
                                        <FontAwesomeIcon icon={faStar} className={styles.icons} />
                                        <FontAwesomeIcon icon={faStar} className={styles.icons} />
                                        <FontAwesomeIcon icon={faStar} className={styles.icons} />
                                        <FontAwesomeIcon icon={faStar} className={styles.icons} />
                                        </div>
                                        <div className={styles.price}>
                                            <label className={styles.sale}>R$89.99</label>
                                            <label>R$48.99</label>
                                        </div>
                                </div>
                            </div>

                            <div className={styles.mostrateditem}>
                                    <div className={styles.mostimage}>
                                        <img src={vestidobranco} alt='vestido branco'/>
                                    </div>
                                    <div className={styles.mostratedbody}>
                                        <h4>Vestidos formais</h4>
                                        <div>
                                        <FontAwesomeIcon icon={faStar} className={styles.icons} />
                                        <FontAwesomeIcon icon={faStar} className={styles.icons} />
                                        <FontAwesomeIcon icon={faStar} className={styles.icons} />
                                        <FontAwesomeIcon icon={faStar} className={styles.icons} />
                                        <FontAwesomeIcon icon={faStar} className={styles.icons} />
                                        </div>
                                        <div className={styles.price}>
                                            <label className={styles.sale}>R$89.99</label>
                                            <label>R$48.99</label>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            
    
        </section>

    )
}
export default Home;
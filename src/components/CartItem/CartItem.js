import React from 'react';
import styles from './CartItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';

function CartItem({ data }) {
 
  if (!data) return null;

  const { thumbnail, title, price } = data;

  return (
    <section className={styles.cartitem}>
      <img src={thumbnail} alt='imagem do produto' className={styles.cartitemimg} />

      <div className={styles.cartitemcontent}>
        <h3 className={styles.cartitemtitle}>{title}</h3>
        <h3 className={styles.cartitemprice}>{formatCurrency(price)}</h3>
      </div>

      <button className={styles.button} type='button'>
        <FontAwesomeIcon icon={faMinusSquare} className={styles.iconcartminus} />
        <FontAwesomeIcon icon={faPlusSquare} className={styles.iconcartplus} />
      </button>
    </section>
  );
}

CartItem.propTypes = {
  data: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default CartItem;

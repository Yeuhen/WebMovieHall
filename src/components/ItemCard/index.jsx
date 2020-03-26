import React from 'react';
import Proptypes from 'prop-types';
import cardImg from '../../assets/no-image-available.jpg';
import {API_IMG_ORIGINAL} from '../../configs/backendAPI'
import styles from './index.module.css';

const ItemCard = ({img, name, overview}) => {
  return (
    <div className={styles.itemCard}>
      <figure>
        <div className={styles.imgContainer}>
          <img src={img !== null ? `${API_IMG_ORIGINAL}${img}` : cardImg} alt="item"/>
        </div>
        <figcaption>
          <h3 className={styles.itemName}>{name}</h3>
          <p className={styles.itemAnnotation}>{overview}</p>
        </figcaption>
      </figure>

    </div>
  )
};

ItemCard.propTypes = {
  img: Proptypes.string,
  name: Proptypes.string.isRequired,
  overview: Proptypes.string.isRequired
};

ItemCard.defaultTypes = {
  img: Proptypes.string,
  name: Proptypes.string,
  overview: Proptypes.string
};

export default ItemCard;

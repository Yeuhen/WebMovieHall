import React from 'react';
import Proptypes from 'prop-types';
import cardImg from '../../assets/no-image-available.jpg';
import {API_IMG_ORIGINAL} from '../../configs/backendAPI'
import styles from './index.module.css';
import resources from '../../configs/resources';

const ItemCard = ({img, name, overview}) => {
  const overviewText = overview.length > 1 ? overview : resources.itemOverviewNotFound;

  return (
    <div className={styles.itemCard}>
      <figure>
        <div className={styles.imgContainer}>
          <img src={img !== null ? `${API_IMG_ORIGINAL}${img}` : cardImg} alt="item"/>
        </div>
        <figcaption>
          <h3 className={styles.itemName}>{name}</h3>
          <p className={styles.itemAnnotation}>{overviewText}</p>
        </figcaption>
      </figure>

    </div>
  )
};

ItemCard.propTypes = {
  img: Proptypes.string, //eslint-disable-line
  name: Proptypes.string.isRequired,
  overview: Proptypes.string.isRequired
};

ItemCard.defaultTypes = {
  img: Proptypes.string,
  name: Proptypes.string,
  overview: Proptypes.string
};

export default ItemCard;

import React from 'react'
import resources from "../../configs/resources";
import cardImg from '../../assets/img-not-found.jpg';
import styles from './index.module.css';

const ItemCard = ({img, name, overview, pages, openMovieCard}) => {
  return (
    <div className={styles["item-card"]}>
      <figure>
        <div className={styles["img-container"]} onClick={openMovieCard}>
          <img src={img !== '' ? `${resources.imgOriginal}${img}` : cardImg} alt="item"/>
        </div>
        <figcaption>
          <h3 className={styles["item-card__name"]}>{name}</h3>
          <p className={styles["item-card__annotation"]}>{overview}</p>
        </figcaption>
      </figure>

    </div>
  )
};

export default ItemCard;

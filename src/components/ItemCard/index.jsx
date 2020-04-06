import React from 'react';
import Proptypes from 'prop-types';
import cardImg from '../../assets/no-image-available.jpg';
import { API_IMG_ORIGINAL } from '../../configs/backendAPI';
import CircularProgressBar from '../CircularProgressBar/index';
import resources from '../../configs/resources';
import styles from './index.module.css';

const ItemCard = ({ img, name, overview, voteAverage, release =  '', locale }) => {
  const overviewText = overview.length > 1 ? overview : resources.itemOverviewNotFound;

  const getReleasedDate = () => {
    const releaseDate = new Date(release);
    const localeShort = locale.slice(0, 2);
    return `${releaseDate.toLocaleString(localeShort, { month: 'long' })} ${releaseDate.getFullYear()}`;
  };

  const localeReleaseDate = release ? getReleasedDate() : '';

  return (
    <div className={styles.itemCard}>
      <figure>
        <div className={styles.imgContainer}>
          <img src={img !== null ? `${API_IMG_ORIGINAL}${img}` : cardImg} alt="item"/>
          <CircularProgressBar voteAverage={voteAverage}/>
        </div>
        <figcaption>
          <div className={styles.itemTitleWrapper}>
            <h3 className={styles.itemName}>{name}</h3>
            <p>{localeReleaseDate}</p>
          </div>
          <p className={styles.itemAnnotation}>{overviewText}</p>
        </figcaption>
      </figure>
    </div>
  );
};

ItemCard.propTypes = {
  img: Proptypes.string, //eslint-disable-line
  name: Proptypes.string.isRequired,
  overview: Proptypes.string.isRequired,
  voteAverage: Proptypes.number.isRequired,
  release: Proptypes.string,
  locale: Proptypes.string.isRequired,
};

ItemCard.defaultProps = {
  img: '',
  release:'',
};

export default ItemCard;

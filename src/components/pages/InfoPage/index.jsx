import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { library as faLib } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import imgHeart from '../../../assets/heart.png';
import myPhoto1 from '../../../assets/myPhoto_1.jpg';
import about from '../../../configs/about';
import styles from './index.module.css';

faLib.add(faLinkedin);

const InfoPage = ({ locale }) => {
  const arrDevInfo = about.devInfo[`${locale}`];
  const arrDevSkills = arrDevInfo.slice(1, arrDevInfo.length-1);

  return (
    <div className={styles.wrapper}>
      <img className={styles.imgInfo} src={imgHeart} alt="heart"/>
      <h2 className={styles.mainTitle}>{about.mainTitle[`${locale}`]}</h2>
      <div className={styles.container}>
        <section>
          <h3 className={styles.title}>{about.TMDbTitle[`${locale}`]}</h3>
          <p className={styles.description}>{about.TMDbDescription[`${locale}`]}</p>
          <div className={styles.sep}/>
        </section>

        <section>
          <h3 className={styles.title}>{about.aboutTitle[`${locale}`]}</h3>
          <figure className={styles.figureWrapper}>
            <div className={styles.photoWrapper}>
              <img className={styles.myPhoto} src={myPhoto1} alt="myPhoto"/>
              <div>
                <a href={about.linkedInLink}
                   target="_blank"
                   rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className={styles.linkIcon}/>
                </a>
              </div>
            </div>
            <figcaption className={styles.devData}>
              <h4 className={styles.devName}>{about.devName[`${locale}`]}</h4>
              <p className={styles.devRole}>{about.devRole[`${locale}`]}</p>
              <div className={styles.devInfo}>
                <p>{arrDevInfo[0]}</p>
                <ul className={styles.skillList}>
                  {arrDevSkills.map( el => <li key={el.substr(0,20)}>{el}</li>)}
                </ul>
                <p>{arrDevInfo[arrDevInfo.length - 1]}</p>
              </div>
            </figcaption>
          </figure>
        </section>
      </div>

    </div>
  );
};

InfoPage.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default InfoPage;

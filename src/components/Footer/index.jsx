import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/index.es';
import {library as faLib} from '@fortawesome/fontawesome-svg-core';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';
import {faGitSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import about from "../../configs/about";
import styles from './index.module.css';

faLib.add(faCopyright, faGitSquare, faLinkedin);

const Footer = () => {

  return (
    <div className={styles.wrapper}>
      <ul>
        <li>
          <p className="copyright">
            <FontAwesomeIcon icon={faCopyright} className={styles.linkIcon}/>
            2020 visualising TMDb by
            <a href={about.devLink} className={styles.author}>{about.dev}</a>
          </p>
        </li>
        <li>
          <a href={about.devLink}
             target="_blank"
             rel="noopener noreferrer"
             className={styles.linkBtn}
          >
            <FontAwesomeIcon icon={faGitSquare} className={styles.linkIcon}/>
            <span>{about.git}</span>
          </a>
        </li>
        <li>
          <a href={about.linkedInLink}
             target="_blank"
             rel="noopener noreferrer"
             className={styles.linkBtn}
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.linkIcon}/>
            <span>{about.linkedIn}</span>
          </a>
        </li>
      </ul>
    </div>
  )
};

export default Footer;

import React from "react";
import PropTypes from 'prop-types';
import resources from "../../../configs/resources";
import styles from './index.module.css'

const NotFoundPage = ({locale='en-US'}) => {
  console.log('localeNFP:', locale);

  return (
    <div className={styles.wrapper}>
      <h2>{resources.searchNotFound[`${locale}`]}</h2>
    </div>

  )
};

NotFoundPage.propTypes = {
  locale: PropTypes.string
};

NotFoundPage.defaultTypes = {
  locale: PropTypes.string
};

export default NotFoundPage;

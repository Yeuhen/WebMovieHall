import React from "react";
import PropTypes from 'prop-types';
import resources from "../../../configs/resources";
import styles from './index.module.css';

const UrlNotFoundPage = ({locale})=> {

  return (
    <div className={styles.wrapper}>
      <h2>{resources.urlNotFound[`${locale}`]}</h2>
    </div>
  )
};

UrlNotFoundPage.propTypes = {
  locale: PropTypes.string.isRequired
};

export default UrlNotFoundPage;

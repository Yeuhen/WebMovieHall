import React from "react";
import resources from "../../../configs/resources";
import styles from './index.module.css';

const UrlNotFoundPage = ()=> {

  return (
    <div className={styles.wrapper}>
      <h2>{resources.urlNotFound}</h2>
    </div>
  )
};

export default UrlNotFoundPage;

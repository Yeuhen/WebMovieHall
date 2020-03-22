import React from "react";
import resources from "../../../configs/resources";
import styles from './index.module.css'

const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <h2>{resources.searchNotFound}</h2>
    </div>

  )
};

export default NotFoundPage;

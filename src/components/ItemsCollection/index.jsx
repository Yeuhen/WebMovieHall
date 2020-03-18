import React from 'react';
import ItemCard from '../ItemCard/index';
import resources from "../../configs/resources";
import styles from './index.module.css';

const ItemsCollection = ({ itemsData = []}) => {
  console.log('itemsData', itemsData);
  return (
    <div className={styles.content}>
      {/* eslint-disable-next-line react/prop-types */}
      {itemsData.map(el => <ItemCard name={el[resources.itemName]}
                                             img={el[resources.itemImg]}
                                             backdropImg={el[resources.itemBackdropImg]}
                                             overview={el[resources.itemOverview]}
                                             release={el[resources.itemRelease]}
                                             vote={el[resources.itemVote]}
                                             key={`${el["release_date"]}+${el["vote_average"]}`} // eslint-disable-line
        />
      )}
    </div>
  )
};

export default ItemsCollection;

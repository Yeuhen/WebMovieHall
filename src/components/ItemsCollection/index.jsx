import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'; //eslint-disable-line
import ItemCard from '../ItemCard/index';
import resources from "../../configs/resources";
import styles from './index.module.css';

const ItemsCollection = ({itemsData = [], product, locale}) => {

  return (
    <div className={styles.content}>
      {itemsData.map(el => <Link to={`/${product}/${locale}/${el[resources.itemId]}`}
                                 key={`link:${el[resources.itemId]}`}
        >
          <ItemCard name={el[resources.movieName] || el[resources.tvName]}
                    img={el[resources.itemImg]}
                    backdropImg={el[resources.itemBackdropImg]}
                    overview={el[resources.itemOverview]}
                    release={el[resources.itemRelease]}
                    vote={el[resources.itemVote]}
                    key={el[resources.itemId]}

          />
        </Link>
      )}
    </div>
  )
};

ItemsCollection.propTypes = {
  product: PropTypes.string.isRequired,
  itemsData: PropTypes.arrayOf(
    PropTypes.shape({
      popularity: PropTypes.number,
      vote_count: PropTypes.number,
      video: PropTypes.boolean,
      poster_path: PropTypes.string,
      id: PropTypes.number,
      adult: PropTypes.boolean,
      backdrop_path: PropTypes.string,
      original_language: PropTypes.string,
      original_title: PropTypes.string,
      genre_ids: PropTypes.arrayOf(
        PropTypes.number
      ),
      title: PropTypes.string,
      vote_average: PropTypes.number,
      overview: PropTypes.string,
      release_date: PropTypes.string
    })),
  locale: PropTypes.string.isRequired
};

ItemsCollection.defaultProps = {
  itemsData: [],
};

export default ItemsCollection;

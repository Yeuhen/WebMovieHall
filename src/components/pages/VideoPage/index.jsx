import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useHttp} from '../../../services/hooks/http.hooks';
import Loader from '../../Loader/index';
import Footer from "../../Footer";
import cardImg from '../../../assets/no-image-available.jpg'
import {API_IMG_ORIGINAL, API_URL_BASE} from "../../../configs/backendAPI";
import ItemsCollection from "../../ItemsCollection/index";
import styles from './index.module.css';
import resources from "../../../configs/resources";

const VideoPage = ({product}) => {
  const [videoData, setVideoData] = useState({});
  const [recommendationData, setRecommendationData] = useState({});

  const img = videoData[resources.itemImg];
  const imgBackdrop = videoData[resources.itemBackdropImg]
    ? `${API_IMG_ORIGINAL}${videoData[resources.itemBackdropImg]}`
    : '';

  const {id} = useParams();
  const {loading, request} = useHttp();

  const fetchVideoDetail = useCallback(async () => {
    try {
      const apiKey = process.env.REACT_APP_API_URL;

      const url = () => `${API_URL_BASE}/${product}/${id}?api_key=${apiKey}&language=en-US&page=1`;
      const fetched = await request(url(), 'GET');
      setVideoData(fetched);

    } catch (e) {
      console.error(e); //eslint-disable-line
    }
  }, [request, product, id]);

  const fetchRecommendations = useCallback(async () => {
    try {
      const apiKey = process.env.REACT_APP_API_URL;

      const url = () => `${API_URL_BASE}/${product}/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`;
      const fetched = await request(url(), 'GET');
      setRecommendationData(fetched);
    } catch (e) {
      console.error(e); //eslint-disable-line
    }
  }, [request, product, id]);

  useEffect(() => {
      fetchVideoDetail();
      fetchRecommendations();
    }, [fetchVideoDetail, fetchRecommendations]
  );

  if (loading) {
    return (
      <Loader/>
    )
  }

  return (
    <>
      {!loading &&
      <>
        <div className={styles.wrapper}>
          <div className={styles.container}
               style={{'background-image': `url(${imgBackdrop})`}}
          >
            <figure className={styles.itemCard}>
              <div className={styles.imgContainer}>
                <img src={img ? `${API_IMG_ORIGINAL}${img}` : cardImg} alt="videoPoster"/>
              </div>
              <figcaption>
                <h2 className={styles.videoTitle}>{videoData[resources.movieName] || videoData[resources.tvName]}</h2>
                <p className={styles.videoOverview}>{videoData[resources.itemOverview]}</p>
              </figcaption>
            </figure>
          </div>
          <div className={styles.recommendedWrapper}>
            <h2 className={styles.recommendedTitle}>{resources.recommended}</h2>
          </div>
          <ItemsCollection itemsData={recommendationData.results}
                           product={product}
          />
        </div>
        <Footer/>
      </>
      }
    </>
  )
};

VideoPage.propTypes = {
  product: PropTypes.string.isRequired
};

export default VideoPage;

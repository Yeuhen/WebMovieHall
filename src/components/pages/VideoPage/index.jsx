import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useHttp } from '../../../services/hooks/http.hooks';
import Loader from '../../Loader/index';
import cardImg from '../../../assets/no-image-available.jpg';
import { API_IMG_ORIGINAL } from '../../../configs/backendAPI';
import ItemsCollection from '../../ItemsCollection/index';
import styles from './index.module.css';
import resources from '../../../configs/resources';
import { getURI } from '../../../services/fetchData';

const VideoPage = ({ locale }) => {
  const [videoData, setVideoData] = useState({});
  const [recommendationData, setRecommendationData] = useState({});
  // const { pathname } = useLocation();
  const { sectionVideo, id, typeProduct } = useParams();

  const overviewText = videoData.overview ? videoData.overview : resources.itemOverviewNotFound;

  const img = videoData[resources.itemImg];
  const imgBackdrop = videoData[resources.itemBackdropImg]
    ? `${API_IMG_ORIGINAL}${videoData[resources.itemBackdropImg]}`
    : '';

  const backDropStyle = videoData[resources.itemBackdropImg] ? {'backgroundImage': `url(${imgBackdrop})` } : { 'backgroundColor': 'var(--seaBlue)' };
  const { loading, request } = useHttp();

  const fetchVideoDetail = useCallback(async () => {
    try {
      const parameters = {
        'sectionVideo': sectionVideo,
        'id': id,
        'typeProduct': typeProduct,
        'locale': locale,
      };
      const url = getURI(parameters);
      const fetched = await request(url, 'GET');
      setVideoData(fetched);

    } catch (e) {} //eslint-disable-line
  }, [request, sectionVideo, id, typeProduct, locale]);

  const fetchRecommendations = useCallback(async () => {
    try {
      const parameters = {
        'sectionVideo': sectionVideo,
        'id': id,
        'typeProduct': resources.itemRecommendations,
        'locale': locale,
      };
      const url = getURI(parameters);
      const fetched = await request(url, 'GET');
      setRecommendationData(fetched);
    } catch (e) {
      console.error(e); //eslint-disable-line
    }
  }, [request, sectionVideo, id, locale]);

  useEffect(() => {
      fetchVideoDetail();
      fetchRecommendations();
      window.scrollTo(0, 0);
    }, [fetchVideoDetail, fetchRecommendations, locale, id],
  );

  if (loading) {
    return (
      <Loader/>
    );
  }

  return (
    <>
      {!loading &&
      <>
        <div className={styles.wrapper}>
          <div className={styles.container}
               style={ backDropStyle }
          >
            <figure className={styles.itemCard}>
              <div className={styles.imgContainer}>
                <img src={img ? `${API_IMG_ORIGINAL}${img}` : cardImg} alt="videoPoster"/>
              </div>
              <figcaption>
                <h2 className={styles.videoTitle}>{videoData[resources.movieName] || videoData[resources.tvName]}</h2>
                <p className={styles.videoOverview}>{overviewText}</p>
              </figcaption>
            </figure>
          </div>
          <div className={styles.recommendedWrapper}>
            <h2 className={styles.recommendedTitle}>{resources.recommended[`${locale}`]}</h2>
          </div>
          <ItemsCollection itemsData={recommendationData.results}
                           sectionVideo={sectionVideo}
                           locale={locale}
          />
        </div>
      </>
      }
    </>
  );
};

VideoPage.propTypes = {
  locale: PropTypes.string.isRequired
};

export default VideoPage;

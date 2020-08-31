import React, { useState, useCallback, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { useHttp } from '../../../services/hooks/http.hooks';
import Loader from '../../Loader/index';
import ItemsCollection from '../../ItemsCollection/index';
// import { API_URL_BASE } from '../../../configs/backendAPI';
import resources from '../../../configs/resources';
import routesEnv from '../../../configs/routesEnv';
import { getURI } from '../../../services/fetchData';
import styles from './index.module.css';

const GalleryPage = ({ locale }) => {
  const [videoProducts, setVideoProducts] = useState({});
  const [currentPage, setCurrentPage] = useState(null);
  const [marginPagesDisplayed, setMarginPagesDisplayed] = useState(1);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(1);
  const { loading, request } = useHttp();
  const { id, searchData } = useParams();
  const history = useHistory();

  const sectionVideo = 'tv';
  const typeProduct = 'top_rated';

  const fetchVideo = useCallback(async () => {
    try {
      const parameters = {
        'sectionVideo': sectionVideo,
        'id': id,
        'typeProduct': typeProduct,
        'locale': locale,
        'searchData': searchData,
        'page': currentPage,
      };
      const url = getURI(parameters);
      const fetched = await request(url, 'GET');
      setVideoProducts(fetched);
      // eslint-disable-next-line no-empty
    } catch (e) { // errors catcher already present in http.hooks.js
    }
  }, [request, sectionVideo, id, typeProduct, locale,  searchData, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    fetchVideo();
    const windowsWidth = window.innerWidth;

    if (windowsWidth < 1000) {
      setMarginPagesDisplayed(1);
      setPageRangeDisplayed(1);
    } else {
      setMarginPagesDisplayed(3);
      setPageRangeDisplayed(3);
    }
    window.scrollTo(0, 0);
  }, [fetchVideo]);

  const handlePageClick = data => {
    setCurrentPage(data.selected + 1);
  };

  if (videoProducts[resources.totalResults] === 0) {
    history.push(`${routesEnv.VIDEO_NOT_FOUND}/${locale}`);
  }

  if (loading) {
    return <>
      <Loader/>
      <ReactPaginate previousLabel='<'
                     nextLabel='>'
                     breakLabel='...'
                     pageCount={videoProducts['total_pages']} //eslint-disable-line
                     marginPagesDisplayed={marginPagesDisplayed}
                     pageRangeDisplayed={pageRangeDisplayed}
                     onPageChange={handlePageClick}
                     containerClassName={styles.pagination}
                     activeClassName={styles.active}
      />
    </>;
  }

  return (
    <>
      {!loading
      && <>
        <ItemsCollection itemsData={videoProducts.results}
                         sectionVideo={sectionVideo}
                         locale={locale}
        />
      </>
      }
      <ReactPaginate previousLabel='<'
                     nextLabel='>'
                     breakLabel='...'
                     breakClassName='break-me'
                     pageCount={videoProducts[resources.totalPages]} //eslint-disable-line
                     marginPagesDisplayed={marginPagesDisplayed}
                     pageRangeDisplayed={pageRangeDisplayed}
                     onPageChange={handlePageClick}
                     containerClassName={styles.pagination}
                     activeClassName={styles.active}
      />
    </>
  );
};

GalleryPage.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default GalleryPage;

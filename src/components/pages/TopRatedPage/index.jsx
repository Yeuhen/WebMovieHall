import React, { useState, useCallback, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { useHttp } from '../../../services/hooks/http.hooks';
import Loader from '../../Loader/index';
import ItemsCollection from '../../ItemsCollection/index';
import { API_URL_BASE } from '../../../configs/backendAPI';
import resources from '../../../configs/resources';
import styles from './index.module.css';
import routesEnv from '../../../configs/routesEnv';

const TopRatedPage = ({ product = 'movie', topRated, locale }) => {
  const [videoProducts, setVideoProducts] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [marginPagesDisplayed, setMarginPagesDisplayed] = useState(1);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(1);
  const { loading, request } = useHttp();
  const { searchData } = useParams();
  const history = useHistory();

  const fetchVideo = useCallback(async () => {
    try {
      const apiKey = process.env.REACT_APP_API_URL;
      const isSearch = () => searchData ? 'search/' : '';
      const isTopRated = () => topRated ? '/top_rated' : '';
      const searchQuery = () => searchData ? `&query=${searchData}` : '';
      const url = () => `${API_URL_BASE}/${isSearch()}${product}${isTopRated()}?api_key=${apiKey}&language=${locale}${searchQuery()}&page=${currentPage}`;
      const fetched = await request(url(product), 'GET');
      setVideoProducts(fetched);
    } catch (e) {
      console.error(e); //eslint-disable-line
    }
  }, [request, currentPage, product, searchData, topRated, locale]);

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
                         product={product}
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

TopRatedPage.propTypes = {
  product: PropTypes.string.isRequired,
  topRated: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired
};

export default TopRatedPage;

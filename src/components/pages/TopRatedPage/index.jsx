import React, {useState, useCallback, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import {useHttp} from '../../../services/hooks/http.hooks';
import Loader from '../../Loader/index';
import ItemsCollection from '../../ItemsCollection/index';
import Footer from "../../Footer";
import {API_URL_BASE} from "../../../configs/backendAPI";
import NotFoundPage from "../NotFoundPage";
import resources from "../../../configs/resources";
import styles from './index.module.css';

const TopRatedPage = ({product = 'movie', topRated}) => {
  const [videoProducts, setVideoProducts] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [marginPagesDisplayed, setMarginPagesDisplayed] = useState(1);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(1);
  const {loading, request} = useHttp();
  const {searchData} = useParams();

  const fetchVideo = useCallback(async () => {
    try {
      const apiKey = process.env.REACT_APP_API_URL;
      const isSearch = () => searchData ? 'search/' : '';
      const isTopRated = () => topRated ? '/top_rated' : '';
      const searchQuery = () => searchData ? `&query=${searchData}` : '';
      const url = () => `${API_URL_BASE}/${isSearch()}${product}${isTopRated()}?api_key=${apiKey}&language=en-US${searchQuery()}&page=${currentPage}`;
      const fetched = await request(url(product), 'GET');
      setVideoProducts(fetched);
    } catch (e) {
      console.error(e); //eslint-disable-line
    }
  }, [request, currentPage, product, searchData, topRated]);


  const handlePageClick = data => {
    setCurrentPage(data.selected + 1);
  };

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

  if (loading) {
    return <>
      <Loader/>
      <ReactPaginate previousLabel='<'
                     nextLabel='>'
                     breakLabel='...'
                     breakClassName='break-me'
                     pageCount={videoProducts['total_pages']} //eslint-disable-line
                     marginPagesDisplayed={marginPagesDisplayed}
                     pageRangeDisplayed={pageRangeDisplayed}
                     onPageChange={handlePageClick}
                     containerClassName={styles.pagination}
                     subContainerClassName='pages pagination'
                     activeClassName={styles.active}
      />
    </>
  }

  if (videoProducts[resources.totalResults] > 0) {

    return (
      <>
        {!loading
        && <>
          <ItemsCollection itemsData={videoProducts.results}
                           product={product}
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
          // subContainerClassName='pages pagination'
                       activeClassName={styles.active}
        />
        <Footer/>
      </>
    )
  }

  return (
    <>
      {!loading &&
      <>
        <NotFoundPage/>
        <Footer/>
      </>
      }
    </>
  )
};

TopRatedPage.propTypes = {
  product: PropTypes.string.isRequired,
  topRated: PropTypes.bool.isRequired,
};

export default TopRatedPage;

import React, {useState, useCallback, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import {useHttp} from '../../../services/hooks/http.hooks';
import Loader from '../../Loader/index';
import ItemsCollection from '../../ItemsCollection/index';
import {API_URL_BASE} from "../../../configs/backendAPI";

const TopRatedMoviesPage = () => {
  const [movies, setMovies] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const {loading, request} = useHttp();
  console.log('currentPage:', currentPage); // eslint-disable-line

  const apiKey = process.env.REACT_APP_API_URL;

  const fetchMovies = useCallback(async () => {
    try {
      const url = (typeVideo = 'movie') => `${API_URL_BASE}/${typeVideo}/top_rated?api_key=${apiKey}&language=en-US&page=${currentPage}`;
      const fetched = await request(url('movie'), 'GET');
      setMovies(fetched);
    } catch (e) {
      console.error(e); //eslint-disable-line
    }
  }, [request, currentPage, apiKey]);

  const handlePageClick = data => {
    setCurrentPage(data.selected + 1);
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  if (loading) {
    return <Loader/>
  }

  return (
    <>
      {!loading
      && <>
        <ItemsCollection itemsData={movies.results} />
        <ReactPaginate previousLabel='previous'
                       nextLabel='next'
                       breakLabel='...'
                       breakClassName='break-me'
                       pageCount={movies['total_pages']} //eslint-disable-line
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={handlePageClick}
                       containerClassName='pagination'
                       subContainerClassName='pages pagination'
                       activeClassName='active'
        />
      </>
      }
    </>
  )
};

export default TopRatedMoviesPage;

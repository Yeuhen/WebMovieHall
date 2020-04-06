import { useState, useCallback } from 'react';
import { API_URL_BASE } from '../configs/backendAPI';
import { useHttp } from './hooks/http.hooks';

// eslint-disable-next-line import/prefer-default-export
export const useFetchData = () => {
  const { request } = useHttp();
  const initialState = {
    'searchData': '',
    'product': '',
    'typeProduct': '',
    'locale': '',
    'page': '',
  };
    // eslint-disable-next-line consistent-return
  const fetching = useCallback(async (queryProps = initialState) => {
    console.log('props:', queryProps);

    const { searchData, product, typeProduct, locale, page } = queryProps;
    try
     {
      const apiKey = process.env.REACT_APP_API_URL;
      const isSearch = () => searchData ? 'search/' : '';
      const isTopRated = () => typeProduct ? '/top_rated' : '';
      const searchQuery = () => searchData ? `&query=${searchData}` : '';
      const url = () => `${API_URL_BASE}/${isSearch()}${product}${isTopRated()}?api_key=${apiKey}&language=${locale}${searchQuery()}&page=${page}`;
      const fetched = await request(url(product), 'GET');
      return fetched;
    } catch (e) {
      console.error(e); //eslint-disable-line
    }
  }, [request]);

  return { fetching };
};

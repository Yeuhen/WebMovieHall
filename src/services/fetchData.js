import { API_URL_BASE } from '../configs/backendAPI';

const apiKey = `?api_key=${process.env.REACT_APP_API_URL}`;

// eslint-disable-next-line import/prefer-default-export
export const getURI = (parameters) => {
  const { sectionVideo, id, typeProduct, locale, searchData, page } = parameters;

  const isId = id ? `/${id}` : '';
  const isTypeProduct = typeProduct ? `/${typeProduct}` : '';
  const isSearchQuery = searchData ? `&query=${searchData}` : '';
  const isLocal = locale ? `&language=${locale}` : '';
  const isPage = page ? `&page=${page}` : '';
  return `${API_URL_BASE}/${sectionVideo}${isId}${isTypeProduct}${apiKey}${isLocal}${isSearchQuery}${isPage}`;
};

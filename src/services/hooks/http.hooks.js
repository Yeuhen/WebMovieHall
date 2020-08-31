import {useState, useCallback} from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useCallback -что бы Реакт не уходил в рекурсию
  const request = useCallback(async (url, method = 'GET') => {
    setLoading(true);

    try {

      const response = await fetch(url, { method });
      const data = await response.json();

      if(!response.ok){
        throw new Error(data.message || 'Что то пошло не так');
      }

      setLoading(false);

      return data
    } catch (e) {
      setLoading(false);
      setError(e.message);
      throw e
    }
  }, []);

  const clearError = useCallback( () => setError(null), []);

  return { loading, request, error, clearError }
};

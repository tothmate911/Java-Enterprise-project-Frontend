import { useState, useEffect } from 'react';
import axios from 'axios';

const useApiCall = (url) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log(`sending request to ${url}`);
    setLoading(true);
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        console.log(response);
        setFetchedData(response.data);
        setLoading(false);
      });
  }, [url]);

  return [fetchedData, isLoading];
};

export default useApiCall;

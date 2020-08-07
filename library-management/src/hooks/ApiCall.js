import { useState, useEffect } from 'react';
import axios from 'axios';

const useApiCall = (url) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log(`sending request to ${url}`);

    console.log('the token is: ' + localStorage.getItem('token'));
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return [fetchedData, isLoading];
};

export default useApiCall;

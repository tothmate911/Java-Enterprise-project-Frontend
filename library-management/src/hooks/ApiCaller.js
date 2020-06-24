import { useState, useEffect } from 'react';
import axios from 'axios';

export const useApi = (url, dependencies) => {
  const [isLoading, setLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    console.log(`sending request to ${url}`);
    setLoading(true);
    axios.get(url).then((response) => {
      setFetchedData(response);
      setLoading(false);
    });
  }, [url]);

  return [isLoading, fetchedData];
};

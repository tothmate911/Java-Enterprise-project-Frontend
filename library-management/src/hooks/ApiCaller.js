import { useState, useEffect } from 'react';
import axios from 'axios';

export const getBooks = () => {
  const url = 'localhost:8080/books';

  axios.get(url);
};

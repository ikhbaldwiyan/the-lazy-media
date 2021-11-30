import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from 'utils/baseUrl';
import Categories from './Categories';

function HomeCategories({theme}) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/games/news?page=1`).then((res) => {
      const data = res.data;
      setNews(data);
    });
  }, [news]);

  return (
    <Categories data={news} title="Lazy News" theme={theme} />
  )
}

export default HomeCategories;

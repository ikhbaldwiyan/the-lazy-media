import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Categories from './Categories';

function HomeCategories() {
  const [news, setNews] = useState([]);
  const [talk, setTalk] = useState([]);
  const [latest, setLatest] = useState([]);
  const baseUrl = 'https://the-lazy-media-api.vercel.app/api';

  useEffect(() => {
    axios.get(`${baseUrl}/search?page=1`).then((res) => {
      const data = res.data;
      setLatest(data);
    });

    axios.get(`${baseUrl}/games/news?page=1`).then((res) => {
      const data = res.data;
      setNews(data);
    });

    axios.get(`${baseUrl}/games/lazy-talk?page=1`).then((res) => {
      const data = res.data;
      setTalk(data);
    });
  }, [news, talk]);

  return (
    <div>
      <Categories data={latest} title="Latest Article" />
      <Categories data={news} title="Lazy News" />
      <Categories data={talk} title="Lazy Talk" />
    </div>
  )
}

export default HomeCategories

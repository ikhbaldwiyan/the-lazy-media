import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Blog from 'parts/article/Blog';
import Categories from 'parts/Categories';
import MainLayout from 'components/layout/MainLayout';

function Article(props) {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios.get('https://the-lazy-media-api.vercel.app/api/search')
      .then((res) => {
        const data = res.data;
        setArticle(data);
      });
  }, [article]);

  return window.location.pathname !== '/article' ? (
    <div className="mt-3">
      <h3 className="mb-4">Latest Article</h3>
      <Blog data={article} />
    </div>
  ) : (
    <MainLayout title="Artikel Terbaru" {...props}>
      <h3 className="mb-4">Latest Article</h3>
      <Categories data={article} />
      <h3 className="mb-4">Article List</h3>
      <Blog data={article} />
    </MainLayout>
  );
}

export default Article;

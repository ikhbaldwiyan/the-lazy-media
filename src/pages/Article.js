import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from 'parts/Header';
import Blog from 'parts/article/Blog';
import Categories from 'parts/Categories';

function Article(props) {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    window.document.title = 'Article';
    axios.get('https://the-lazy-media-api.vercel.app/api/search')
      .then((res) => {
        const data = res.data;
        setArticle(data);
      });
  }, [article]);

  return window.location.pathname !== '/article' ? (
    <div className="mt-3">
      <div className="container mb-4">
        <h3>Latest Article</h3>
      </div>
      <Blog data={article} />
    </div>
  ) : (
    <>
      <Header {...props} />
      <div className="container">
        <Categories data={article} />
        <div className="container mb-4">
          <h3>Latest Article</h3>
        </div>
        <Blog data={article} />
      </div>
    </>
  );
}

export default Article;

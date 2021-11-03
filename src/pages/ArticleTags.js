import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MainLayout from 'components/layout/MainLayout';
import Blog from 'parts/article/Blog';
import Categories from 'parts/Categories';

function ArticleTags(props) {
  const [article, setArticle] = useState([])

  useEffect(() => {
    axios.get(`https://the-lazy-media-api.vercel.app/api/${props.tags}?page=1`)
      .then((res) => {
        const data = res.data;
        setArticle(data);
      });
  }, [props.tags]);

  return (
    <MainLayout {...props}>
      <h3>Latest {props.title} Article</h3>
      <Categories data={article} />
      <h3 className="mb-4">{props.title} List</h3>
      <Blog data={article} />
    </MainLayout>
  );
}

export default ArticleTags

import React, { useEffect } from 'react';
import ArticleTags from 'pages/ArticleTags';  

function Tech(props) {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <ArticleTags tags="tech/news" title="Tech" {...props} />
  )
}

export default Tech

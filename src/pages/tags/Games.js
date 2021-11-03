import React, { useEffect } from 'react';
import ArticleTags from 'pages/ArticleTags';

function Games(props) {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <ArticleTags tags="games" title="Games" {...props} />
  )
}

export default Games

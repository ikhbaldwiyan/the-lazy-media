import React from 'react';
import ArticleTags from 'pages/ArticleTags';

function Games(props) {
  return (
    <div>
      <ArticleTags tags="games" title="Games" {...props} />
    </div>
  )
}

export default Games

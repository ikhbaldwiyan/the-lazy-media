import React from 'react';
import ArticleTags from 'pages/ArticleTags';  

function Tech(props) {
  return (
    <div>
      <ArticleTags tags="tech/news" title="Tech" {...props} />
    </div>
  )
}

export default Tech

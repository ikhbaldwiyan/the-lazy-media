import React from 'react';
import Article from 'pages/Article'
import FeaturedArticles from 'parts/FeaturedArticles';
import HomeCategories from 'parts/HomeCategories';
import MainLayout from 'components/layout/MainLayout';

function Home(props) {
  return (
    <MainLayout title="Home" {...props}>
      <div className="container">
        <FeaturedArticles />
        <Article {...props} />
        <HomeCategories theme={props.theme} />
      </div>
    </MainLayout>
  );
}

export default Home;

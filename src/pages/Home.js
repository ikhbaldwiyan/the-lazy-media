import React from 'react';
import Header from 'parts/Header';
import Article from 'pages/Article'
import FeaturedArticles from 'parts/FeaturedArticles';
import HomeCategories from 'parts/HomeCategories';
import Footer from 'parts/Footer';

function Home(props) {
  return (
    <div>
      <Header {...props} />
      <div className="container">
        <FeaturedArticles />
        <HomeCategories />
        <Article {...props} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

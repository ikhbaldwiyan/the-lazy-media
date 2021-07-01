import React from 'react';
import Header from 'parts/Header';
import HomeArticles from 'parts/HomeArticles';
import Article from 'pages/Article'
import HomeCategories from 'parts/HomeCategories';
import Footer from 'parts/Footer';

function Home(props) {
  return (
    <div>
      <Header {...props} />
      <div className="container">
        <HomeArticles />
        <HomeCategories />
        <Article {...props} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from 'pages/Home';
import DetailArticle from 'pages/DetailArticle';
import Article from 'pages/Article';
import Games from 'pages/tags/Games';
import Tech from 'pages/tags/Tech';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/article" component={Article} />
        <Route path="/detail/:id" component={DetailArticle} />
        <Route path="/games" component={Games} />
        <Route path="/tech" component={Tech} />
      </Router>
    </div>
  );
}

export default App;

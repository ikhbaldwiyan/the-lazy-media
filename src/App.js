import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from 'pages/Home';
import DetailPage from 'pages/DetailPage';
import Article from 'pages/Article';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/properties/:id" component={DetailPage} />
        <Route path="/article" component={Article} />
      </Router>
    </div>
  );
}

export default App;

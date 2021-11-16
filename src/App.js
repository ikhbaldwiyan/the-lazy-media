import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'utils/darkmode/theme'; 
import { GlobalStyles } from 'utils/darkmode/global';
import { useDarkMode } from 'utils/darkmode/useDarkMode';

import Home from 'pages/Home';
import DetailArticle from 'pages/DetailArticle';
import Article from 'pages/Article';
import Games from 'pages/tags/Games';
import Tech from 'pages/tags/Tech';

function App(props) {
  const [theme, toggleTheme] = useDarkMode();
  props = {theme, toggleTheme}

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Route exact path="/" component={() => <Home {...props} /> } exact />
        <Route path="/article" component={() => <Article {...props} /> } />
        <Route path="/detail/:id" component={() => <DetailArticle {...props} /> } />
        <Route path="/games" component={() => <Games {...props} /> } />
        <Route path="/tech" component={() => <Tech {...props} /> } />
      </Router>
    </ThemeProvider>
  );
}

export default App;

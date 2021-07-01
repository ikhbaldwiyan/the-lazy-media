import React, { Component } from "react";
import articleList from "json/articleList.json";

import Header from "parts/Header";
import Blog from "parts/article/Blog";

export default class Article extends Component {
  componentDidMount() {
    window.document.title = "Article";
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <div className="container mb-4">
          <h2 className="text-gray-700">Latest Article</h2>
        </div>
        <Blog data={articleList.article} />
      </>
    );
  }
}

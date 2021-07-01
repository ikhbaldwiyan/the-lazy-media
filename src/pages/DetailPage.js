import React, { Component } from 'react';
import itemDetail from 'json/itemDetails.json';

import Header from 'parts/Header';
import PageTitle from 'parts/detail/PageTitle';
import Content from 'parts/detail/Content';
import Categories from 'parts/Categories';
import Footer from 'parts/Footer';

export default class DetailPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Staycation | Detail Page'
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" }
    ];

    return (
      <>
        <Header {...this.props} />
          <PageTitle breadcrumb={breadcrumb} data={itemDetail}  />
          <Content />
          <Categories data={itemDetail.categories} />
        <Footer />
      </>
    )
  }
}

import React, { Component } from 'react'

import Header from 'parts/Header'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Footer from 'parts/Footer'

import landingPage from 'json/landingPage.json'

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    document.title = 'Staycation'
  }

  render() {
    return (
      <>
        <Header {...this.props} />
          <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
          <Categories data={landingPage.categories} />
        <Footer />
      </>
    )
  }
}

import React from 'react';
import Button from 'elements/Button';
import IconText from './IconText';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{width: 350}}>
            <IconText />
            <p className="brand-tagline ml-1">
              The Lazy Media is your games, technology, entertainment, and gadgets website. <br />
              We provide you with the latest breaking news and videos straight from our content creators.
            </p>
          </div>
          <div className="col-4 col-lg-2 mr-5">
            <h6 className="mt-2 text-gray-300">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/article">
                  Articles
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/games">
                  Games
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/tech">
                  Tech News
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <h6 className="mt-2 text-gray-300">Contact Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="mailto:support@staycation.id" isExternal>
                  buisnes@thelazy.media
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="tel:+622122081996" isExternal>
                  021 - 2208 - 1996
                </Button>
              </li>
              <li className="list-group-item">
                <span>The Lazy Media, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2021 • All rights reserved • The Lazy Media - @Inzoid
          </div>
        </div>
      </div>
    </footer>
  )
}

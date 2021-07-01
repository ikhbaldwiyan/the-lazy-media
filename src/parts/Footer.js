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
            <p className="brand-tagline">
              We kaboom your beauty holiday <br/>
              instantly and memorable.
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/booking">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Contact Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="mailto:support@staycation.id" isExternal>
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="tel:+622122081996" isExternal>
                  021 - 2208 - 1996
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Bandung</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2021 • All rights reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  )
}

import React from 'react';
import Button from 'elements/Button';
import BrandIcon from 'parts/IconText';

import { AiFillHome } from "react-icons/ai";
import { RiArticleFill } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { GoDeviceDesktop } from "react-icons/go";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  const iconHome = {marginBottom: 4};

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="">
                  <AiFillHome style={iconHome} /> Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/article")}`}>
                <Button className="nav-link" type="link" href="/article">
                  <RiArticleFill style={iconHome} /> Article
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/games")}`}>
                <Button className="nav-link" type="link" href="/games">
                  <IoGameController style={iconHome} />  Games
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/tech")}`}>
                <Button className="nav-link" type="link" href="/tech">
                  <GoDeviceDesktop style={iconHome} /> Tech
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

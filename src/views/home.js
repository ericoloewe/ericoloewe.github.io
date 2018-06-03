/**
 * Home Page
 */
import React from 'react'
import { LayoutView } from './shared/layout';
import { Icons } from '../svgs';

export default class Home extends React.Component {
  render() {
    return (
      <LayoutView
        className="container home"
        customBottom={<script type="text/javascript" src="~scripts/home.bundle.js" />}
        customHead={
          <React.Fragment>
            <title>Home - Érico de Souza Loewe</title>
            <meta name="author" content="Érico de Souza Loewe" />
            <meta name="description" content="A page about me" />
            <meta name="keywords" content="Érico,Loewe,About,Me,HTML,CSS,JavaScript" />
            <link rel="stylesheet" type="text/css" href="~styles/home.css" />
          </React.Fragment>
        }>
        <div className="profile-picture">
          <img src='~images/profile.jpg' alt="My profile photo" />
        </div>
        <div className="profile-info">
          <h1 className="name">Érico de Souza Loewe</h1>
          <p className="description">Welcome to my website 😎</p>
          <div className="links">
            <a href="https://github.com/ericoloewe" title="Github link">
              <Icons.Github />
            </a>
            <a href="https://www.linkedin.com/in/érico-loewe-2302aba0" title="Linkedin link">
              <Icons.Linkedin />
            </a>
            <a href="mailto:ericoloewe@gmail.com" title="Email link">
              <Icons.Mail />
            </a>
            <a href="https://www.instagram.com/ericoloewe/" title="Instagram link">
              <Icons.Instagram />
            </a>
            <a href="https://www.facebook.com/erico.souzaloewe" title="Facebook link">
              <Icons.Facebook />
            </a>
          </div>
        </div>
      </LayoutView>
    );
  }
}

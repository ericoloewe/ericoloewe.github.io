/**
 * Home Page
 */
import React from 'react'
import { LayoutView } from './shared/layout';

export default class Home extends React.Component {
  render() {
    return (
      <LayoutView className="container home" customBottom={<script type="text/javascript" src="~scripts/home.bundle.js" />} customHead={<link rel="stylesheet" type="text/css" href="~styles/home.css" />}>
        <div className="profile-picture">
          <img src='~images/profile.jpg' alt="My profile photo" />
        </div>
        <div className="profile-info">
          <h1 className="name">Érico de Souza Loewe</h1>
          <p className="description">Welcome to my website 😎</p>
          <div className="links">
          </div>
        </div>
      </LayoutView>
    );
  }
}

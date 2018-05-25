/**
 * Home Page
 */
import React from 'react'
import { LayoutView } from './shared/layout';

export default class Home extends React.Component {
  render() {
    return (
      <LayoutView>
        <main>
          <h1>Welcome to my website 😎</h1>
        </main>
      </LayoutView>
    );
  }
}

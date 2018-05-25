/**
 * Layout
 */
import React from 'react'

export class LayoutView extends React.Component {
  render() {
    return (
      <html>
        {this.renderHead()}
        <body>
          {this.props.children}
          {this.renderBottom()}
        </body>
      </html>
    )
  }

  renderHead() {
    return (
      <head>
      </head>
    )
  }

  renderBottom() {
    return (
      <React.Fragment/>
    )
  }
}

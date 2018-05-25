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
    const styles = [
      { source: '/dist/styles/vendor.css' },
      { source: '/dist/styles/common.css' }
    ]

    return (
      styles.map(s => (
        <link rel="stylesheet" type="text/css" href={s.source} />
      ))
    )

    return (
      <head>
        {styles}
      </head>
    )
  }

  renderBottom() {
    const scripts = [
      { source: '/dist/scripts/vendor.bundle.js' }
    ]

    return (
      scripts.map(s => (
        <script type="text/javascript" src={s.source} />
      ))
    )
  }
}

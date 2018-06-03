/**
 * Layout
 */
import React from 'react'
import { GoogleAnalytics, GoogleFirebase } from '../components'

export class LayoutView extends React.Component {
  render() {
    const props = Object.assign({}, this.props)

    delete props.customHead
    delete props.customBottom

    return (
      <html>
        {this.renderHead()}
        <body>
          <main {...props}>
            {props.children}
          </main>
          {this.renderBottom()}
        </body>
      </html>
    )
  }

  renderHead() {
    const { customHead } = this.props
    const styles = [
      { source: '~styles/common.css' },
      { source: '~styles/vendor.css' }
    ]

    return (
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {styles.map(s => (
          <link key={s.source} rel="stylesheet" type="text/css" href={s.source} />
        ))}
        {customHead}
        <GoogleAnalytics />
      </head>
    )
  }

  renderBottom() {
    const { customBottom } = this.props
    const scripts = [
      { source: '~scripts/vendor.bundle.js' },
      { source: '~scripts/common-modules.bundle.js' }
    ]

    return (
      <React.Fragment>
        <GoogleFirebase />
        <span dangerouslySetInnerHTML={{ __html: GoogleFirebase }} />
        {scripts.map(s => (
          <script key={s.source} type="text/javascript" src={s.source} />
        ))}
        {customBottom}
      </React.Fragment>
    )
  }
}

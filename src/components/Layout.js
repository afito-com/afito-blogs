import React from 'react'
import { Link } from 'gatsby'
import Footer from './Footer.js'
import Header from './Header.js'
import './Layout.scss'

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div>
        <Header />
        <div className="Layout">
          {children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout

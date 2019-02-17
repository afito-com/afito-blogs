import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="row">
            <div className="col--xs--12">
              <h1 style={{ fontSize: '56px' }}>404</h1>
              <h5>Not Found</h5>
              <p>You just hit a route that doesn&#39;t exist... :(</p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
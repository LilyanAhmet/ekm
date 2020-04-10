import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default class index extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SEO title="Home" />
        </Layout>
      </div>
    )
  }
}

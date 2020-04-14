import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
export default class referenceBox extends Component {
  render() {
    return (
      <Layout>
        <SEO title="unternehmercoaching" />
        <MDBContainer size="lg">
          <MDBRow></MDBRow>
        </MDBContainer>
      </Layout>
    )
  }
}

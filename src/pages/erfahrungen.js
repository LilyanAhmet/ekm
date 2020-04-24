import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import { Nav, Tab, Col, Row, Container } from "react-bootstrap"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

/* resources */
import Image from "../images/experience.svg"
class erfahrungen extends React.Component {
  render() {
    const graphData = this.props.data
    return (
      <Layout contactData={graphData.contactInfo}>
        <SEO title="erfahrungen" />
        <div className="experience desktop">
          <MDBContainer size="lg">
            <MDBRow>
              <MDBCol>
                <h1 className="borderimg">
                  {" "}
                  {graphData.allContentfulSinglePage.edges[0].node.title}
                </h1>
              </MDBCol>
            </MDBRow>
            <MDBRow className="margin-p-40">
              <MDBCol md={6} sm={12}>
                <p>
                  {graphData.allContentfulSinglePage.edges[0].node.text1.text1}
                </p>
                <p>
                  {graphData.allContentfulSinglePage.edges[0].node.text2.text2}
                </p>
              </MDBCol>
              <MDBCol md={6} sm={12}>
                <img
                  className="img-fluid"
                  src={
                    graphData.allContentfulSinglePage.edges[0].node.image.fluid
                      .src
                  }
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <div className="experience mobile">
          <MDBContainer size="lg">
            <MDBRow>
              <MDBCol>
                <h1 className="borderimg">
                  {" "}
                  {graphData.allContentfulSinglePage.edges[0].node.title}
                </h1>
              </MDBCol>
            </MDBRow>
            <MDBRow className="margin-p-40">
             
              <MDBCol md={6} sm={12}>
                <img
                  className="img-fluid"
                  src={
                    graphData.allContentfulSinglePage.edges[0].node.image.fluid
                      .src
                  }
                />
              </MDBCol>
              <MDBCol md={6} sm={12}>
                <p>
                  {graphData.allContentfulSinglePage.edges[0].node.text1.text1}
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </Layout>
    )
  }
}
export default erfahrungen

export const query = graphql`
  {
    allContentfulSinglePage(
      filter: { id: { eq: "a8f28c02-dbb4-56c1-b960-83f36a4dbe49" } }
    ) {
      edges {
        node {
          title
         text1 {
          text1
          }
           text2 {
          text2
          }
          image {
            fluid {
              src
              base64
              srcSet
              srcWebp
            }
          }
        }
      }
    }
    contactInfo:contentfulCompanyInfo {
      phoneNumber1
      phoneNumber2
      eMailAddresse
    }
  }
`

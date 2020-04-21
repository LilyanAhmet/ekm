import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

/* resources */
import Line from "../images/time-line.png"
import { graphql } from "gatsby"
class ueberEkm extends React.Component {
  render() {
    const graphData = this.props.data
    return (
      <Layout>
        <SEO title="ueberEkm" />
        <div className="ueber-ekm desktop">
          <MDBContainer size="lg">
            <MDBRow className="margin-p-40">
              <MDBCol md={7} sm={12}>
                <MDBRow>
                  <MDBCol>
                    <h1 className="borderimg">
                      {graphData.allContentfulSinglePage.edges[0].node.title}
                    </h1>
                  </MDBCol>
                </MDBRow>
                <p>
                  {graphData.allContentfulSinglePage.edges[0].node.text.text}
                </p>
              </MDBCol>
              <MDBCol md={5} sm={12}>
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
          <MDBContainer fluid className="bggray geschichte">
            <MDBContainer>
            <MDBRow>
              <MDBCol md={12}>
                <h1 className="borderimg">Geschichte</h1>
              </MDBCol>
            </MDBRow>
              <MDBRow className="margin-p-60">
                <MDBCol md={4} className="time">
                  <div className="box">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                </MDBCol>
                <MDBCol md={4} className="time">
                  <div className="box">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <img style={{ width: "100%" }} src={Line} />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md={4} className="time">
                  <div className="box">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                </MDBCol>
                <MDBCol md={4} className="time">
                  <div className="box">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                </MDBCol>
                <MDBCol md={4} className="time">
                  <div className="box">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBContainer>
        </div>
        <div className="ueber-ekm mobile">
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
              <MDBCol md={5} sm={12}>
                <img
                  className="img-fluid"
                  src={
                    graphData.allContentfulSinglePage.edges[0].node.image.fluid
                      .src
                  }
                />
              </MDBCol>
              <MDBCol md={7} sm={12}>
                <p>
                  {graphData.allContentfulSinglePage.edges[0].node.text.text}
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </Layout>
    )
  }
}

export default ueberEkm
export const query = graphql`
  {
    allContentfulSinglePage(
      filter: { id: { eq: "a2332606-59a5-5e89-9921-361285392ba6" } }
    ) {
      edges {
        node {
          id
          title
          text {
            text
            childMarkdownRemark {
              html
            }
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
  }
`

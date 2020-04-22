import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact"

/* resources */
import Line from "../images/time-line.png"
import { graphql } from "gatsby"
import LineOne from "../images/1m.png"
import LineTwo from "../images/2m.png"
import LineThree from "../images/3m.png"
import LineFour from "../images/4m.png"
import LineFive from "../images/5m.png"
import LineSix from "../images/6m.png"

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
                  {graphData.allContentfulSinglePage.edges[0].node.text1.text1}
                </p>
                <p>
                  {graphData.allContentfulSinglePage.edges[0].node.text2.text2}
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
                  {graphData.allContentfulSinglePage.edges[0].node.text1.text1}
                </p>
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
            </MDBContainer>
            <MDBRow className=" margin-p-60">

                <MDBCarousel
                  activeItem={1}
                  length={5}
                  slide={true}
                  showControls={false}
                  showIndicators={true}
                  multiItem
                >
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId={1} className="time">
                      <img src={LineOne} />
                      <div className="box ">
                        <p>
                          One are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </p>
                      </div>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={2} className="time">
                      <img src={LineTwo} />
                      <div className="box">
                        <p>
                          Two are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </p>
                      </div>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={3} className="time">
                      <img src={LineThree} />
                      <div className="box">
                        <p>
                          Three are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </p>
                      </div>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={4} className="time">
                      <img src={LineFour} />
                      <div className="box">
                        <p>
                          Four are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </p>
                      </div>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId={5} className="time">
                      <img src={LineSix} />
                      <div className="box">
                        <p>
                          Five are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </p>
                      </div>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>

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
          image {
            fluid {
              src
              base64
              srcSet
              srcWebp
            }
          }
          text1 {
            text1
          }
          text2 {
            text2
          }
        }
      }
    }
  }
`

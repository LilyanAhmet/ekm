import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation,
  MDBBox,
} from "mdbreact"

/* components */
import Newsletter from "../components/sharedComponents/newsLetter"
/* resources */
import Bg from "../images/professor-illus.png"
import Dienstleistungen from "../images/Dienstleistungen.svg"
import { graphql } from "gatsby"

export default class index extends Component {
  render() {
    const graphData = this.props.data
    console.log(graphData)
    return (
      <div>
        <Layout trans={true}>
          <SEO title="Home" />
          <div className="promo desktop">
            <MDBView>
              <MDBMask className="white-text gradient" />
              <MDBContainer
                style={{
                  height: "100%",
                  width: "100%",
                  paddingTop: "6rem",
                  paddingBottom: "12rem",
                }}
                className="d-flex justify-content-center white-text align-items-center padding-p-bottom-10"
              >
                <MDBRow>
                  <MDBCol
                    md="5"
                    className="text-center text-md-left mt-xl-5 mb-5"
                  >
                    {/*<MDBBox className="box">
                      <MDBBtn
                        rounded
                        floating
                        color="white"
                        gradient="aqua"
                        rounded
                        href={graphData.allContentfulPost.edges[0].node.slug}
                      >
                        NEU
                      </MDBBtn>
                      <p>{graphData.allContentfulPost.edges[0].node.title}</p>
                    </MDBBox> */}
                    <MDBAnimation type="fadeInLeft" delay=".3s">
                      <h1 className="h1-responsive font-weight-bold mt-sm-5">
                        {graphData.contentfulHomePage.title}
                      </h1>
                      <h6 className="mb-4">
                        {graphData.contentfulHomePage.subtitle}
                      </h6>
                      <a href="/karrieremanagament">
                        <MDBBtn color="white" gradient="aqua">
                          Mehr Erfahren
                        </MDBBtn>
                      </a>
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="7" xl="7" className="mt-xl-7">
                    <MDBAnimation type="fadeInRight" delay=".3s">
                      <img src={Bg} alt="" className="img-fluid" />
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBView>
          </div>
          <div className="promo mobile">
            <MDBView>
              <MDBMask className="white-text gradient" />
              <MDBContainer
                style={{
                  height: "100%",
                  width: "100%",
                  paddingTop: "4rem",
                  paddingBottom: "4rem",
                }}
                className="d-flex justify-content-center white-text align-items-center padding-p-bottom-10"
              >
                <MDBRow>
                  <MDBCol md="12" xl="12" className="mt-xl-12">
                    <MDBAnimation type="fadeInRight" delay=".3s">
                      <img src={Bg} alt="" className="img-fluid" />
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol
                    md="12"
                    className="text-center text-md-left mt-xl-12 mb-12"
                  >
                    <MDBAnimation type="fadeInLeft" delay=".3s">
                      <h1 className="h1-responsive font-weight-bold mt-sm-5">
                        {graphData.contentfulHomePage.title}
                      </h1>
                      <h6 className="mb-4">
                        {graphData.contentfulHomePage.subtitle}
                      </h6>
                      <MDBBtn color="white" gradient="aqua">
                        Mehr Erfahren
                      </MDBBtn>
                    </MDBAnimation>
                    {/* <MDBBox className="box">
                      <MDBBtn
                        rounded
                        floating
                        color="white"
                        gradient="aqua"
                        rounded
                        href={graphData.allContentfulPost.edges[0].node.slug}
                      >
                        NEU
                      </MDBBtn>
                      <p>Lorem ipsum dolor sit amet…</p>
                      <a>Mehr erfahren hier →</a>
                    </MDBBox>*/}
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBView>
          </div>
          <div className="home desktop">
            <MDBContainer size="lg">
              <MDBRow>
                <MDBCol>
                  <h1 className="borderimg">
                    {" "}
                    {graphData.contentfulHomePage.section1Title}
                  </h1>
                </MDBCol>
              </MDBRow>
              <MDBRow className="details">
                <MDBCol md={7} sm={12}>
                  <h2>{graphData.contentfulHomePage.section1title2}</h2>
                  <p>{graphData.contentfulHomePage.section1title2subtitle}</p>
                  <MDBRow>
                    <MDBCol>
                      <div className="bottom">
                        <img
                          className="img-fluid "
                          src={
                            graphData.contentfulHomePage.service1icon.fluid.src
                          }
                        />
                        <h3>{graphData.contentfulHomePage.service1title}</h3>
                        <p>{graphData.contentfulHomePage.service1subtitle} </p>
                        <a href="/unternehmerberatung">DIENSTE DURCHSUCHEN →</a>
                      </div>
                    </MDBCol>
                    <MDBCol>
                      <div className="bottom">
                        <img
                          className="img-fluid "
                          src={
                            graphData.contentfulHomePage.service2icon.fluid.src
                          }
                        />
                        <h3>{graphData.contentfulHomePage.service2title}</h3>
                        <p>{graphData.contentfulHomePage.service2subtitle} </p>
                        <a href="/karrieremanagament">DIENSTE DURCHSUCHEN →</a>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol md={5} sm={12}>
                  <img src={Dienstleistungen} className="img-fluid" />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
          <div className="home mobile">
            <MDBContainer size="lg">
              <MDBRow>
                <MDBCol>
                  <h1 className="borderimg">
                    {" "}
                    {graphData.contentfulHomePage.section1Title}
                  </h1>
                </MDBCol>
              </MDBRow>
              <MDBRow className="details">
                <MDBCol md={5} sm={12}>
                  <img src={Dienstleistungen} className="img-fluid" />
                </MDBCol>
                <MDBCol md={7} sm={12}>
                  <h2>{graphData.contentfulHomePage.section1title2}</h2>
                  <p>{graphData.contentfulHomePage.section1title2subtitle}</p>
                  <MDBRow>
                    <MDBCol>
                      <div className="bottom">
                        <img
                          className="img-fluid "
                          src={
                            graphData.contentfulHomePage.service1icon.fluid.src
                          }
                        />
                        <div className="text">
                          <h3>{graphData.contentfulHomePage.service1title}</h3>
                          <p>
                            {graphData.contentfulHomePage.service1subtitle}{" "}
                          </p>
                          <a>DIENSTE DURCHSUCHEN →</a>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol>
                      <div className="bottom">
                        <img
                          className="img-fluid "
                          src={
                            graphData.contentfulHomePage.service2icon.fluid.src
                          }
                        />
                        <div className="text">
                          <h3>{graphData.contentfulHomePage.service2title}</h3>
                          <p>
                            {graphData.contentfulHomePage.service2subtitle}{" "}
                          </p>
                          <a>DIENSTE DURCHSUCHEN →</a>
                        </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
          <MDBContainer fluid className="referenzen desktop">
            <MDBContainer>
              <MDBRow>
                <MDBCol md={12}>
                  <h1 className="borderimg">
                    {graphData.contentfulHomePage.referencentitle}
                  </h1>
                </MDBCol>
              </MDBRow>
              <div className="d-flex justify-content-end">
                <div className="p-2 col-example text-left">
                  <img
                    className="img-fluid margin-m-bottom-50"
                    src={
                      graphData.allContentfulReferenzenHomepage.edges[1].node
                        .photo.fluid.src
                    }
                  />
                </div>
                <div className="p-2 col-example text-left">
                  <div className="margin-p-right-30"></div>
                </div>
              </div>
              <div className="d-flex justify-content-start">
                <div className="p-2 col-example text-left">
                  <img
                    className="img-fluid"
                    src={
                      graphData.allContentfulReferenzenHomepage.edges[0].node
                        .photo.fluid.src
                    }
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="p-2 col-example text-left">
                  <div className="center">
                    <h4>{graphData.contentfulHomePage.referencentitle2}</h4>
                    <a href="/referenzen">
                      <MDBBtn color="white">Mehr Erfahren</MDBBtn>
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="p-2 col-example text-left">
                  <img
                    className="img-fluid"
                    src={
                      graphData.allContentfulReferenzenHomepage.edges[2].node
                        .photo.fluid.src
                    }
                  />
                </div>

                <div className="p-2 col-example text-left">
                  <img
                    className="img-fluid"
                    src={
                      graphData.allContentfulReferenzenHomepage.edges[3].node
                        .photo.fluid.src
                    }
                  />
                </div>
              </div>
              <div className="d-flex justify-content-around">
                <div className="p-2 col-example text-left">
                  <img
                    className="img-fluid"
                    src={
                      graphData.allContentfulReferenzenHomepage.edges[4].node
                        .photo.fluid.src
                    }
                  />
                </div>
              </div>
            </MDBContainer>

            {/* <Newsletter />*/}
          </MDBContainer>
          <MDBContainer fluid className="referenzen mobile">
            <MDBContainer>
              <MDBRow>
                <MDBCol md={12}>
                  <h1 className="borderimg">
                    {graphData.contentfulHomePage.referencentitle}
                  </h1>
                </MDBCol>
              </MDBRow>
              <div className="d-flex justify-content-between">
                <div className="p-2 col-example text-left">
                  <img
                    className="img-fluid"
                    src={
                      graphData.allContentfulReferenzenHomepage.edges[2].node
                        .photo.fluid.src
                    }
                  />
                </div>
              </div>
              <div className="d-flex justify-content-around">
                <div className="p-2 col-example text-left">
                  <img
                    className="img-fluid"
                    src={
                      graphData.allContentfulReferenzenHomepage.edges[4].node
                        .photo.fluid.src
                    }
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="p-2 col-example text-left">
                  <div className="center">
                    <h4>{graphData.contentfulHomePage.referencentitle2}</h4>
                    <a href="/referenzen">
                      <MDBBtn color="white">Mehr Erfahren</MDBBtn>
                    </a>
                  </div>
                </div>
              </div>
            </MDBContainer>
            {/* <Newsletter />*/}
          </MDBContainer>
        </Layout>
      </div>
    )
  }
}
export const query = graphql`
  {
    contentfulHomePage {
      title
      subtitle
      mainimage {
        fluid {
          src
          base64
          sizes
        }
      }
      section1Title
      section1title2
      section1title2subtitle
      service1title
      service1subtitle
      service1icon {
        fluid {
          src
          base64
          sizes
        }
      }
      service2title
      service2subtitle
      service2icon {
        fluid {
          src
          sizes
          base64
        }
      }
      referencentitle
      referencentitle2
    }
    allContentfulPost(sort: { order: DESC, fields: createdAt }, limit: 1) {
      edges {
        node {
          title
          slug
        }
      }
    }
    allContentfulReferenzenHomepage {
      edges {
        node {
          text
          photo {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

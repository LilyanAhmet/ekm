import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact"

/*components */
import ReferenceBox from "../components/sharedComponents/referenceBox"

/* resources */
import Logo from "../images/ref-logo.png"
class referenzen extends React.Component {
  createRefenceBox = array => {
    let createRefenceBox = []
    for (let i = 0; i < array.length; i++) {
      createRefenceBox.push(
        <MDBCol md={4} sm={12}>
          <ReferenceBox
            name={array[i].node.name}
            title={array[i].node.titleAndCompany}
            img={array[i].node.image.fluid.src}
            description={array[i].node.text.text}
          />
        </MDBCol>
      )
    }
    return createRefenceBox
  }

  createRefenceBoxResponsive = array => {
    let createRefenceBox = []
    for (let i = 0; i < array.length; i++) {
      createRefenceBox.push(
        <MDBCarouselItem itemId={i + 1}>
          <ReferenceBox
            name={array[i].node.name}
            title={array[i].node.titleAndCompany}
            img={array[i].node.image.fluid.src}
            description={array[i].node.text.text}
          />
        </MDBCarouselItem>
      )
    }
    return createRefenceBox
  }
  render() {
    const graphData = this.props.data
    console.log(graphData)
    return (
      <Layout>
        <SEO title="unternehmercoaching" />
        <div className="reference-block">
          <MDBContainer size="lg">
            <MDBRow>
              <MDBCol md={12}>
                <h1 className="borderimg">Referenzen</h1>
              </MDBCol>
              <MDBCol md={12}>
                <h2>Du bist in einer guten Hand</h2>
                <p>
                  Millionen von Menschen auf der ganzen Welt haben EKM bereits
                  als Ort gewählt, an dem ihr Traum wahr wird.
                </p>
              </MDBCol>
            </MDBRow>
            <div className="desktop">
              <MDBRow>
                {this.createRefenceBox(graphData.allContentfulReferenzen.edges)}
              </MDBRow>
            </div>
            <div className="mobile">
              <MDBCarousel
                activeItem={1}
                length={6}
                slide={true}
                showControls={false}
                showIndicators={true}
                multiItem
              >
                <MDBCarouselInner>
                  {this.createRefenceBoxResponsive(
                    graphData.allContentfulReferenzen.edges
                  )}
                </MDBCarouselInner>
              </MDBCarousel>
            </div>

            <div className="padding-p-top-10 scrolly mobile">
              <img className="img-fluid" src={Logo} />

              <img className="img-fluid" src={Logo} />

              <img className="img-fluid" src={Logo} />

              <img className="img-fluid" src={Logo} />

              <img className="img-fluid" src={Logo} />
            </div>
            <div className="padding-p-top-10 scrolly desktop">
              <MDBRow>
                <MDBCol>
                  <img className="img-fluid" src={Logo} />
                </MDBCol>
                <MDBCol>
                  <img className="img-fluid" src={Logo} />
                </MDBCol>
                <MDBCol>
                  <img className="img-fluid" src={Logo} />
                </MDBCol>
                <MDBCol>
                  <img className="img-fluid" src={Logo} />
                </MDBCol>
                <MDBCol>
                  <img className="img-fluid" src={Logo} />
                </MDBCol>
              </MDBRow>
            </div>
          </MDBContainer>
        </div>
      </Layout>
    )
  }
}
export default referenzen

export const query = graphql`
  {
    allContentfulReferenzen {
      edges {
        node {
          name
          titleAndCompany
          text {
            text
          }
          image {
            fluid(maxWidth: 42, maxHeight: 46) {
              src
            }
          }
        }
      }
    }
  }
`

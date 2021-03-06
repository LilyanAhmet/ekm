import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
} from "mdbreact"

/*components */
import Description from "../components/sharedComponents/description"
import ServiceShort from "../components/sharedComponents/serviceShort"
import ServiceLong from "../components/sharedComponents/serviceLong"
/* resources */
import karImage from "../images/Unternehmercoaching.svg"

class Unternehmerberatung extends React.Component {
  createServiceLong = array => {
    let createServiceLong = []
    for (let i = 0; i < array.length; i++) {
      createServiceLong.push(
        <ServiceLong
          img={array[i].image.fluid.src}
          icon={array[i].icon.fluid.src}
          title={array[i].title}
          shortDescription={array[i].description}
          bulletPoints={array[i].bulletPoints}
          left={array[i].imageleft}
        />
      )
    }
    return createServiceLong
  }
  createServiceLongResponsive = array => {
    let createServiceLong = []
    for (let i = 0; i < array.length; i++) {
      createServiceLong.push(
        <MDBCarouselItem itemId={i + 1}>
          <ServiceLong
            img={array[i].image.fluid.src}
            icon={array[i].icon.fluid.src}
            title={array[i].title}
            shortDescription={array[i].description}
            bulletPoints={array[i].bulletPoints}
            left={true}
          />
        </MDBCarouselItem>
      )
    }
    return createServiceLong
  }
  createServiceShort = array => {
    let createServiceShort = []
    for (let i = 0; i < array.length; i++) {
      createServiceShort.push(
        <MDBCol md={6} sm={12}>
          <ServiceShort
            icon={array[i].icon.fluid.src}
            title={array[i].title}
            desciption={array[i].description}
          />
        </MDBCol>
      )
    }
    return createServiceShort
  }
  render() {
    const graphData = this.props.data
    console.log(graphData)
    return (
      <Layout contactData={graphData.contactInfo}>
        <SEO title="unternehmercoaching" />
        <Description
          title={graphData.allContentfulServicePage.edges[0].node.title}
          description={
            graphData.allContentfulServicePage.edges[0].node.text.text
          }
          img={karImage}
        />
        <MDBContainer size="lg">
          <MDBRow>
            {this.createServiceShort(
              graphData.allContentfulServicePage.edges[0].node.serviceShort
            )}
          </MDBRow>
        </MDBContainer>
        <MDBContainer fluid className="bggray">
          <div className="desktop">
            {this.createServiceLong(
              graphData.allContentfulServicePage.edges[0].node.serviceLong
            )}
          </div>
          <div className="mobile">
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={false}
            >
              <MDBCarouselInner>
                {this.createServiceLongResponsive(
                  graphData.allContentfulServicePage.edges[0].node.serviceLong
                )}
              </MDBCarouselInner>
            </MDBCarousel>
          </div>
        </MDBContainer>
      </Layout>
    )
  }
}
export default Unternehmerberatung

export const query = graphql`
{
  allContentfulServicePage(filter:  { title: { eq:"Unternehmerberatung" }  }) {
    edges {
      node {
        title
        text {
          text
        }
        serviceShort {
          title
          description
          icon {
            fluid {
              src
            }
          }
        }
        serviceLong {
          ... on ContentfulServiceLong {
            title
            imageleft
            image {
              fluid {
                src
              }
            }
            icon {
              fluid {
                base64
                src
                srcSet
              }
            }
            subtitle
          }
          bulletPoints {
            title
            subtitle
          }
        }
      }
    }
  }
  contactInfo: contentfulCompanyInfo {
    phoneNumber1
    phoneNumber2
    eMailAddresse
  }
}

`

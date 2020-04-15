import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from "mdbreact"
/*components */
import Description from "../components/sharedComponents/description"
import ServiceShort from "../components/sharedComponents/serviceShort"
import ServiceLong from "../components/sharedComponents/serviceLong"
/* resources */
import DescImage from "../images/Unternehmercoaching.svg"
import IconOne from "../images/icon1.svg"
import IconTwo from "../images/icon2.svg"
import IconThree from "../images/icon3.svg"
import IconFour from "../images/icon4.svg"

import LongImg from "../images/longImg.svg"
import {Col, Nav, Row, Tab} from "react-bootstrap";
import Avatar from "../images/avatar.svg";
class unternehmercoaching extends React.Component {

    createServiceLong = (array) => {
        let createServiceLong = []
        for (let i = 0; i < array.length; i++) {
            createServiceLong.push(
                <ServiceLong
                    img={array[i].image.fluid.src}
                    icon={array[i].icon.fluid.src}
                    title={array[i].title}
                    shortDescription={array[i].subtitle}
                    contentOne={array[i].content1Title}
                    contentOneText={array[i].content1Text}
                    contentTwo={array[i].content2Title}
                    contentTwoText={array[i].content2Text}
                    contentThree={array[i].content3Title}
                    contentThreeText={array[i].content3Text}
                    left = {array[i].imageleft}         />
            )
        }
        return createServiceLong
    }
    createServiceShort = (array) => {
        let createServiceShort = []
        for (let i = 0; i < array.length; i++) {
            createServiceShort.push(
                <MDBCol md={6} sm={12}>
                    <ServiceShort
                        icon={array[i].icon.fluid.src}
                        title={array[i].title}
                        desciption={array[i].subtitle}
                    />
                </MDBCol>
            )
        }
        return createServiceShort
    }

  render() {
    const graphData = this.props.data
    console.log(graphData.allContentfulServicePage);
      console.log(graphData.allContentfulServicePage.edges[1].node)
    return (
      <Layout>
        <SEO title="unternehmercoaching" />
        <Description
          title={graphData.allContentfulServicePage.edges[1].node.title}
          description={
            graphData.allContentfulServicePage.edges[1].node.text.text
          }
          img={DescImage}
        />

        <MDBContainer size="lg">
          <MDBRow>
              {this.createServiceShort(graphData.allContentfulServicePage.edges[1].node.serviceShort)}
          </MDBRow>
        </MDBContainer>
        <MDBContainer fluid className="bggray">
            {this.createServiceLong(graphData.allContentfulServicePage.edges[1].node.serviceLong)}
        </MDBContainer>
      </Layout>
    )
  }
}
export default unternehmercoaching

export const query = graphql`
{
  allContentfulServicePage {
    edges {
      node {
        title
        text{text}
        serviceShort {
          title
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
                src
              }
            }
            content1Title
            content1Text
            content2Title
            content2Text
            content3Title
            content3Text
          }
        }
      }
    }
  }
}
`

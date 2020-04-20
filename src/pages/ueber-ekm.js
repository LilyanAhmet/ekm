import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

/* resources */
import Map from "../images/map.png"
import {graphql} from "gatsby";
class ueberEkm extends React.Component {
  render() {
    const graphData = this.props.data
    return (
        <Layout>
          <SEO title="ueberEkm"/>
          <div className="ueber-ekm">
            <MDBContainer size="lg">
              <MDBRow className="margin-p-40">
                <MDBCol md={7} sm={12}>
                  <MDBRow>
                    <MDBCol>
                      <h1 className="borderimg"> {graphData.allContentfulSinglePage.edges[0].node.title}</h1>
                    </MDBCol>
                  </MDBRow>
                  <p>
                    {graphData.allContentfulSinglePage.edges[0].node.text.text}
                  </p>
                </MDBCol>
                <MDBCol md={5} sm={12}>
                  <img className="img-fluid" src={graphData.allContentfulSinglePage.edges[0].node.image.fluid.src}/>
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
  allContentfulSinglePage(filter: {id: {eq: "a2332606-59a5-5e89-9921-361285392ba6"}}) {
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

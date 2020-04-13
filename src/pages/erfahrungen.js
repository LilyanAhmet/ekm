import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import { Nav, Tab, Col, Row, Container } from "react-bootstrap"
import { MDBContainer, MDBRow, MDBCol} from "mdbreact"

/* resources */
import Image from '../images/experience.svg'
class erfahrungen extends React.Component {
  render() {
    const graphData = this.props.data
    console.log(graphData)
    return (
      <Layout>
        <SEO title="erfahrungen" />
        <div className="experience">
          <MDBContainer size="lg">
            <MDBRow>
              <MDBCol>
                <h1 className="borderimg"> Erfahrungen</h1>
              </MDBCol>
            </MDBRow>
            <MDBRow className="margin-p-40">
              <MDBCol md={6} sm={12}>
                <p>{graphData.allContentfulErfahrungen.nodes[0].text.text}</p>
              </MDBCol>
              <MDBCol md={6} sm={12}>
                <img className="img-fluid" src={Image} />
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
  query {
    allContentfulErfahrungen {
      nodes {
        text {
          text
        }
      }
    }
  }
`

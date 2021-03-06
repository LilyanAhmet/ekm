import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Nav, Tab, Col, Row, Container } from "react-bootstrap"
import { MDBContainer, MDBRow, MDBCol, MDBMask, MDBView } from "mdbreact"
import { graphql } from "gatsby"
/* resources */
import Avatar from "../images/avatar.svg"
import Certificate from "../images/cerft-1.svg"

export default class berater extends Component {
  state = {
    activeItem: "1",
  }

  toggle = tab => () => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      })
    }
  }


  render() {
    const graphData = this.props.data
    console.log(graphData);
    return (
      <Layout contactData={graphData.contactInfo}>
        <SEO title="berater" />
        <div className="ekm">
          <MDBContainer size="lg">
            <MDBRow>
              <MDBCol>
                <h1 className="borderimg"> EKM Berater</h1>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <Container className="tab-section">
           {/* <Row>
              <Col sm={4} xs={12} className="nav-pills">
                <div className="nav-link">
                  {graphData.allContentfulConsultant.edges[1].node.name}
                </div>
              </Col>
              <Col sm={8} xs={12}>
                <div className="Rectangle"></div>
              </Col>
              <Col sm={12}>
                <Row>
                  <Col md={3} sm={12}>
                    <img className="img-fluid brater-img" src={graphData.allContentfulConsultant.edges[1].node.photo.fluid.src} />
                  </Col>
                  <Col md={9} sm={12}>
                    <p>
                      {graphData.allContentfulConsultant.edges[1].node.description.description}{" "}
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
*/} 
            <Row className="margin-p-60">
              <Col sm={4} xs={12} className="nav-pills">
                <div className="nav-link">
                  {graphData.allContentfulConsultant.edges[0].node.name}{" "}
                </div>
              </Col>
              <Col sm={8} xs={12}>
                <div className="Rectangle"></div>
              </Col>
              <Col sm={12}>
                <Row>
                  <Col md={3} sm={12}>
                    <img className="img-fluid brater-img" src={graphData.allContentfulConsultant.edges[0].node.photo.fluid.src} />
                  </Col>
                  <Col md={9} sm={12}>
                    <p>
                      {graphData.allContentfulConsultant.edges[0].node.description.description}{" "}
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allContentfulConsultant {
      edges {
        node {
          name
          photo {
            fluid {
              src
            }
          }
          description {
            description
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

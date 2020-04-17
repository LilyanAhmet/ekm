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
  createNavItems = array => {
    let numbersth = [
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "sixth",
      "seventh",
      "eighth",
    ]
    let navItems = []
    let children = []
    for (let i = 0; i < array.length; i++) {
      children.push(
        <Nav.Link
          eventKey={numbersth[i]}
          className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg"
        >
          {array[i].node.name}
        </Nav.Link>
      )
      navItems.push(<Nav.Item>{children[i]}</Nav.Item>)
    }
    return navItems
  }
  createTabPanes = array => {
    let numbersth = [
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "sixth",
      "seventh",
      "eighth",
    ]
    let navItems = []
    for (let i = 0; i < array.length; i++) {
      navItems.push(
        <Tab.Pane eventKey={numbersth[i]}>
          <Row>
            <Col md={3} sm={12}>
              <img className="img-fluid" src={Avatar} />
            </Col>
            <Col md={9} sm={12}>
              <p>{array[i].node.description.description}</p>
            </Col>
          </Row>
          <Row className="margin-p-40">
            <Col md={12}>
              <div className="box ">
                <div className="title">
                  <h2>Business Development</h2> <hr />
                </div>
                <div className="text">
                  <p>{array[i].node.businessDevelopment.businessDevelopment}</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="margin-p-40">
            <Col md={12}>
              <div className="box">
                <div className="title">
                  <h2>Existenzgründungsberatung</h2> <hr />
                </div>
                <div className="text">
                  <p>
                    {
                      array[i].node.existenzgrndungsberatung
                        .existenzgrndungsberatung
                    }
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="margin-p-40">
            <Col md={12}>
              <div className="certificate ">
                <div className="title">
                  <h2>Zertifizierungen</h2> <hr />
                </div>
                <Row className="margin-p-40">
                  <Col md={4} sm={12}>
                    <MDBView hover zoom>
                      <img
                        src={array[i].node.zertifizierungen[0].fluid.src}
                        className="img-fluid"
                        alt=""
                      />
                      <MDBMask className="flex-center">
                        <p className="white-text">Zoom effect</p>
                      </MDBMask>
                    </MDBView>
                  </Col>
                  <Col md={4} sm={12}>
                    <MDBView hover zoom>
                      <img
                        src={array[i].node.zertifizierungen[1].fluid.src}
                        className="img-fluid"
                        alt=""
                      />
                      <MDBMask className="flex-center">
                        <p className="white-text">Zoom effect</p>
                      </MDBMask>
                    </MDBView>
                  </Col>
                  <Col md={4} sm={12}>
                    <MDBView hover zoom>
                      <img
                        src={array[i].node.zertifizierungen[2].fluid.src}
                        className="img-fluid"
                        alt=""
                      />
                      <MDBMask className="flex-center">
                        <p className="white-text">Zoom effect</p>
                      </MDBMask>
                    </MDBView>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Tab.Pane>
      )
    }
    return navItems
  }

  render() {
    const graphData = this.props.data
    console.log(graphData)
    return (
      <Layout>
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
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={12}>
                  <Nav variant="pills" className="col-xs-12">
                    {this.createNavItems(
                      graphData.allContentfulConsultant.edges
                    )}
                  </Nav>
                </Col>
                <Col sm={12}>
                  <Tab.Content>
                    {this.createTabPanes(
                      graphData.allContentfulConsultant.edges
                    )}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
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
          businessDevelopment {
            businessDevelopment
          }
          existenzgrndungsberatung {
            existenzgrndungsberatung
          }
          zertifizierungen {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

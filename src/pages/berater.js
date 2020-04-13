import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Nav, Tab, Col, Row, Container } from "react-bootstrap"
import { MDBContainer, MDBRow, MDBCol, MDBMask, MDBView } from "mdbreact"
import {graphql} from "gatsby";
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
                    <Nav.Item>
                      <Nav.Link
                        eventKey="first"
                        className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg"
                      >
                        Michael Schroeder
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="second"
                        className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg"
                      >
                        Dennis Klose
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <Col md={3} sm={12}>
                          <img className="img-fluid" src={Avatar} />
                        </Col>
                        <Col md={9} sm={12}>
                          <p>
                            Michael Schroeder, Betriebswirt (VWA), seit über 30
                            Jahren im Finanzdienstleistungssektor tätig, davon
                            20 Jahre auf Executive Level bzw. in der
                            Geschäftsführung. Schwerpunkttemen Kredit- und
                            Aussenhandelsgeschäft, Finanzierung von
                            Existenzgründern, Unternehmen, Projekten, privaten
                            wie gewerblichen Bauvorhaben. Master Black-Belt im
                            Rahmen der Prozeßoptimierung (SixSigma und Lean
                            Management) und mehrjährige
                            Projektmanagementerfahrung.
                          </p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        <Col md={3} sm={12}>
                          <img className="img-fluid" src={Avatar} />
                        </Col>
                        <Col md={9} sm={12}>
                          <p>
                            Michael Schroeder, Betriebswirt (VWA), seit über 30
                            Jahren im Finanzdienstleistungssektor tätig, davon
                            20 Jahre auf Executive Level bzw. in der
                            Geschäftsführung. Schwerpunkttemen Kredit- und
                            Aussenhandelsgeschäft, Finanzierung von
                            Existenzgründern, Unternehmen, Projekten, privaten
                            wie gewerblichen Bauvorhaben. Master Black-Belt im
                            Rahmen der Prozeßoptimierung (SixSigma und Lean
                            Management) und mehrjährige
                            Projektmanagementerfahrung.
                          </p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            <Row className="margin-p-40">
              <Col md={12}>
                <div className="box ">
                  <div className="title">
                    <h2>Business Development</h2> <hr />
                  </div>
                  <div className="text">
                    <p>
                      Wir begleiten Sie bereits im Rahmen der Existenzgründung
                      und hier auch schon bei der Umsetzung Ihrer Idee in einen
                      Businessplan und gern auch bei Finanzierungsfragen. bei
                      der Entwicklung einer geeigneten Finanzierung, die aus
                      Fördermöglichkeiten, privaten Investoren und
                      Bankfinanzierungen besteht. Auch für bereits etablierte
                      Unternehmen können wir gezielt durch eine SWAT-Analyse
                      geplante Wachstumspläne überprüfen, Lösungen besprechen
                      und Sie bis hin zur Findung einer geeigneten
                      Finanzierungslösung begleiten. Wir unterstützen Sie bei
                      den gewählten Schwerpunkten mit individuellen Lösungen und
                      werden stets versuchen, vorhandene Fördermöglichkeiten
                      aufzuzeigen und anzubieten.
                    </p>
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
                      Haben Sie eine Idee, von der Sie glauben, dass diese Idee
                      Sie ernähren könnte? Wir helfen Ihnen bei der Validierung
                      Ihrer Idee und begleiten Sie auf dem Weg zum Businessplan
                      und der Entscheidung, diese Idee weiter zu verfolgen mit
                      dem Ziel, Sie bis zum Start Ihrer Tätigkeit zu
                      unterstützen und Ihnen den Weg zu ebnen. Wir bieten Ihnen
                      von der Förderung bei Existenzgründungen über private
                      Investoren auch digitale Enabler an, die Ihnen mit Rat und
                      Tat zur Seite stehen. Unsere Schwerpunkte liegen im
                      Coaching des Gründers, der Entwicklung des Businessplans
                      und der Usecases sowie der Erstellung einer SWAT-Analyse.
                      Die Vollständigkeit der Finanzierungsunterlagen und ein
                      gut aufbereiteter Finanzierungsvorschlag runden das
                      gemeinsame Bankgespräch ab.
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
                        <img src={Certificate} className="img-fluid" alt="" />
                        <MDBMask className="flex-center">
                          <p className="white-text">Zoom effect</p>
                        </MDBMask>
                      </MDBView>
                    </Col>
                    <Col md={4} sm={12}>
                      <MDBView hover zoom>
                        <img src={Certificate} className="img-fluid" alt="" />
                        <MDBMask className="flex-center">
                          <p className="white-text">Zoom effect</p>
                        </MDBMask>
                      </MDBView>
                    </Col>
                    <Col md={4} sm={12}>
                      <MDBView hover zoom>
                        <img src={Certificate} className="img-fluid" alt="" />
                        <MDBMask className="flex-center">
                          <p className="white-text">Zoom effect</p>
                        </MDBMask>
                      </MDBView>
                    </Col>
                  </Row>
                </div>
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

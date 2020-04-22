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
      children.push()
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
      navItems.push()
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
            <Row>
              <Col sm={12} className="nav-pills">
                <div className="nav-link">
                    Michael Schroeder
                </div>
              </Col>
              <Col sm={12}>
                <Row>
                  <Col md={3} sm={12}>
                    <img className="img-fluid brater-img" src={Avatar} />
                  </Col>
                  <Col md={9} sm={12}>
                    <p>
                      Michael Schroeder, Betriebswirt (VWA), seit über 30 Jahren
                      im Finanzdienstleistungssektor tätig, davon 20 Jahre auf
                      Executive Level bzw. in der Geschäftsführung.
                      Schwerpunkttemen Kredit- und Aussenhandelsgeschäft,
                      Finanzierung von Existenzgründern, Unternehmen, Projekten,
                      privaten wie gewerblichen Bauvorhaben. Master Black-Belt
                      im Rahmen der Prozeßoptimierung (SixSigma und Lean
                      Management) und mehrjährige Projektmanagementerfahrung.{" "}
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="margin-p-60">
              <Col sm={12} className="nav-pills">
                <div className="nav-link">
                  Dennis Klose
                </div>
              </Col>
              <Col sm={12}>
                <Row>
                  <Col md={3} sm={12}>
                    <img className="img-fluid brater-img" src={Avatar} />
                  </Col>
                  <Col md={9} sm={12}>
                    <p>
                      Dennis Klose, gelernter Bankkaufmann, Bankfachwirt,
                      Ausbilder (AdA mit Abschluß), Bankbetriebswirt und Dipl.
                      Bankbetriebswirt arbeitet seit über 20 Jahren in der
                      Kreditwirtschaft. Erfahrungen als Mitarbeiter und
                      Führungskraft bei Sparkassen und privaten Banken in
                      Betrieb und Vertrieb. Business Development und
                      Projektarbeit für Kreditinstitute ebneten den Weg zum
                      Unternehmensberater mit Schwerpunkt Kreditgeschäft,
                      Prozesse, Migrationen. Langjähriger Prüfer der beruflichen
                      Erstausbildung für Bankkaufleute
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

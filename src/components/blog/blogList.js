import React, { Component } from "react"
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBContainer,
} from "mdbreact"
import { Nav, Tab, Col } from "react-bootstrap"

/* components */
import BlogCard from "../blog/blogCard"

export default class blogList extends Component {
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
    return (
      <div className="blog-list">
        <MDBContainer className="tab-section">
          <Tab.Container id="blogs" defaultActiveKey="first" >
            <MDBRow className="margin-p-bottom-50">
              <Col sm={12}>
                <Nav variant="pills" className="col-xs-12">
                  <Nav.Item className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg">
                    <Nav.Link eventKey="first"> content 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg">
                    <Nav.Link eventKey="second"> content 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg">
                    <Nav.Link eventKey="third"> content 3</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg">
                    <Nav.Link eventKey="four"> content 4</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg">
                    <Nav.Link eventKey="five"> content 5</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg">
                    <Nav.Link eventKey="six"> content 6</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </MDBRow>

            <MDBRow>
              <MDBCol md={8} sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <BlogCard
                      cat="content 1"
                      title="Home vs Office. Remotely Working. Which is the best? #1"
                      date="12 Jul 2020"
                    />
                    <BlogCard
                      cat="content 1"
                      title="Home vs Office. Remotely Working. Which is the best? #1"
                      date="12 Jul 2020"
                    />
                    <BlogCard
                      cat="content 1"
                      title="Home vs Office. Remotely Working. Which is the best? #1"
                      date="12 Jul 2020"
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <BlogCard
                      cat="content 2"
                      title="Home vs Office. Remotely Working. Which is the best? #1"
                      date="12 Jul 2020"
                    />
                    <BlogCard
                      cat="content 2"
                      title="Home vs Office. Remotely Working. Which is the best? #1"
                      date="12 Jul 2020"
                    />
                    <BlogCard
                      cat="content 3"
                      title="Home vs Office. Remotely Working. Which is the best? #1"
                      date="12 Jul 2020"
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <BlogCard
                      cat="content 3"
                      title="Home vs Office. Remotely Working. Which is the best? #1"
                      date="12 Jul 2020"
                    />
                    <BlogCard
                      cat="content 3"
                      title="Home vs Office. Remotely Working. Which is the best? #1"
                      date="12 Jul 2020"
                    />
                    <BlogCard
                      cat="content 3"
                      title="Home vs Office. Remotely Working. Which is the best? #1"
                      date="12 Jul 2020"
                    />
                  </Tab.Pane>
                </Tab.Content>
              </MDBCol>

              <MDBCol md={4} sm={12}>
                <div className="right">
                  <div className="title">
                    <h3 className="darkborder">
                      You like what you’re reading?
                    </h3>
                  </div>
                  <div className="text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus Lorem ipsum dolor sit amet,
                      consectetuer
                      <br />
                      <br />
                      <br />
                      adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                      massa. Cum sociis natoque penatibus et magnis dis
                      parturient montes, nascetur ridiculus
                    </p>
                  </div>
                  <MDBBtn size="md" className="waves-light">
                    Mehr Sehn
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </Tab.Container>
        </MDBContainer>
      </div>
    )
  }
}

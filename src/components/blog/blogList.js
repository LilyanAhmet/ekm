import React, { Component } from "react"
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact"
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
    console.log(this.props.blogContent)
    let content1 = this.props.blogContent[0].node.content
    let content2 = this.props.blogContent[1].node.content
    let content3 = this.props.blogContent[2].node.content
    let content4 = this.props.blogContent[3].node.content
    let content5 = this.props.blogContent[4].node.content
    let content6 = this.props.blogContent[5].node.content
    return (
      <div className="blog-list">
        <MDBContainer className="tab-section">
          <Tab.Container id="blogs" defaultActiveKey="first">
            <div className="desktop">
              <MDBRow className="margin-p-bottom-50 ">
                <Col sm={12}>
                  <Nav variant="pills" className="col-xs-12">
                    <Nav.Item className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg">
                      <Nav.Link eventKey="first">{content1}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg">
                      <Nav.Link eventKey="second">{content2}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg">
                      <Nav.Link eventKey="third"> {content3}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg">
                      <Nav.Link eventKey="four">{content4}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg">
                      <Nav.Link eventKey="five">{content5}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg">
                      <Nav.Link eventKey="six"> {content6}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </MDBRow>
            </div>
            <div className=" mobile">
              <div className="margin-p-bottom-50 ">
                <Nav variant="pills">
                  <div className="scrolly">
                    <Nav.Link eventKey="first">{content1}</Nav.Link>

                    <Nav.Link eventKey="second">{content2}</Nav.Link>

                    <Nav.Link eventKey="third"> {content3}</Nav.Link>

                    <Nav.Link eventKey="four">{content4}</Nav.Link>

                    <Nav.Link eventKey="five">{content5}</Nav.Link>

                    <Nav.Link eventKey="six"> {content6}</Nav.Link>
                  </div>
                </Nav>
              </div>
            </div>
            <MDBRow>
              <MDBCol md={8} sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    {this.props.blogContent[0].node.blogPosts.map(function(
                      blogPost
                    ) {
                      return (
                        <BlogCard
                          cat={content1}
                          title={blogPost.title}
                          date={blogPost.createdAt}
                          slug={blogPost.slug}
                        />
                      )
                    })}
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    {this.props.blogContent[1].node.blogPosts.map(function(
                      blogPost
                    ) {
                      return (
                        <BlogCard
                          cat={content2}
                          title={blogPost.title}
                          date={blogPost.createdAt}
                          slug={blogPost.slug}
                        />
                      )
                    })}
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    {this.props.blogContent[2].node.blogPosts.map(function(
                      blogPost
                    ) {
                      return (
                        <BlogCard
                          cat={content3}
                          title={blogPost.title}
                          date={blogPost.createdAt}
                          slug={blogPost.slug}
                        />
                      )
                    })}
                  </Tab.Pane>
                </Tab.Content>
              </MDBCol>
              <MDBCol md={4} sm={12} >
                <div className="right ">
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

import React, { Component } from "react"
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact"
import { Nav, Tab, Col } from "react-bootstrap"

/* components */
import BlogCard from "../blog/blogCard"

export default class blogList extends Component {
  state = {
    activeItem: this.props.blogContent[0].node.id,
  }

  toggle = tab => () => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      })
    }
  }

  pageChange(a, b) {
    for (
      let index = 0;
      index < document.getElementsByClassName(a).length;
      index++
    ) {
      document.getElementsByClassName(a)[index].style.display = "none"
    }

    for (
      let index = 0;
      index < document.getElementsByClassName("page" + b + "-" + a).length;
      index++
    ) {
      document.getElementsByClassName("page" + b + "-" + a)[
        index
      ].style.display = "block"
    }
  }

  render() {
    let pageNumber = 0
    let postNumber = 0
    let postDisplay = "block"
    return (
      <div className="blog-list">
        <MDBContainer className="tab-section">
          <Tab.Container
            id="blogs"
            defaultActiveKey={this.props.blogContent[0].node.id}
          >
            <div className="desktop">
              <MDBRow className="margin-p-bottom-50 ">
                <Col sm={12}>
                  <Nav variant="pills" className="col-xs-12">
                    {this.props.blogContent.map((blogPost, keys) => {
                      return (
                        <Nav.Item className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg">
                          <Nav.Link eventKey={blogPost.node.id}>
                            {blogPost.node.content}
                          </Nav.Link>
                        </Nav.Item>
                      )
                    })}
                  </Nav>
                </Col>
              </MDBRow>
            </div>
            <div className=" mobile">
              <div className="margin-p-bottom-50 ">
                <Nav variant="pills">
                  <div className="scrolly">
                    {this.props.blogContent.map((blogPost, keys) => {
                      return (
                        <Nav.Link eventKey={blogPost.node.id}>
                          {blogPost.node.content}
                        </Nav.Link>
                      )
                    })}
                  </div>
                </Nav>
              </div>
            </div>
            <MDBRow>
              <MDBCol md={8} sm={12}>
                <Tab.Content>
                  {this.props.blogContent.map((blogPost, keys) => {
                    pageNumber = 0
                    postNumber = 0
                    postDisplay = "block"
                    return (
                      <Tab.Pane eventKey={blogPost.node.id}>
                        {blogPost.node.blogPosts.map((Content, keys) => {
                          if (keys % 3 == 0) {
                            pageNumber = pageNumber + 1
                          }
                          if (keys > 2) {
                            postDisplay = "none"
                          }
                          return (
                            <BlogCard
                              postDisplay={postDisplay}
                              postPageNumber={`${blogPost.node.id} page${pageNumber}-${blogPost.node.id}`}
                              cat={blogPost.node.title}
                              title={Content.title}
                              date={Content.createdAt}
                              slug={Content.slug}
                            />
                          )
                        })}
                        <div className={`paging-${blogPost.node.id}`}>
                          {(() => {
                            const options = []

                            for (let i = 1; i <= pageNumber; i++) {
                              options.push(
                                <a
                                  href="#"
                                  style={{ display: "inline-block" }}
                                  className={`page-link pageButton-${blogPost.node.id}-${i}`}
                                  onClick={() =>
                                    this.pageChange(blogPost.node.id, i)
                                  }
                                >
                                  {i}
                                </a>
                              )
                            }

                            return options
                          })()}
                        </div>
                      </Tab.Pane>
                    )
                  })}
                </Tab.Content>
              </MDBCol>
              <MDBCol md={4} sm={12}>
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

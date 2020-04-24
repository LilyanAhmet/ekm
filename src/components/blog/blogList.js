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
    alert(a)
  }

  makePages(tabClass) {
    if (
      document.getElementsByClassName("paging-" + tabClass)[0] &&
      document.getElementsByClassName(tabClass).length > 3
    ) {
      let pageNum = 1
      for (
        let index = 0;
        index < document.getElementsByClassName(tabClass).length;
        index++
      ) {
        if (index % 3 == 0) {
          document.getElementsByClassName("paging-" + tabClass)[0].innerHTML =
            document.getElementsByClassName("paging-" + tabClass)[0].innerHTML +
            "<a href=\"javascript:pageChange('" +
            tabClass +
            "'," +
            pageNum +
            ')">' +
            pageNum +
            "</a>"
          pageNum++
        }
      }
    }
  }

  componentDidMount() {
    for (let index = 0; index < this.props.blogContent.length; index++) {
      //this.makePages(this.props.blogContent[index].node.id)
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
                              postPageNumber={`${blogPost.node.id} page${pageNumber}`}
                              cat={blogPost.node.title}
                              title={Content.title}
                              date={Content.createdAt}
                              slug={Content.slug}
                            />
                          )
                        })}
                        <div className={`paging-${blogPost.node.id}`}></div>
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

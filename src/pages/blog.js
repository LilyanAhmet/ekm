import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBContainer,
} from "mdbreact"
/* components */
import NewLetter from "../components/sharedComponents/newsLetter"
import Bloglist from "../components/blog/blogList"
const blog = () => {
  return (
    <Layout>
      <SEO title="blog" />
      <div className="blog">
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <h1 className="borderimg"> Blog</h1>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <div className="sub-title">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Bloglist />
        <MDBContainer>
          <NewLetter />
        </MDBContainer>
      </div>
    </Layout>
  )
}

export default blog

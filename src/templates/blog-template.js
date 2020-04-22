import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
const Blog = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="unternehmercoaching" />
      <div className="blog-detail">
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <div className="box">
                <div className="top">
                  <MDBRow>
                    <MDBCol md={8} sm={12}>
                      <h1>
                        Home vs Office. Remotely Working. Which is the best? #1
                      </h1>
                    </MDBCol>
                    <MDBCol md={4} sm={12}>
                      {" "}
                      <p>12 Jul 2020</p>
                    </MDBCol>
                  </MDBRow>
                </div>
                <div className="cat">
                  <MDBRow>
                    <MDBCol md={12} sm={12}>
                      <p>Content.1 Content.2</p>
                    </MDBCol>
                  </MDBRow>
                </div>
                <div className="auth">
                  <MDBRow>
                    <MDBCol md={12} sm={12} style={{ display: "flex" }}>
                      <span>Writer: </span>
                      <p> {pageContext.house}</p>
                    </MDBCol>
                  </MDBRow>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Layout>
  )
}

export default Blog

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
const Blog = ({ pageContext }) => {

  const data = useStaticQuery(graphql`
    query {
      contactInfo:contentfulCompanyInfo {
        phoneNumber1
        phoneNumber2
        eMailAddresse
      }
    }
  `)

  return (
    <Layout contactData={data.contactInfo}>
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
                        {pageContext.title}
                      </h1>
                    </MDBCol>
                    <MDBCol md={4} sm={12}>
                      {" "}
                      <p>{pageContext.createdAt}</p>
                    </MDBCol>
                  </MDBRow>
                </div>
                <div className="cat">
                  <MDBRow>
                    <MDBCol md={12} sm={12}>
                      <p>Content 1</p>
                    </MDBCol>
                  </MDBRow>
                </div>
                <div className="auth">
                  <MDBRow>
                    <MDBCol md={12} sm={12} style={{ display: "flex" }}>
                      <span>Writer: </span>
                      <p> {pageContext.author}</p>
                    </MDBCol>
                  </MDBRow>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
            <div
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html:
                    pageContext.content,
                  }}
                />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Layout>
  )
}

export default Blog

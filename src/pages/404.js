import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { MDBRow, MDBBtn, MDBContainer } from "mdbreact"
/* resources */
import Img from "../images/NotFound.svg"
const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contactInfo: contentfulCompanyInfo {
        phoneNumber1
        phoneNumber2
        eMailAddresse
      }
    }
  `)
  return (
    <Layout contactData={data.contactInfo}>
      <SEO title="404: Not found" />
      <div className="not-found">
        <MDBContainer>
          <MDBRow>
            <h1>Ooops! Sieht aus wie niemand zu Hause ist!</h1>
          </MDBRow>
          <MDBRow>
            <p>Die gesuchte Seite existiert nicht.</p>
          </MDBRow>
          <MDBRow>
            <a href="/">
              <MDBBtn size="md" className="waves-light ">
                Gehen Sie zur Homepage
              </MDBBtn>
            </a>
          </MDBRow>
          <MDBRow>
            <img className="img-fluid" src={Img} />
          </MDBRow>
        </MDBContainer>
      </div>
    </Layout>
  )
}

export default NotFoundPage

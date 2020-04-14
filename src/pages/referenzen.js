import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

/*components */
import ReferenceBox from "../components/sharedComponents/referenceBox"
import img from "../images/oval.png"
const referenzen = () => {
  return (
    <Layout>
      <SEO title="unternehmercoaching" />
      <div className="references">
        <MDBContainer size="lg">
          <MDBRow>
            <MDBCol md={12}>
              <h1 className="borderimg">Du bist in einer guten Hand</h1>
            </MDBCol>
            <MDBCol md={12}>
              <p>
                Millionen von Menschen auf der ganzen Welt haben EKM bereits als
                Ort gewählt, an dem ihr Traum wahr wird.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md={4} sm={12}>
              <ReferenceBox
                name="lilyan ahmetoglu"
                title="consultant"
                img={img}
                description="There’s no way we could have hired these many people and gotten so
                much business had we not had all of those back-office systems
                figured out. It’s been easier growing our company with a system
                that is so easy and scalable."
              />
            </MDBCol>
            <MDBCol md={4} sm={12}></MDBCol>
            <MDBCol md={4} sm={12}></MDBCol>
            <MDBCol md={4} sm={12}></MDBCol>
            <MDBCol md={4} sm={12}></MDBCol>
            <MDBCol md={4} sm={12}></MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Layout>
  )
}

export default referenzen

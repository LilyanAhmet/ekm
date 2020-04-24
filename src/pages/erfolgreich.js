import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  MDBRow,
  MDBBtn,
  MDBContainer,
} from "mdbreact"
/* resources */
import Img from "../images/success.svg"

  class erfolgreich extends React.Component {
    render() {
      const graphData = this.props.data
  return (
    <Layout contactData={graphData.contactInfo}>
      <SEO title="erfolgreich:Danke, dass Sie uns kontaktiert haben!" />
      <div className="not-found">
        <MDBContainer>
          <MDBRow>
            <img className="img-fluid" src={Img} />
          </MDBRow>
          <MDBRow>
            <h1 style={{paddingTop:"40px"}}>Danke, dass Sie uns kontaktiert haben!</h1>
          </MDBRow>
          <MDBRow>
            <p style={{paddingTop:"40px"}}>
              Wir haben Ihre Nachricht erhalten. Wir werden uns umgehend bei
              Ihnen melden.
            </p>
          </MDBRow>
          <MDBRow>
            <a href="/">
              <MDBBtn size="md" className="waves-light ">
                Gehen Sie zur Homepage
              </MDBBtn>
            </a>
          </MDBRow>
        </MDBContainer>
      </div>
    </Layout>
  )
}
  }

export default erfolgreich
export const query = graphql`
  {
    contactInfo:contentfulCompanyInfo {
      phoneNumber1
      phoneNumber2
      eMailAddresse
    }
  }
`
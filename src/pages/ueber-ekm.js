import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

/* resources */
import Map from "../images/map.png"
const ueberEkm = () => {
  return (
    <Layout>
      <SEO title="ueberEkm" />
      <div className="ueber-ekm">
        <MDBContainer size="lg">
          <MDBRow className="margin-p-40">
            <MDBCol md={7} sm={12}>
              <MDBRow>
                <MDBCol>
                  <h1 className="borderimg"> Über Uns</h1>
                </MDBCol>
              </MDBRow>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                <br /> <br /> <br />
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus
              </p>
            </MDBCol>
            <MDBCol md={5} sm={12}>
              <img className="img-fluid" src={Map} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Layout>
  )
}

export default ueberEkm

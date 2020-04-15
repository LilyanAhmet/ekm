import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation,
  MDBBox,
  MDBIcon
} from "mdbreact"

/* components */
import Newsletter from '../components/sharedComponents/newsLetter'
/* resources */
import Bg from "../images/professor-illus.png"
import Dienstleistungen from "../images/Dienstleistungen.svg"
import IconOne from "../images/icon1.svg"
export default class index extends Component {
  render() {
    return (
      <div>
        <Layout trans={true}>
          <SEO title="Home" />
          <MDBView>
            <MDBMask className="white-text gradient" />
            <MDBContainer
              style={{
                height: "100%",
                width: "100%",
                paddingTop: "8rem",
                paddingBottom: "12rem",
              }}
              className="d-flex justify-content-center white-text align-items-center padding-p-bottom-10"
            >
              <MDBRow>
                <MDBCol
                  md="5"
                  className="text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBBox className="box">
                    <MDBBtn
                      rounded
                      floating
                      color="white"
                      gradient="aqua"
                      rounded
                    >
                      NEU
                    </MDBBtn>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </MDBBox>
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                      <span>EKM</span> hilft Ihrer Karriere
                    </h1>
                    <h6 className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                      veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                      molestiae iste.
                    </h6>
                    <MDBBtn color="white" gradient="aqua">
                      Mehr Erfahren
                    </MDBBtn>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="7" xl="7" className="mt-xl-7">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img src={Bg} alt="" className="img-fluid" />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBView>
          <div className="home">
            <MDBContainer size="lg">
              <MDBRow>
                <MDBCol>
                  <h1 className="borderimg"> Dienstleistungen</h1>
                </MDBCol>
              </MDBRow>
              <MDBRow className="details">
                <MDBCol md={7} sm={12}>
                  <h2>Mit EKM stärker werden</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus
                  </p>
                  <MDBRow>
                    <MDBCol>
                      <div className="bottom">
                        <img className="img-fluid " src={IconOne} />
                        <h3>Unternehmercoaching</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                        <a>DIENSTE DURCHSUCHEN →</a>
                      </div>
                    </MDBCol>
                    <MDBCol>
                      <div className="bottom">
                        <img className="img-fluid " src={IconOne} />
                        <h3>Unternehmercoaching</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                        <a>DIENSTE DURCHSUCHEN →</a>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol md={5} sm={12}>
                  <img src={Dienstleistungen} className="img-fluid" />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
           
          </div>
          <MDBContainer fluid className="bggray">
                <Newsletter />
            </MDBContainer>
        </Layout>
      </div>
    )
  }
}

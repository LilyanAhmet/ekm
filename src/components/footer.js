import React from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact"

// resources
import Logo from "../images/footer-logo.png"
import Icon from "../images/ekm-icon.svg"

class footer extends React.Component {
  render() {
  const contactData = this.props.contactData
  return (
      <div>
        <MDBFooter className="font-small pt-4 desktop">
          <MDBContainer className="text-center text-md-left">
            <MDBRow>
              <MDBCol>
                <img className="img-fluid" src={Logo} />
              </MDBCol>
              <MDBCol>
                <ul>
                  <li className="list-unstyled">
                        <a href="/ueber-ekm">
                          {" "}
                          <h5 className="title">Über Uns</h5>
                        </a>
                    </li>
                  {/*<li className="list-unstyled">
                  <a href="#!">Erfahrungen</a>
                </li> */}
                </ul>
              </MDBCol>
              <MDBCol>
                <h5 className="title">Dienstleistungen</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="/unternehmerberatung">Unternehmerberatung</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/karrieremanagement">Karrieremanagement</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol>
                {//<h5 className="title">Referenzen</h5>
                }
                <ul>
                  {/*
                  <li className="list-unstyled">
                    <a href="/blog">
                      {" "}
                      <h5 className="title">Blog</h5>
                    </a>
                  </li>
                  */}
                  <li className="list-unstyled">
                    <a href="/kontakt">
                      {" "}
                      <h5 className="title">Kontakt</h5>
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/impressum">
                      {" "}
                      <h5 className="title">Impressum</h5>
                    </a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol>
                <ul className="margin-p-10">
                  <li className="list-unstyled margin-p-10">
                    <a href="tel:00491723922407">
                      <h5 className="title">
                        <MDBIcon
                            fas
                            icon="phone"
                            className="margin-p-right-10"
                            style={{ transform: "scaleX(-1)" }}
                        />{" "}
                        {contactData.phoneNumber1}
                      </h5>
                    </a>
                  </li>
                  <li className="list-unstyled margin-p-20 ">
                    <a href="mailto:info@ekm.de">
                      <h5 className="title">
                        <MDBIcon
                            fas
                            icon="envelope"
                            className="margin-p-right-10"
                        />{" "}
                        {contactData.eMailAddresse}
                      </h5>
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
            <hr className="Separator" />
          </MDBContainer>

          <div className="footer-copyright text-center py-3">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="4" sm="12">
                  <p>
                    &copy; {new Date().getFullYear()} Urheberrechte EKM
                    GmbH
                  </p>
                </MDBCol>
                <MDBCol md="4" sm="12">
                  <img className="margin-m-10" src={Icon} />
                </MDBCol>
                {/*
                <MDBCol md="4" sm="12">
                  <ul className="social">
                    <li>
                      <a>
                        <MDBIcon fab icon="facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a>
                        <MDBIcon fab icon="linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a>
                        {" "}
                        <MDBIcon fab icon="twitter" />
                      </a>
                    </li>
                    <li>
                      <a>
                        {" "}
                        <MDBIcon fab icon="youtube" />
                      </a>
                    </li>
                    <li>
                      <a>
                        <MDBIcon fab icon="instagram" />
                      </a>
                    </li>
                  </ul>
                </MDBCol>
                */}
              </MDBRow>
            </MDBContainer>
          </div>
        </MDBFooter>
        <MDBFooter className="font-small pt-4 mobile">
          <MDBContainer className="text-md-left">
            <MDBRow>
              <MDBCol>
                <img className="img-fluid" src={Logo} />
              </MDBCol>
              <MDBCol xs={8}> 
                <ul className="social">
                  <li>
                    <a>
                      <MDBIcon fab icon="facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <MDBIcon fab icon="linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <MDBIcon fab icon="twitter" />
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <MDBIcon fab icon="youtube" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <MDBIcon fab icon="instagram" />
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
            <MDBRow className="margin-p-20">
              <MDBCol xs={4} className="margin-auto">
                <ul>
                  <li className="list-unstyled">
                      <a href="/ueber-ekm">
                        {" "}
                        <h5 className="title">Über Uns</h5>
                      </a>
                  </li>
                  {/*<li className="list-unstyled">
                  <a href="/erfahrungen">Erfahrungen</a>
                </li> */}
                </ul>
              </MDBCol>
              <MDBCol xs={4} className="margin-auto">
                <a href="/erfahrungen">
                  <h5 className="title">Erfahrungen</h5>
                </a>
                <ul>
                  <li className="list-unstyled">
                    <a href="/unternehmerberatung">Unternehmerberatung</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/karrieremanagement">Karrieremanagement</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol xs={4} className="margin-auto">
                {//<h5 className="title">Referenzen</h5>
                }
                <ul>
                  {/*
                  <li className="list-unstyled">
                    <a href="/blog">
                      {" "}
                      <h5 className="title">Blog</h5>
                    </a>
                  </li>
                  */}
                  <li className="list-unstyled">
                    <a href="/kontakt">
                      {" "}
                      <h5 className="title">Kontakt</h5>
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/impressum">
                      {" "}
                      <h5 className="title">Impressum</h5>
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
            <hr className="Separator" />
          </MDBContainer>

          <div className="footer-copyright text-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol xs={4} className="margin-auto">
                  <ul className="margin-p-10">
                    <li className="list-unstyled margin-p-10">
                      <a href="tel:00491723922407">
                        <h5 className="title">
                          <MDBIcon
                              fas
                              icon="phone"
                              className="margin-p-right-10"
                              style={{ transform: "scaleX(-1)" }}
                          />{" "}
                          {contactData.phoneNumber1}
                        </h5>
                      </a>
                    </li>
                  </ul>
                </MDBCol>
                <MDBCol xs={4} className="margin-auto">
                  <img className="margin-m-10" src={Icon} />
                </MDBCol>
                <MDBCol xs={4} className="margin-auto">
                  <ul className="margin-p-10">
                    <li className="list-unstyled margin-p-10 ">
                      <a href="mailto:info@ekm.de">
                        <h5 className="title">
                          <MDBIcon
                              fas
                              icon="envelope"
                              className="margin-p-right-10"
                          />{" "}
                          {contactData.eMailAddresse}
                        </h5>
                      </a>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
              <MDBRow className="margin-p-20">
                <MDBCol sm={12} className="margin-auto">
                  <p className="text-center">
                    &copy; {new Date().getFullYear()} Urheberrechte EKM
                    GmbH
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
  )
}
}

export default footer
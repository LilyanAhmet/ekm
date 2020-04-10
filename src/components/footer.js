import React from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact"

// resources
import Logo from "../images/footer-logo.png"
import Icon from "../images/ekm-icon.svg"
const footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow>
          <MDBCol>
            <img className="img-fluid" src={Logo} />
          </MDBCol>
          <MDBCol>
            <h5 className="title">Über Uns</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Über EKM</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Berater</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Erfahrungen</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol>
            <h5 className="title">Erfahrungen</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Unternehmercoaching</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Karrieremanagament</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol>
            <h5 className="title">Verweise</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">
                  {" "}
                  <h5 className="title">Blog</h5>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!">
                  {" "}
                  <h5 className="title">Kontakt</h5>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!">
                  {" "}
                  <h5 className="title">Impressum</h5>
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol>
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
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
                Klose/Schroeder GbR
              </p>
            </MDBCol>
            <MDBCol md="4" sm="12">
              <img className="margin-m-10" src={Icon} />
            </MDBCol>
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
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default footer

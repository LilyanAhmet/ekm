import React from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
const footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow>
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
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
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
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default footer

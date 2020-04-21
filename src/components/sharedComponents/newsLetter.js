import React, { Component } from "react"
import { MDBContainer, MDBRow, MDBCol, MDBInputGroup, MDBBtn } from "mdbreact"

import Send from "../../images/send.svg"
export default class newsLetter extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <div className="newsletter desktop">
            <div className="contents">
              <MDBCol md={6} sm={12} >
                <p>Erhalten Sie in jedem Newsletter Updates zu EKM</p>
              </MDBCol>
              <MDBCol md={6} sm={12}>
                <MDBInputGroup
                  outline
                  containerClassName="mb-3 mt-0"
                  hint="Recipient's username"
                  append={
                    <MDBBtn className="m-0 px-3 py-2 z-depth-0">
                      <img className="img-fluid" src={Send} />
                    </MDBBtn>
                  }
                />
              
            </MDBCol>
            </div>
          </div>
          <div className="newsletter mobile">
            <div className="contents">
              <MDBRow sm={12} >
                <p>Erhalten Sie in jedem Newsletter Updates zu EKM</p>
              </MDBRow>
              <MDBRow sm={12}>
                <MDBInputGroup
                  outline
                  containerClassName="mb-3 mt-0"
                  hint="Recipient's username"
                  append={
                    <MDBBtn className="m-0 px-3 py-2 z-depth-0">
                      <img className="img-fluid" src={Send} />
                    </MDBBtn>
                  }
                />
              
            </MDBRow>
            </div>
          </div>
        </MDBRow>
      </MDBContainer>
    )
  }
}

import React, { Component } from "react"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
export default class serviceLong extends Component {
  render() {
    return (
      <div className="services">
        <div className="service-long">
          <MDBContainer>
          {this.props.left && (
            <MDBRow>
              <MDBCol md={5} sm={12}>
                <img className="img-fluid" src={this.props.img} />
              </MDBCol>
              <MDBCol md={7} sm={12}>
                <div className="details">
                  <div className="title">
                    <img src={this.props.icon} />
                    <h2>{this.props.title}</h2>
                  </div>
                  <p>{this.props.shortDescription}</p>
                  <div className="list">
                    <div className="block borderleft">
                      <h6>{this.props.contentOne}</h6>
                      <p>{this.props.contentOneText}</p>
                    </div>
                    <div className="block borderleft">
                      <h6>{this.props.contentTwo}</h6>
                      <p>{this.props.contentTwoText}</p>
                    </div>
                    <div className="block borderleft">
                      <h6>{this.props.contentThree}</h6>
                      <p>{this.props.contentThreeText}</p>
                    </div>
                    <div className="block borderleft">
                      <h6>{this.props.contentFour}</h6>
                      <p>{this.props.contentFourText}</p>
                    </div>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          )}
          {!this.props.left && (
            <MDBRow>

              <MDBCol md={7} sm={12}>
                <div className="details">
                  <div className="title">
                    <img src={this.props.icon} />
                    <h2>{this.props.title}</h2>
                  </div>
                  <p>{this.props.shortDescription}</p>
                  <div className="list">
                    <div className="block borderleft">
                      <h6>{this.props.contentOne}</h6>
                      <p>{this.props.contentOneText}</p>
                    </div>
                    <div className="block borderleft">
                      <h6>{this.props.contentTwo}</h6>
                      <p>{this.props.contentTwoText}</p>
                    </div>
                    <div className="block borderleft">
                      <h6>{this.props.contentThree}</h6>
                      <p>{this.props.contentThreeText}</p>
                    </div>
                    <div className="block borderleft">
                      <h6>{this.props.contentFour}</h6>
                      <p>{this.props.contentFourText}</p>
                    </div>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md={5} sm={12}>
                <img className="img-fluid" src={this.props.img} />
              </MDBCol>
            </MDBRow>
          )}
          </MDBContainer>
        </div>
      </div>
    )
  }
}

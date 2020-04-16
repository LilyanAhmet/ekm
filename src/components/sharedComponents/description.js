import React, { Component } from "react"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
export default class Description extends Component {
  render() {
    return (
      <div className="services">
        <MDBContainer size="lg">
          <MDBRow>
            <MDBCol>
              <h1 className="borderimg"> {this.props.title}</h1>
            </MDBCol>
          </MDBRow>
          <MDBRow className="margin-p-40">
            <MDBCol md={8} sm={12}>
              <p>{this.props.description}</p>
            </MDBCol>
            <MDBCol md={4} sm={12}>
              <img className="img-fluid" src={this.props.img} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

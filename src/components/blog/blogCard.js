import React, { Component } from "react"
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
} from "mdbreact"
export default class blogCard extends Component {
  render() {
    return (
      <div className="blog-card">
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <div className="text">
              <a href="#!">
                <h6 className="font-weight-bold mb-3">{this.props.cat}</h6>
              </a>
              <h3 className="font-weight-bold mb-3 p-0">{this.props.title}</h3>
              <p>{this.props.date}</p>
            </div>
            <MDBBtn size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}

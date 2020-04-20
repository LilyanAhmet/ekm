import React, { Component } from "react"
import { Nav, Tab, Col, Row, Container } from "react-bootstrap"
import { MDBContainer, MDBRow, MDBCol, MDBMask, MDBView } from "mdbreact"
export default class serviceShort extends Component {
  render() {
    return (
      <div className="services">
        <div className="service-short">
          <img className="img-fluid " src={this.props.icon} />
          <div className="text">
            <h3>{this.props.title}</h3>
            <p>{this.props.desciption}</p>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from "react"
import {MDBContainer, MDBRow, MDBCol, MDBCarouselItem} from "mdbreact"
export default class serviceLong extends React.Component {
    createbulletPoints = array => {
        console.log(array)
        let bulletPoints = []
        for (let i = 0; i < array.length; i++) {
            bulletPoints.push(
                <div className="block borderleft">
                    <h6>{array[i].title}</h6>
                    <p>{array[i].subtitle}</p>
                </div>
            )
        }
        return bulletPoints
    }
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
                      {this.createbulletPoints(this.props.bulletPoints)}
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
                      {this.createbulletPoints(this.props.bulletPoints)}
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

import React, { Component } from "react"

/* resources */
import Square from "../../images/small-square-green.svg"
import Quote from "../../images/quote-green.svg"

export default class referenceBox extends Component {
  render() {
    return (
      <div className="references">
        <div className="box-container">
          <div className="box">
            <div className="top">
              <div className="left">
                <img className="img-fluid" src={this.props.img} />
                <div className="text">
                  <h6>{this.props.name}</h6>
                  <p>{this.props.title}</p>
                </div>
              </div>
              <div className="right">
                <div className="quote"/>
              </div>
            </div>
            <div className="bottom">
              <p>{this.props.description}</p>
            </div>
            <div className="square">
              <div className="squ"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

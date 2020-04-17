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
  MDBContainer,
} from "mdbreact"

/* components */

import BlogCard from "../blog/blogCard"
export default class blogList extends Component {
  render() {
    return (
      <div className="blog-list">
        <MDBContainer>
          <MDBRow>
            <MDBCol md={8} sm={12}>
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </MDBCol>

            <MDBCol md={4} sm={12}>
              <div className="right">
                <div className="title">
                  <h3 className="darkborder">You like what you’re reading?</h3>
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus Lorem ipsum dolor sit amet, consectetuer
                    <br />
                    <br />
                    <br />
                    adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus
                  </p>
                </div>
                <MDBBtn size="md" className="waves-light">
                  Mehr Sehn
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

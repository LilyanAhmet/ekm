import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBIcon
} from "mdbreact"

/* resouces */

import Bg from "../images/bg-contact.svg"
import Phone from "../images/phone.svg"
import Mail from "../images/mail.svg"
import Address from "../images/address.svg"

export default class kontakt extends Component {
  submitHandler = event => {
    event.preventDefault()
    event.target.className += " was-validated"
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <Layout trans={true} contact={true}>
        <SEO title="kontakt" />
        <div className="contact">
          <MDBCard reverse>
            <MDBCardImage
              cascade
              className="view view-cascade gradient-card-header peach-gradient"
              tag="div"
            >
              <MDBContainer>
                <MDBRow>
                  <MDBCol md={6} sm={12}>
                    <img className="img-fluid" src={Bg} />
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <div className="right">
                      <div className="box">
                        <img src={Phone} />

                        <h3>
                          <div className="rectangle" /> +49 2 21 5796 7940
                        </h3>
                      </div>
                      <div className="box">
                        <img src={Mail} />
                        <h3>
                          <div className="rectangle" /> info@ekm.de
                        </h3>
                      </div>
                      <div className="box">
                        <img src={Address} />

                        <h3>
                          {" "}
                          <div className="rectangle" /> Bismarckstraße 73 10627
                          Berlin Germany
                        </h3>
                      </div>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCardImage>
            <MDBCardBody cascade className="text-center">
              <div class="map row">
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      title="mapfecbf7e5-9c67-5526-93c9-056ddc2c5c9d"
                      height="350"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=50.9416612,6.934918799999991&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBContainer className="form">
            <MDBRow>
              <MDBCol>
                <h1 className="borderimg"> Kontakt Formular</h1>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <div className="sub-title">
                  <h4>
                    Fragen Sie uns alles und wir werden Sie zu Ihrem Traum
                    führen.
                  </h4>
                  <p>
                    Wir lieben es, neue Leute kennenzulernen und über ihre
                    Zukunft zu plaudern. Kontaktieren Sie uns noch heute.
                  </p>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <form
                className="needs-validation"
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={this.submitHandler}
                noValidate
                data-netlify="true"
              >
                <MDBRow>
                  <MDBCol md={6} sm={12}>
                    <MDBInput
                      label="Vorname"
                      outline
                      required
                      name="forname"
                      onChange={this.changeHandler}
                    />
                    <div className="valid-tooltip">Looks good!</div>
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <MDBInput
                      label="Nachname"
                      outline
                      required
                      name="nachname"
                      onChange={this.changeHandler}
                    />
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <MDBInput
                      label="Telefon"
                      outline
                      required
                      name="telefon"
                      onChange={this.changeHandler}
                    />
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <MDBInput
                      label="E-Mail Addresse"
                      outline
                      required
                      name="mail"
                      onChange={this.changeHandler}
                    />
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <MDBInput
                      label="Addresse"
                      outline
                      required
                      name="addresse"
                      onChange={this.changeHandler}
                    />
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <MDBInput
                      label="Postleitzahl"
                      outline
                      required
                      name="postleitzahl"
                      onChange={this.changeHandler}
                    />
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <div className="md-form md-outline">
                      <select
                        className="browser-default custom-select"
                        required
                        name="land"
                        onChange={this.changeHandler}
                      >
                        <option>land</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </div>
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <div className="md-form md-outline">
                      <select
                        className="browser-default custom-select"
                        required
                        name="Stadt"
                        onChange={this.changeHandler}
                      >
                        <option>Stadt</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </div>
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <div className="md-form md-outline">
                      <select
                        className="browser-default custom-select"
                        required
                        name="welchen"
                        onChange={this.changeHandler}
                      >
                        <option>
                          Für welchen EKM-Service interessieren Sie sich?
                        </option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </div>
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <div className="md-form md-outline">
                      <select
                        className="browser-default custom-select"
                        required
                        name="ss"
                        onChange={this.changeHandler}
                      >
                        <option>Existenzgründercoaching</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </div>
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <div className="md-form md-outline">
                      <select
                        className="browser-default custom-select"
                        required
                        name="ss"
                        onChange={this.changeHandler}
                      >
                        <option>
                          Welcher Existenzgründercoaching service?
                        </option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBBtn color="default" type="submit">
                  Senden Sie Ihre Nachricht <MDBIcon icon="paper-plane" />
                  </MDBBtn>
                </MDBRow>
              </form>
            </MDBRow>
          </MDBContainer>
        </div>
      </Layout>
    )
  }
}

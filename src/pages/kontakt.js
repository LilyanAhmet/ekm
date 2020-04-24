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
  MDBIcon,
} from "mdbreact"

/* resouces */

import Bg from "../images/bg-contact.svg"
import Phone from "../images/phone.svg"
import Mail from "../images/mail.svg"
import Address from "../images/address.svg"
import { graphql } from "gatsby"
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}


class kontakt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      forname: "",
      nachname: "",
      telefon: "",
      mail: "",
      addresse: "",
      postleitzahl: "",
      Stadt: "",
      ekm_Service: "",
      Unternehmercoaching: "",
      existenzgründercoaching_service: "",
      ihre_nachricht: "",
    }
  }
  submitHandler = event => {
    event.preventDefault()
    event.target.className += " was-validated"
    if (event.target.checkValidity()) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state }),
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error))
      console.log("test")
    }
  }

  selectBoxShowHide(target,value){
    if(target == "ekm_Service" && value == "Unternehmercoaching"){
      document.getElementById("Unternehmercoaching").style.display = "block";
    }else if(target == "ekm_Service" && value != "Unternehmercoaching"){
      document.getElementById("Unternehmercoaching").style.display = "none";
      this.setState({ ["Unternehmercoaching"]: "" })

      document.getElementById("existenzgrundercoaching_service").style.display = "none";
      this.setState({ ["existenzgründercoaching_service"]: "" })
    }

    if(target == "Unternehmercoaching" && value == "Existenzgründercoaching"){
      document.getElementById("existenzgrundercoaching_service").style.display = "block";
    }else if(target == "Unternehmercoaching" && value != "Existenzgründercoaching"){
      document.getElementById("existenzgrundercoaching_service").style.display = "none";
      this.setState({ ["existenzgründercoaching_service"]: "" })
    }

  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
    if(event.target.name == "ekm_Service"  || event.target.name == "Unternehmercoaching"){
      this.selectBoxShowHide(event.target.name, event.target.value )
    }
  }

  render() {
    const {
      forname,
      nachname,
      telefon,
      mail,
      addresse,
      postleitzahl,
      Stadt,
      ekm_Service,
      Unternehmercoaching,
      existenzgründercoaching_service,
      ihre_nachricht,
    } = this.state
    return (
      <Layout trans={true} contact={true} contactData={this.props.data.contactInfo}>
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
                          <div className="rectangle" /> +49 172 392 24 07 <br />
                          +49 151 27052528
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
                name="kontakt"
                onSubmit={this.submitHandler}
                noValidate
              >
                <MDBRow>
                  <MDBCol md={6} sm={12}>
                    <MDBInput
                      label="Vorname"
                      outline
                      required
                      name="forname"
                      value={forname}
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
                      value={nachname}
                      onChange={this.changeHandler}
                    />
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <MDBInput
                      label="Telefon"
                      outline
                      required
                      name="telefon"
                      value={telefon}
                      onChange={this.changeHandler}
                    />
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <MDBInput
                      label="E-Mail Addresse"
                      outline
                      type="email"
                      required
                      name="mail"
                      value={mail}
                      onChange={this.changeHandler}
                    />
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <MDBInput
                      label="Addresse"
                      outline
                      required
                      name="addresse"
                      value={addresse}
                      onChange={this.changeHandler}
                    />
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <MDBInput
                      label="Postleitzahl"
                      outline
                      required
                      name="postleitzahl"
                      value={postleitzahl}
                      onChange={this.changeHandler}
                    />
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <div className="md-form md-outline">
                      <select
                        className="browser-default custom-select"
                        required
                        name="Stadt"
                        value={Stadt}
                        onChange={this.changeHandler}
                      >
                        <option>Stadt</option>
                        <option value="Hanover">Hanover</option>
                      </select>
                    </div>
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <div className="md-form md-outline">
                      <select
                        className="browser-default custom-select"
                        required
                        name="ekm_Service"
                        value={ekm_Service}
                        onChange={this.changeHandler}
                      >
                        <option>
                          Für welchen EKM-Service interessieren Sie sich?
                        </option>
                        <option value="Unternehmercoaching">
                          Unternehmercoaching
                        </option>
                        <option value="Karrieremanagament">
                          Karrieremanagament
                        </option>
                      </select>
                    </div>
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <div className="md-form md-outline" style={{display:"none"}} id="Unternehmercoaching">
                      <select
                        className="browser-default custom-select"
                        required
                        name="Unternehmercoaching"
                        id="UnternehmercoachingInput"
                        value={Unternehmercoaching}
                        onChange={this.changeHandler}
                      >
                        <option value="">Welcher Unternehmercoaching Service?</option>
                        <option value="Existenzgründercoaching">
                          Existenzgründercoaching
                        </option>
                        <option value="Coaching bei besonderen Herausforderungen">
                          Coaching bei besonderen Herausforderungen{" "}
                        </option>
                        <option value="Beratung bei Fragen der Unternehmensnachfolge">
                          Beratung bei Fragen der Unternehmensnachfolge
                        </option>
                      </select>
                    </div>
                  </MDBCol>
                  <MDBCol md={6} sm={12}>
                    <div className="md-form md-outline" style={{display:"none"}} id="existenzgrundercoaching_service">
                      <select
                        className="browser-default custom-select"
                        required
                        name="existenzgründercoaching_service"
                        id="existenzgrundercoaching_serviceInput"
                        value={existenzgründercoaching_service}
                        onChange={this.changeHandler}
                      >
                        <option>
                          Welcher Existenzgründercoaching service?
                        </option>
                        <option value="Freie Beratung">Freie Beratung</option>
                        <option value="AVGS Beratung">AVGS Beratung</option>
                      </select>
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol sm={12}>
                    <MDBInput
                      type="textarea"
                      label="Ihre Nachricht"
                      outline
                      rows="4"
                      name="ihre_nachricht"
                      value={ihre_nachricht}
                      onChange={this.changeHandler}
                    />
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

export default kontakt
export const query = graphql`
query {
    contactInfo:contentfulCompanyInfo {
      phoneNumber1
      phoneNumber2
      eMailAddresse
    }
  }
`

import { Link } from "gatsby"
import React from "react"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact"
import { graphql, StaticQuery } from "gatsby"

import Logo from "../images/ekm-logo.png"

class Header extends React.Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const contactData = this.props.contactData
    return (
        <header>
          <MDBNavbar expand="lg" id="nav-bg">
            <MDBNavbarBrand>
              <a href="/"><img src={Logo} className="white-text" /></a>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
              <MDBNavItem>
                  <Link className="nav-link waves-effect waves-light" to="/ueber-ekm">
                    Über Uns
                  </Link>
              </MDBNavItem>
                
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-2">Dienstleistungen</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="/unternehmerberatung">Unternehmerberatung</MDBDropdownItem>
                      <MDBDropdownItem href="/karrieremanagement">Karrieremanagement </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                {/* 
                <MDBNavItem>
                  <Link className="nav-link waves-effect waves-light" to="/referenzen">
                    Referenzen
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link className="nav-link waves-effect waves-light" to="/blog">
                    Blog
                  </Link>
                </MDBNavItem>
                */}
                <MDBNavItem>
                  <Link className="nav-link waves-effect waves-light" to="/kontakt">
                    Kontakt
                  </Link>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <a className="nav-link waves-effect waves-light" href="tel:00491723922407">
                    <MDBIcon
                        fas
                        icon="phone"
                        style={{ transform: "scaleX(-1)",marginRight:"10px" }}
                    />
                    {contactData.phoneNumber1}
                  </a>
                  <Link
                      className="nav-link waves-effect waves-light margin-m-30"

                      href="tel:004915127052528"
                  >
                    <span style={{marginRight:"31px"}} />
                    {contactData.phoneNumber2}
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <a href="mailto:info@ekm-erfolg.de" className="nav-link waves-effect waves-light">
                    <MDBIcon fas icon="envelope" style={{marginRight:"10px" }}/> {contactData.eMailAddresse}
                  </a>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
    )
  }
}
export default Header

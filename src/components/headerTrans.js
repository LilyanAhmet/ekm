import { graphql, Link, StaticQuery } from "gatsby"
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

import Logo from "../images/ekm-logo.png"

class HeaderTrans extends React.Component {
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
        <MDBNavbar expand="lg" transparent fixed="top">
          <MDBNavbarBrand>
            <a href="/">
              <img src={Logo} className="white-text" />
            </a>
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
                    <MDBDropdownItem href="/unternehmerberatung">
                      Unternehmerberatung
                    </MDBDropdownItem>
                    <MDBDropdownItem href="/karrieremanagament">
                      Karrieremanagament{" "}
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              {/*
              <MDBNavItem>
                <Link
                  className="nav-link waves-effect waves-light"
                  to="/referenzen"
                >
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
                <Link
                  className="nav-link waves-effect waves-light"
                  to="/kontakt"
                >
                  Kontakt
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>

            {!this.props.contact && (
              <MDBNavbarNav right>
                <MDBNavItem>
                  <Link className="nav-link waves-effect waves-light" to="#!">
                    <MDBIcon
                      fas
                      icon="phone"
                      style={{ transform: "scaleX(-1)", marginRight: "10px" }}
                    />
                    {contactData.phoneNumber1}
                  </Link>
                  <Link
                    className="nav-link waves-effect waves-light margin-m-30 "
                    to="#!"
                  >
                    <span style={{ marginRight: "31px" }} />
                    {contactData.phoneNumber2}
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link className="nav-link waves-effect waves-light" to="#!">
                    <MDBIcon fas icon="envelope" style={{ marginRight: "10px" }} /> {contactData.eMailAddresse}
                  </Link>
                </MDBNavItem>
              </MDBNavbarNav>
            )}
          </MDBCollapse>
        </MDBNavbar>
      </header>
    )
  }
}
export default HeaderTrans

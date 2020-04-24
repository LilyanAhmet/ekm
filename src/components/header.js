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
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-2">Über Uns</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="/ueber-ekm">Über EKM</MDBDropdownItem>
                      <MDBDropdownItem href="/berater">Berater </MDBDropdownItem>
                      <MDBDropdownItem href="/erfahrungen">Erfahrungen</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-2">Dienstleistungen</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="/unternehmerberatung">Unternehmerberatung</MDBDropdownItem>
                      <MDBDropdownItem href="/karrieremanagament">Karrieremanagament </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
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
                        style={{ transform: "scaleX(-1)" }}
                    />
                    +49 172 392 24 07
                  </a>
                  <a
                      className="nav-link waves-effect waves-light margin-m-10 "

                      href="tel:004915127052528"
                  >
                    <span style={{marginRight:"21px"}} />
                    +49 151 27052528
                  </a>
                </MDBNavItem>
                <MDBNavItem>
                  <a className="nav-link waves-effect waves-light" href="mailto:info@ekm.de">
                    <MDBIcon fas icon="envelope" /> info@ekm.de
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

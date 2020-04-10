import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./css/main.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout

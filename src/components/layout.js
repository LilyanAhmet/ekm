import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import HeaderTrans from "./headerTrans"
import Footer from "./footer"
import "./css/main.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"


class Layout extends React.Component {
    render() {
        const contactData = this.props.contactData
        return (
            <>
                {!this.props.trans && (
                    <Header contactData={contactData} />
                )}
                {this.props.trans && (
                    <HeaderTrans contactData={contactData} contact={this.props.contact} />
                )}

                <main>{this.props.children}</main>
                <Footer contactData={contactData}/>
            </>
        )
    }
}

export default Layout
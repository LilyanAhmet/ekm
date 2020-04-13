


import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class karrieremanagament extends React.Component {
    render() {
        const graphData = this.props.data
        console.log(graphData);
        return (
            <Layout>
                <SEO title="karrieremanagament"/>
                <div>{graphData.allContentfulServicePage.edges[0].node.title}</div>
                <div>{graphData.allContentfulServicePage.edges[0].node.text.text}</div>
                <div>{graphData.allContentfulServicePage.edges[1].node.title}</div>
                <div>{graphData.allContentfulServicePage.edges[1].node.text.text}</div>
            </Layout>
        )
    }
}
export default karrieremanagament

export const query = graphql`
  query {
  allContentfulServicePage {
    edges {
      node {
        title
        text {
          text
        }
      }
    }
  }
}


`


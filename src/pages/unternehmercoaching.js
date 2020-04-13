import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class unternehmercoaching extends React.Component {
    render() {
        const graphData = this.props.data
        console.log(graphData.allContentfulServicePage);
        return (
            <Layout>
                <SEO title="unternehmercoaching"/>
                <div>{graphData.allContentfulServicePage.edges[0].node.title}</div>
                <div>{graphData.allContentfulServicePage.edges[0].node.text.text}</div>
                <div>{graphData.allContentfulServicePage.edges[1].node.title}</div>
                <div>{graphData.allContentfulServicePage.edges[1].node.text.text}</div>
            </Layout>
        )
    }
}
export default unternehmercoaching

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


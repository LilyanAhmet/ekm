import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class erfahrungen extends React.Component {
    render() {
        const graphData = this.props.data
        console.log(graphData);
        return (
            <Layout>
                <SEO title="erfahrungen"/>
                <div>{graphData.allContentfulErfahrungen.nodes[0].text.text}</div>
            </Layout>
        )
    }
}
export default erfahrungen

export const query = graphql`
    query  {
  allContentfulErfahrungen {
    nodes {
      text {
        text
      }
    }
  }
}
`
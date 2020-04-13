import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from "gatsby";
class berater extends React.Component {
    render() {
        const graphData = this.props.data
        console.log(graphData);
        return (
            <Layout>
                <SEO title="berater"/>
                <div>{graphData.allContentfulConsultant.edges[0].node.name}</div>
                <div>{graphData.allContentfulConsultant.edges[0].node.description.description}</div>
                <div>{graphData.allContentfulConsultant.edges[1].node.name}</div>
                <div>{graphData.allContentfulConsultant.edges[1].node.existenzgrndungsberatung.existenzgrndungsberatung}</div>
            </Layout>
        )
    }
}

export default berater


export const query = graphql`
       query {
  allContentfulConsultant {
    edges {
      node {
        name
        photo {
          fluid {
            src
          }
        }
        description {
          description
        }
        businessDevelopment {
          businessDevelopment
        }
        existenzgrndungsberatung {
          existenzgrndungsberatung
        }
        zertifizierungen {
          fluid {
            src
          }
        }
      }
    }
  }
}
`
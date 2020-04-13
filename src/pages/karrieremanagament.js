


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
                <div>{graphData.contentfulServicePage.title.text}</div>
            </Layout>
        )
    }
}
export default karrieremanagament

export const query = graphql`
query {
    contentfulServicePage {
        title
        text {
            text
        }
        serviceShort {
            icon {
                fluid {
                    src
                }
            }
            title
            description
        }
        serviceLong {
        ... on ContentfulServiceLong {
                icon {
                    fluid {
                        src
                    }
                }
                title
                subtitle
                content1Title
                content1Text
                content2Title
                content2Text
                content3Text
                content3Title
            }
        }
    }
}

`



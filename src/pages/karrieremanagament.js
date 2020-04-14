import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

/*components */
import Description from "../components/sharedComponents/description"
import ServiceShort from "../components/sharedComponents/serviceShort"
import ServiceLong from "../components/sharedComponents/serviceLong"
/* resources */
import karImage from "../images/Unternehmercoaching.svg"
import IconOne from "../images/icon1.svg"
import IconTwo from "../images/icon2.svg"
import IconThree from "../images/icon3.svg"
import IconFour from "../images/icon4.svg"
import LongImg from "../images/longImg.svg"
class karrieremanagament extends React.Component {
  render() {
    const graphData = this.props.data
    console.log(graphData)
    return (
      <Layout>
        <SEO title="karrieremanagament" />
        <Description
          title={graphData.allContentfulServicePage.edges[0].node.title}
          description={
            graphData.allContentfulServicePage.edges[0].node.text.text
          }
          img={karImage}
        />
                <MDBContainer size="lg">
          <MDBRow>
            <MDBCol md={6} sm={12}>
              <ServiceShort
                icon={IconOne}
                title="Bewerbercoaching"
                desciption="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
              />
            </MDBCol>
            <MDBCol md={6} sm={12}>
              <ServiceShort
                icon={IconTwo}
                title="Bewerbercoaching"
                desciption="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
              />
            </MDBCol>
            <MDBCol md={6} sm={12}>
              <ServiceShort
                icon={IconThree}
                title="Bewerbercoaching"
                desciption="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
              />
            </MDBCol>
            <MDBCol md={6} sm={12}>
              <ServiceShort
                icon={IconFour}
                title="Bewerbercoaching"
                desciption="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer fluid className="bggray">
          <ServiceLong
            img={LongImg}
            icon={IconOne}
            title="Existenzgründercoaching"
            shortDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
            contentOne="content1"
            contentOneText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
            contentTwo="content1"
            contentTwoText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
            contentThree="content1"
            contentThreeText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
            contentFour="content1"
            contentFourText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
            left = {true}         />
           <ServiceLong
            img={LongImg}
            icon={IconOne}
            title="Existenzgründercoaching"
            shortDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
            contentOne="content1"
            contentOneText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
            contentTwo="content1"
            contentTwoText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
            contentThree="content1"
            contentThreeText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
            contentFour="content1"
            contentFourText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
            left = {false}
         />
        </MDBContainer>
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

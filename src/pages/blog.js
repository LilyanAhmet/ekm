import React, {Component} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBContainer,
} from "mdbreact"
/* components */
import NewLetter from "../components/sharedComponents/newsLetter"
import Bloglist from "../components/blog/blogList"
import {graphql} from "gatsby";
import BlogCard from "../components/blog/blogCard";
export default class blog extends Component {
  render() {
    const graphData = this.props.data
    return (
        <Layout contactData={graphData.contactInfo}>
          <SEO title="blog"/>
          <div className="blog">
            <MDBContainer>
              <MDBRow>
                <MDBCol>
                  <h1 className="borderimg"> {graphData.allContentfulSinglePage.edges[0].node.title}</h1>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <div className="sub-title">
                    <p>
                      {graphData.allContentfulSinglePage.edges[0].node.text1.text1}
                    </p>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <Bloglist blogContent={graphData.allContentfulBlogContent.edges}/>
            <MDBContainer>
             {/*<NewLetter/> */} 
            </MDBContainer>
          </div>
        </Layout>
    )
  }
}

export const query = graphql`
{
  allContentfulSinglePage(filter: {id: {eq: "77ccdb7c-b23a-5604-ae89-4858657baff4"}}) {
    edges {
      node {
        title
        text1 {
          text1
          }
      }
    }
  }
  allContentfulBlogContent(sort: {fields: content}) {
    edges {
      node {
        content
        blogPosts {
          title
          slug
          createdAt(formatString: "Do MMMM YYYY")
        }
      }
    }
  }
  contactInfo:contentfulCompanyInfo {
    phoneNumber1
    phoneNumber2
    eMailAddresse
  }
}

`
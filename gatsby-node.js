
const path = require(`path`)
// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql }) => {
    const {createPage} = actions
    const blogTemplate = path.resolve(`src/templates/blog-template.js`)
    const result = await graphql(`
    {
  allContentfulPost {
    edges {
      node {
        slug
        title
        author
        createdAt(formatString: "Do MMMM YYYY")
        blog_content {
          content
        }
      }
    }
  }
}
  `)
    console.log(result);
    if (result.errors) {
        console.log(result.errors)
        throw new Error("Errors on Console.")
    }
    result.data.allContentfulPost.edges.forEach(({node}) => {
        console.log(node);
        createPage({
            path: node.slug,
            component: blogTemplate,
            context: {
                author: node.author,
                title: node.title,
                contents: node.blog_content,
                createdAt: node.createdAt
            },
        })
    })

}
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/src\/pages/)) {
    page.matchPath = "/src/pages/*"
    // Update the page.
    createPage(page)
  }
}


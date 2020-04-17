
const path = require(`path`)
// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql }) => {
    const {createPage} = actions
    const blogTemplate = path.resolve(`src/templates/blog-template.js`)
    const result = await graphql(`
    query {
  allContentfulPost {
    edges {
      node {
        slug
        title
        date
        author
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
                house: `Gryffindor`,
            },
        })
    })

}

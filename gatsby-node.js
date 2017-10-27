const path = require(`path`);

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/single.js`);
    const pageTemplate = path.resolve(`src/templates/page.js`);
    const archiveTemplate = path.resolve(`src/templates/archive.js`);

    resolve(
      graphql(`
        {
          allWordpressPage {
            edges {
              node {
                wordpress_id
                slug
                status
              }
            }
          }
          allWordpressPost {
            edges {
              node {
                wordpress_id
                slug
                status
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          console.log(result);
          reject(result.errors);
        }
        // Create pages
        result.data.allWordpressPage.edges.forEach(({ node }) => {
          if (node.status === "publish") {
            if (node.slug === "blog") {
              createPage({
                path: `/${node.slug}/`,
                component: archiveTemplate,
                context: {
                  id: node.wordpress_id
                }
              });
            } else {
              createPage({
                path: `/${node.slug}/`,
                component: pageTemplate,
                context: {
                  id: node.wordpress_id
                }
              });
            }
          }
        });
        // Create Posts
        result.data.allWordpressPost.edges.forEach(({ node }) => {
          if (node.status === "publish") {
            createPage({
              path: `/${node.slug}/`,
              component: postTemplate,
              context: {
                id: node.wordpress_id
              }
            });
          }
        });

        return;
      })
    );
  });
};

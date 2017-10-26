import React from "react";
import Link from "gatsby-link";

const IndexPage = props => (
  <div>
    <h1>All Pages</h1>
    {props.data.allWordpressPage.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.slug}>
          <h3>{node.title}</h3>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    ))}
    <h1>All Posts</h1>
    {props.data.allWordpressPost.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.slug}>
          <h3>{node.title}</h3>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    ))}
  </div>
);

export default IndexPage;

export const indexQuery = graphql`
  query indexQuery {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
  }
`;

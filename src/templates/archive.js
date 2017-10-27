import React from "react";
import Link from "gatsby-link";
import { postClasses } from "../utilities/functions";

const ArchiveTemplate = props => (
  <div>
    <h1>{props.data.wordpressPage.title}</h1>
    {props.data.allWordpressPost.edges.map(({ node }) => (
      <article key={`post-${node.wordpress_id}`} className={postClasses(node)}>
        <Link to={node.slug}>
          <h2>{node.title}</h2>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        <Link to={node.slug}>Read More</Link>
      </article>
    ))}
  </div>
);

export default ArchiveTemplate;

export const archiveQuery = graphql`
  query postArchiveQuery($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      content
    }
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          wordpress_id
          title
          date
          excerpt
          slug
          type
          status
          format
          categories {
            slug
          }
        }
      }
    }
  }
`;

import React from "react";
import { postClasses } from "../utilities/functions";

const PostTemplate = props => (
  <article className={postClasses(props.data.wordpressPost)}>
    <h1 dangerouslySetInnerHTML={{ __html: props.data.wordpressPost.title }} />
    <div
      dangerouslySetInnerHTML={{ __html: props.data.wordpressPost.content }}
    />
  </article>
);

export default PostTemplate;

export const postQuery = graphql`
  query currentPostQuery($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      wordpress_id
      title
      date
      content
      slug
      type
      status
      format
      categories {
        slug
      }
    }
  }
`;

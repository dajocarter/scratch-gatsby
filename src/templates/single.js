import React from "react";

const PostTemplate = props => (
  <div>
    <h1 dangerouslySetInnerHTML={{ __html: props.data.wordpressPost.title }} />
    <div
      dangerouslySetInnerHTML={{ __html: props.data.wordpressPost.content }}
    />
  </div>
);

export default PostTemplate;

export const postQuery = graphql`
  query currentPostQuery($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
    }
  }
`;

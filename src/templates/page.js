import React from "react";

const PageTemplate = props => (
  <div>
    <h1 dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.title }} />
    <div
      dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.content }}
    />
  </div>
);

export default PageTemplate;

export const pageQuery = graphql`
  query currentPageQuery($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      content
    }
  }
`;

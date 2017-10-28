import React from "react";
import { postClasses } from "../utilities/functions";

const PageTemplate = props => (
  <article className={postClasses(props.data.wordpressPage)}>
    <h1 dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.title }} />
    <div
      dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.content }}
    />
  </article>
);

export default PageTemplate;

export const pageQuery = graphql`
  query currentPageQuery($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      wordpress_id
      title
      date
      content
      slug
      type
      status
    }
  }
`;

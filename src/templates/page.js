import React from "react";
import styled from "styled-components";
import { postClasses } from "../utilities/functions";

const Article = styled.article`
	margin: 0 auto;
	max-width: 1024px;
	padding: 0px 1.0875rem 1.45rem;
`;

const PageTemplate = props => (
	<Article className={postClasses(props.data.wordpressPage)}>
		<h1 dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.title }} />
		<div
			dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.content }}
		/>
	</Article>
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

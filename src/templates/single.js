import React from "react";
import styled from "styled-components";
import { postClasses } from "../utilities/functions";

const Article = styled.article`
	margin: 0 auto;
	max-width: 1024px;
	padding: 0px 1.0875rem 1.45rem;
`;

const PostTemplate = props => (
	<Article className={postClasses(props.data.wordpressPost)}>
		<h1 dangerouslySetInnerHTML={{ __html: props.data.wordpressPost.title }} />
		<div
			dangerouslySetInnerHTML={{ __html: props.data.wordpressPost.content }}
		/>
	</Article>
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

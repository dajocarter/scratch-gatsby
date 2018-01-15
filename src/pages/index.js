import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const Article = styled.article`
	margin: 0 auto;
	max-width: 1024px;
	padding: 0px 1.0875rem 1.45rem;
`;

const IndexPage = props => (
	<Article>
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
				<Link to={node.slug}>Read More</Link>
			</div>
		))}
	</Article>
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

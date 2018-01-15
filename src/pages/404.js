import React from "react";
import styled from "styled-components";

const Article = styled.article`
	margin: 0 auto;
	max-width: 1024px;
	padding: 0px 1.0875rem 1.45rem;
`;

const NotFoundPage = () => (
	<Article>
		<h1>PAGE NOT FOUND</h1>
		<p>Sorry, but the page you were trying to view does not exist.</p>
	</Article>
);

export default NotFoundPage;

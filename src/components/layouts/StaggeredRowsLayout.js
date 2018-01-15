import React, { Component } from "react";
import styled from "styled-components";
import { darken } from "polished";
import Link from "gatsby-link";

const StaggeredRows = styled.section``;

const Row = styled.div`
	width: 100vw;
	position: relative;
	left: 50%;
	right: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	background-color: ${props => (props.order % 2 ? `#fff` : `#ccc`)};
`;

const Wrap = styled.div`
	margin: 0 auto;
	max-width: 1024px;
	padding: 3rem 1rem;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		justify-content: space-between;
	}
`;

const ImageContainer = styled.div`
	flex: 0 0 100%;
	padding-bottom: 3rem;
	@media (min-width: 768px) {
		flex: 0 0 250px;
		order: ${props => (props.order % 2 ? 1 : 2)};
		padding-bottom: 0;
	}
`;

const Circle = styled.div`
	height: 250px;
	width: 250px;
	border-radius: 50%;
	margin: 0 auto;
	background-image: ${props => `url(${props.url})`};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const ContentContainer = styled.div`
	@media (max-width: 767px) {
		flex: 0 0 100%;
		text-align: center;
	}
	@media (min-width: 768px) {
		flex: 0 0 60%;
		order: ${props => (props.order % 2 ? 2 : 1)};
		text-align: ${props => (props.order % 2 ? `right` : `left`)};
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Content = styled.div``;

const Header = styled.h2`
	margin-top: 0;
`;

const Blurb = styled.div`
	p {
		&:first-child {
			margin-top: 0;
		}

		&:last-child {
			margin-bottom: 0;
		}
	}
`;

const Button = styled(Link)`
	background: #3d9970;
	border-radius: 0.125rem;
	color: #fff;
	display: inline-block;
	margin-top: 1rem;
	padding: 1rem;
	text-decoration: none;

	&:hover {
		background: ${darken(0.05, `#3d9970`)};
	}
`;

class StaggeredRowsLayout extends Component {
	render() {
		const layout = this.props.layout;
		return (
			<StaggeredRows>
				{layout.rows.map((row, index) => (
					<Row key={`row-${index}`} order={index}>
						<Wrap>
							<ImageContainer order={index}>
								<Circle url={row.image.localFile.childImageSharp.resize.src} />
							</ImageContainer>
							<ContentContainer order={index}>
								<Content>
									<Header>{row.header}</Header>
									<Blurb dangerouslySetInnerHTML={{ __html: row.blurb }} />
									{row.add_button ? (
										<Button
											to={row.button_link.url}
											target={row.button_link.target}
										>
											{row.button_link.title}
										</Button>
									) : null}
								</Content>
							</ContentContainer>
						</Wrap>
					</Row>
				))}
			</StaggeredRows>
		);
	}
}

export default StaggeredRowsLayout;

import React, { Component } from "react";
import styled from "styled-components";
import { darken } from "polished";
import Link from "gatsby-link";
import Img from "gatsby-image";

const Cards = styled.section`
	margin: 0 auto 2rem;
	max-width: 1024px;
`;

const Wrap = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-content: center;
`;

const Card = styled.div`
	flex: 0 0 22.5%;
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: white;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
`;

const CardImg = styled(Img)`
	border-top-right-radius: calc(0.25rem - 1px);
	border-top-left-radius: calc(0.25rem - 1px);
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
`;

const CardBlock = styled.div`
	flex: 1 1 auto;
	padding: 1rem;
`;

const CardTitle = styled.h4`
	margin-bottom: 0.75rem;
`;

const CardText = styled.div``;

const Blurb = styled.div``;

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

const CardsLayout = props => (
	<Cards>
		<Wrap>
			{props.layout.cards.map((card, index) => (
				<Card key={`card-${index}`}>
					{card.image ? (
						<CardImg sizes={card.image.localFile.childImageSharp.sizes} />
					) : null}
					<CardBlock>
						<CardTitle>{card.header}</CardTitle>
						<CardText>
							<Blurb dangerouslySetInnerHTML={{ __html: card.blurb }} />
							{card.add_button ? (
								<Button
									to={card.button_link.url}
									target={card.button_link.target}
								>
									{card.button_link.title}
								</Button>
							) : null}
						</CardText>
					</CardBlock>
				</Card>
			))}
		</Wrap>
	</Cards>
);

export default CardsLayout;

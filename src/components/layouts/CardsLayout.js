import React, { Component } from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import "./CardsLayout.scss";

const CustomCard = props => (
	<div className="card">
		{props.data.image ? (
			<Img
				sizes={props.data.image.localFile.childImageSharp.sizes}
				className="card-img-top"
			/>
		) : null}
		<div className="card-block">
			<h4 className="card-title">
				{props.data.add_button ? (
					<Link
						to={
							props.data.internal_link
								? props.data.button_internal_link
								: props.data.button_external_link
						}
						target={props.data.internal_link ? `` : `_blank`}
					>
						props.data.header
					</Link>
				) : (
					props.data.header
				)}
			</h4>
			<div
				className="card-text"
				dangerouslySetInnerHTML={{ __html: props.data.blurb }}
			/>
		</div>
	</div>
);

class CardsLayout extends Component {
	render() {
		const layout = this.props.layout;
		return (
			<section className="cards">
				<div className="wrap">
					{layout.cards.map((card, index) => (
						<CustomCard key={`card-${index}`} data={card} />
					))}
				</div>
			</section>
		);
	}
}

export default CardsLayout;

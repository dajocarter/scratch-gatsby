import React, { Component } from "react";
import Link from "gatsby-link";
import "./HeroLayout.scss";

class HeroLayout extends Component {
	render() {
		const layout = this.props.layout;
		return (
			<section className={`hero-unit`}>
				<div
					className="scratch-bg"
					style={{
						backgroundImage: `url(${
							layout.background_image.localFile.childImageSharp.original.src
						})`,
						backgroundPosition: `${layout.bg_image_pos_x} ${
							layout.bg_image_pos_y
						}`
					}}
				>
					<div className="overlay" />
					<div className="wrap">
						<div
							className={`content ${layout.text_align}`}
							style={{ padding: `${layout.text_margin}rem 0` }}
						>
							<h2 className="layout-header">{layout.header}</h2>
							<div dangerouslySetInnerHTML={{ __html: layout.blurb }} />
							{layout.add_button ? (
								<p className="button-wrapper">
									<Link
										to={layout.button_link.url}
										target={layout.button_link.target}
									>
										{layout.button_link.title}
									</Link>
								</p>
							) : null}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default HeroLayout;

import React, { Component } from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import "./ImagesWithTextLayout.scss";

class ImagesWithTextLayout extends Component {
	render() {
		const layout = this.props.layout;
		let imageClass = "";
		switch (layout.images.length) {
			case 1:
				imageClass = "full";
				break;
			case 2:
				imageClass = "half";
				break;
			case 3:
				imageClass = "third";
				break;
			case 4:
				imageClass = "quarter";
		}
		return (
			<section className="multiple">
				<div className="wrap">
					<div
						className={
							layout.image_side ? `images sixcol last` : `images sixcol first`
						}
					>
						<div className="gallery">
							{layout.images.map((image, index) => (
								<img
									key={index}
									src={image.localFile.childImageSharp.resolutions.src}
									className={imageClass}
								/>
							))}
						</div>
					</div>
					<div
						className={
							layout.image_side ? `content sixcol first` : `content sixcol last`
						}
					>
						<h2>{layout.header}</h2>
						<div dangerouslySetInnerHTML={{ __html: layout.content }} />
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
			</section>
		);
	}
}

export default ImagesWithTextLayout;

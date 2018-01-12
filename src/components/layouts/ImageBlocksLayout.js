import React, { Component } from "react";
import "./ImageBlocksLayout.scss";

class ImageBlocksLayout extends Component {
	render() {
		const layout = this.props.layout;
		return (
			<section className="image-blocks">
				<div className="wrap">
					{layout.image_blocks.map((block, index) => (
						<div
							key={index}
							className="tile"
							style={{
								backgroundImage: `url(${
									block.background_image.localFile.childImageSharp.original.src
								})`
							}}
						>
							<div className="overlay" />
							<div
								className="animated post-content"
								data-animate={block.animation}
							>
								<h3 className="layout-header">{block.header}</h3>

								<div dangerouslySetInnerHTML={{ __html: block.blurb }} />

								{block.add_button ? (
									<p className="button-wrapper">
										<Link
											to={block.button_link.url}
											target={block.button_link.target}
										>
											{block.button_link.title}
										</Link>
									</p>
								) : null}
							</div>
						</div>
					))}
				</div>
			</section>
		);
	}
}

export default ImageBlocksLayout;

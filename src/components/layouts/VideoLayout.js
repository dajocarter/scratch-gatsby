import React, { Component } from "react";
import "./VideoLayout.scss";

class VideoLayout extends Component {
	render() {
		const layout = this.props.layout;
		return (
			<section className="video">
				{layout.video_fallback_image ? (
					<div
						className="scratch-video"
						style={{
							backgroundImage: `url(
								${layout.video_fallback_image.localFile.childImageSharp.resolutions.src}
							)`
						}}
					/>
				) : null}
				<video
					className="scratch-video"
					style={{
						backgroundImage: `url(
								${layout.video_fallback_image.localFile.childImageSharp.resolutions.src}
							)`
					}}
					poster={`${
						layout.video_fallback_image.localFile.childImageSharp.resolutions
							.src
					}`}
					controls={layout.video_attributes.includes("controls") ? true : null}
					muted={layout.video_attributes.includes("muted") ? true : null}
					autoPlay={layout.video_attributes.includes("autoplay") ? true : null}
					loop={layout.video_attributes.includes("loop") ? true : null}
				>
					{layout.video_webm_file ? (
						<source src={layout.video_webm_file} type="video/webm" />
					) : null}
					{layout.video_mp4_file ? (
						<source src={layout.video_mp4_file} type="video/mp4" />
					) : null}
					{layout.video_ogv_file ? (
						<source src={layout.video_ogv_file} type="video/ogg" />
					) : null}
				</video>
			</section>
		);
	}
}

export default VideoLayout;

import React, { Component } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "./Slick.scss";

class LogoSlick extends Component {
	render() {
		const settings = {
			autoplay: true,
			dots: false,
			arrows: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};

		return (
			<Slider className="logo-display slide-logos" {...settings}>
				{this.props.logos.map((image, index) => (
					<div key={`logo-${index}`} className="logo-img">
						{image.link ? (
							<Link to={image.link.url}>
								<img
									src={image.logo.localFile.childImageSharp.resolutions.src}
								/>
							</Link>
						) : (
							<img src={image.logo.localFile.childImageSharp.resolutions.src} />
						)}
					</div>
				))}
			</Slider>
		);
	}
}

// LogoSlick.propTypes = {
//   logos: PropTypes.object.isRequired
// };

export default LogoSlick;

import React, { Component } from "react";
import PropTypes from "prop-types";
import FaChevronLeft from "react-icons/lib/fa/chevron-left";
import FaChevronRight from "react-icons/lib/fa/chevron-right";
import Slider from "react-slick";
import "../Slick.scss";
class SliderLayout extends Component {
	render() {
		const settings = {
			autoplay: true,
			autoplaySpeed: 3000,
			dots: true,
			arrows: true,
			prevArrow: (
				<button type="button">
					<FaChevronLeft aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</button>
			),
			nextArrow: (
				<button type="button">
					<span className="sr-only">Next</span>
					<FaChevronRight aria-hidden="true" />
				</button>
			)
		};

		return (
			<Slider {...settings}>
				{this.props.layout.slides.map((slide, index) => (
					<div
						key={`slide-${index}`}
						style={{
							backgroundImage: `url(${
								slide.background.localFile.childImageSharp.original.src
							})`
						}}
					>
						<div className="overlay" />
						<div className="wrapper">
							<div className="slide-text">
								<h2 className="layout-header slide-header">{slide.header}</h2>
								<div dangerouslySetInnerHTML={{ __html: slide.blurb }} />
							</div>
						</div>
					</div>
				))}
			</Slider>
		);
	}
}

SliderLayout.propTypes = {
	layout: PropTypes.object.isRequired
};

export default SliderLayout;

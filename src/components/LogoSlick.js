import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Slider from "react-slick";

const LogoSlider = styled.div``;

const Slide = styled.div`
  text-align: center;
`;

const SlideImg = styled(Img)`
  display: block;
  margin-bottom: 2rem;
`;
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
            infinite: true
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
      <LogoSlider>
        <Slider {...settings}>
          {this.props.logos.map((image, index) => (
            <Slide key={`logo-${index}`}>
              {image.link ? (
                <Link to={image.link}>
                  <SlideImg
                    resolutions={
                      image.logo.localFile.childImageSharp.resolutions
                    }
                  />
                </Link>
              ) : (
                <SlideImg
                  resolutions={image.logo.localFile.childImageSharp.resolutions}
                />
              )}
            </Slide>
          ))}
        </Slider>
      </LogoSlider>
    );
  }
}

// LogoSlick.propTypes = {
//   logos: PropTypes.object.isRequired
// };

export default LogoSlick;

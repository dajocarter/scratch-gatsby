import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";
import {
  LayoutSection,
  Wrap,
  BackgroundImage,
  Overlay,
  LayoutBlurb,
  Button
} from "../Styles";
import FaChevronLeft from "react-icons/lib/fa/chevron-left";
import FaChevronRight from "react-icons/lib/fa/chevron-right";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSection = LayoutSection.extend`
  margin-bottom: 2rem;

  .slick-slider {
    .slick-arrow {
      background-color: transparent;
      height: auto;
      padding: 0;
      width: auto;
      z-index: 1;
      color: white;
      font-size: 2rem;
      opacity: 0.75;

      &.slick-prev {
        left: 25px;
      }

      &.slick-next {
        right: 25px;
      }

      &:before {
        content: "";
      }

      &:hover,
      &:focus {
        outline: none;
        opacity: 1;
      }

      .sr-only {
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute !important;
        width: 1px;
        word-wrap: normal !important;
      }
    }

    &.slick-dotted {
      margin-bottom: 0;
    }

    .slick-dots {
      bottom: 5%;
      line-height: 0;

      li {
        height: 15px;
        width: 15px;
      }

      .slick-active {
        button {
          &::before {
            color: white;
          }
        }
      }

      button {
        background-color: transparent;
        height: 15px;
        padding: 0;
        width: 15px;

        &::before {
          color: white;
          font-size: 15px;
          height: 15px;
          line-height: 17px;
          width: 15px;
        }
      }
    }
  }
`;

const Slide = styled.div`
  position: relative;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 960px;
  width: 100%;
`;

const SlideImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${props => props.height || "auto"};
  max-height: 500px;

  & > img {
    object-fit: ${props => props.fit || "cover"} !important;
    object-position: ${props => props.position || "50% 50%"} !important;
    font-family: 'object-fit: ${props =>
      props.fit || "cover"} !important; object-position: ${props =>
  props.position || "50% 50%"} !important;'
  }
`;

const SlideText = styled.div`
  color: white;
  margin: 0 auto;
  padding: 1rem 4rem;
  text-align: center;

  @media (min-width: 767px) {
    padding: 1rem 6rem;
  }
`;

const SliderLayout = ({ layout }) => {
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
    <SliderSection>
      <Wrap>
        <Slider {...settings}>
          {layout.slides.map((slide, index) => (
            <Slide key={`slide-${index}`}>
              <SlideImg
                sizes={slide.background.localFile.childImageSharp.sizes}
              />
              <Overlay />
              <ContentContainer>
                <SlideText>
                  <LayoutBlurb
                    dangerouslySetInnerHTML={{ __html: slide.blurb }}
                  />
                  {slide.add_button && (
                    <Button
                      to={slide.button_link.url}
                      target={slide.button_link.target}
                    >
                      {slide.button_link.title}
                    </Button>
                  )}
                </SlideText>
              </ContentContainer>
            </Slide>
          ))}
        </Slider>
      </Wrap>
    </SliderSection>
  );
};

SliderLayout.propTypes = {
  layout: PropTypes.object.isRequired
};

export default SliderLayout;

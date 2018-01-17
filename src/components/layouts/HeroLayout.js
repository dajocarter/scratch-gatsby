import React from "react";
import styled from "styled-components";
import {
  LayoutSection,
  Overlay,
  Wrap,
  LayoutHeader,
  LayoutBlurb,
  Button
} from "../Styles";

const BackgroundImage = styled.div`
  position: relative;
  background-image: ${props => `url(${props.url})`};
  background-position: ${props => props.position};
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  position: relative;
  color: #fff;
  text-align: ${props => props.textAlign};
  padding: ${props => `${props.textMargin}rem 0`};
`;

const HeroLayout = props => (
  <LayoutSection>
    <BackgroundImage
      url={props.layout.background_image.localFile.childImageSharp.original.src}
      position={`${props.layout.bg_image_pos_x} ${props.layout.bg_image_pos_y}`}
    >
      <Overlay />
      <Wrap>
        <Content
          textAlign={props.layout.text_align}
          textMargin={props.layout.text_margin}
        >
          <LayoutHeader>{props.layout.header}</LayoutHeader>
          <LayoutBlurb
            dangerouslySetInnerHTML={{ __html: props.layout.blurb }}
          />
          {props.layout.add_button ? (
            <Button
              to={props.layout.button_link.url}
              target={props.layout.button_link.target}
            >
              {props.layout.button_link.title}
            </Button>
          ) : null}
        </Content>
      </Wrap>
    </BackgroundImage>
  </LayoutSection>
);

export default HeroLayout;

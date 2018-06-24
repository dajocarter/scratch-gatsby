import React from "react";
import styled from "styled-components";
import {
  LayoutSection,
  BackgroundImage,
  Overlay,
  Wrap,
  LayoutBlurb,
  Button
} from "../Styles";

const HeroUnit = BackgroundImage.extend`
  background-position: ${props => props.position};
`;

const Content = styled.div`
  position: relative;
  color: #fff;
  text-align: ${props => props.textAlign};
  padding: ${props => `${props.textMargin}rem 0`};
`;

const HeroLayout = props => (
  <LayoutSection>
    <HeroUnit
      url={props.layout.background_image.localFile.childImageSharp.original.src}
      position={`${props.layout.bg_image_pos_x} ${props.layout.bg_image_pos_y}`}
    >
      <Overlay />
      <Wrap>
        <Content
          textAlign={props.layout.text_align}
          textMargin={props.layout.text_margin}
        >
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
    </HeroUnit>
  </LayoutSection>
);

export default HeroLayout;

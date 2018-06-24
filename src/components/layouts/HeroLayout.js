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

const HeroLayout = ({ layout }) => (
  <LayoutSection>
    <HeroUnit
      url={layout.background_image.localFile.childImageSharp.original.src}
    >
      <Overlay />
      <Wrap>
        <Content
          textAlign={props.layout.text_align}
          textMargin={props.layout.text_margin}
        >
          {layout.blurb && (
            <LayoutBlurb dangerouslySetInnerHTML={{ __html: layout.blurb }} />
          )}
          {layout.add_button && (
            <Button
              to={layout.button_link.url}
              target={layout.button_link.target}
            >
              {layout.button_link.title}
            </Button>
          )}
        </Content>
      </Wrap>
    </HeroUnit>
  </LayoutSection>
);

export default HeroLayout;

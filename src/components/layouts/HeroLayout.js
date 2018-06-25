import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { LayoutSection, Overlay, Wrap, LayoutBlurb, Button } from "../Styles";

const Section = styled(LayoutSection)`
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
`;

const HeroImg = styled(Img)`
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

const HeroLayout = ({ layout }) => (
  <Section>
    <HeroImg sizes={layout.background_image.localFile.childImageSharp.sizes} />
    <Overlay />
    <Content>
      <Wrap>
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
      </Wrap>
    </Content>
  </Section>
);

export default HeroLayout;

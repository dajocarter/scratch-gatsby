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

const Content = styled.div`
  position: relative;
  color: #fff;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
`;

const HeroLayout = ({ layout }) => (
  <LayoutSection>
    <BackgroundImage
      url={layout.background_image.localFile.childImageSharp.original.src}
    >
      <Overlay />
      <Wrap>
        <Content>
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
    </BackgroundImage>
  </LayoutSection>
);

export default HeroLayout;

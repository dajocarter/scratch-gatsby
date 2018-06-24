import React from "react";
import styled from "styled-components";
import {
  LayoutSection,
  FlexWrap,
  BackgroundImage,
  Overlay,
  LayoutBlurb,
  Button
} from "../Styles";

const Tile = BackgroundImage.extend`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  flex: 0 0 100%;

  @media (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 768px) {
    flex: 0 0 45%;
    min-height: 525px;
  }

  @media (min-width: 935px) {
    min-height: 475px;
  }
`;

const Content = styled.div`
  color: #fff;
  padding: 60px 40px;
  position: relative;
  text-align: center;
  z-index: 1;

  @media (min-width: 767px) {
    position: absolute;
  }
`;

const ImageBlocksLayout = ({ layout }) => (
  <LayoutSection>
    <FlexWrap>
      {layout.image_blocks.map((block, index) => (
        <Tile
          key={index}
          url={block.background_image.localFile.childImageSharp.original.src}
        >
          <Overlay />
          <Content>
            {block.blurb && (
              <LayoutBlurb dangerouslySetInnerHTML={{ __html: block.blurb }} />
            )}
            {block.add_button && (
              <Button
                to={block.button_link.url}
                target={block.button_link.target}
              >
                {block.button_link.title}
              </Button>
            )}
          </Content>
        </Tile>
      ))}
    </FlexWrap>
  </LayoutSection>
);

export default ImageBlocksLayout;

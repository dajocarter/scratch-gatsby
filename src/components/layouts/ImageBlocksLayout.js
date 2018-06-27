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

const Container = FlexWrap.extend`
  align-items: stretch;
`;

const Tile = BackgroundImage.extend`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  flex: 0 0 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex: 0 0 48%;
  }
`;

const Content = styled.div`
  color: #fff;
  padding: 60px 40px;
  position: relative;
  text-align: center;
  z-index: 1;
`;

const ImageBlocksLayout = ({ layout }) => (
  <LayoutSection>
    <Container>
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
    </Container>
  </LayoutSection>
);

export default ImageBlocksLayout;

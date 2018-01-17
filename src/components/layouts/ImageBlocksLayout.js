import React from "react";
import styled from "styled-components";
import {
  LayoutSection,
  Wrap,
  Overlay,
  LayoutHeader,
  LayoutBlurb,
  Button
} from "../Styles";

const TilesContainer = Wrap.extend`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const Tile = styled.div`
  background-color: #3d9970;
  background-image: ${props => `url(${props.url})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
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

const ImageBlocksLayout = props => (
  <LayoutSection>
    <TilesContainer>
      {props.layout.image_blocks.map((block, index) => (
        <Tile
          key={index}
          url={block.background_image.localFile.childImageSharp.original.src}
        >
          <Overlay />
          <Content>
            <LayoutHeader>{block.header}</LayoutHeader>
            <LayoutBlurb dangerouslySetInnerHTML={{ __html: block.blurb }} />
            {block.add_button ? (
              <Button
                to={block.button_link.url}
                target={block.button_link.target}
              >
                {block.button_link.title}
              </Button>
            ) : null}
          </Content>
        </Tile>
      ))}
    </TilesContainer>
  </LayoutSection>
);

export default ImageBlocksLayout;

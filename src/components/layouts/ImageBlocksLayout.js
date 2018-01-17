import React from "react";
import styled from "styled-components";
import { clearFix, darken } from "polished";
import Link from "gatsby-link";

const ImageBlocks = styled.section`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;

const Wrap = styled.div`
  ${clearFix()};
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1rem;
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
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

const Header = styled.h2`
  margin-top: 0;
`;

const Blurb = styled.div`
  p {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Button = styled(Link)`
  background: #3d9970;
  border-radius: 0.125rem;
  color: #fff;
  display: inline-block;
  margin-top: 1rem;
  padding: 1rem;
  text-decoration: none;

  &:hover {
    background: ${darken(0.05, `#3d9970`)};
  }
`;

const ImageBlocksLayout = props => (
  <ImageBlocks>
    <Wrap>
      {props.layout.image_blocks.map((block, index) => (
        <Tile
          key={index}
          url={block.background_image.localFile.childImageSharp.original.src}
        >
          <Overlay />
          <Content>
            <Header>{block.header}</Header>
            <Blurb dangerouslySetInnerHTML={{ __html: block.blurb }} />
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
    </Wrap>
  </ImageBlocks>
);

export default ImageBlocksLayout;

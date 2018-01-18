import React from "react";
import {
  LayoutSection,
  FlexWrap,
  LayoutHeader,
  LayoutBlurb,
  Button
} from "../Styles";
import styled from "styled-components";

const Container = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  order: ${props => (props.imgsOnRight ? 2 : 1)};

  @media (min-width: 768px) {
    flex: 0 0 50%;
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const GalleryImg = styled.img`
  flex: 0 0 auto;
  padding: 0.5rem;
  width: ${props => {
    if (props.gallerySize === 1) {
      return `100%`;
    } else if (props.gallerySize === 2 || props.gallerySize === 3) {
      return `45%`;
    } else if (props.gallerySize === 4) {
      return `25%`;
    }
  }};
`;

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const ImagesWithTextLayout = props => (
  <LayoutSection>
    <FlexWrap>
      <Container imgsOnRight={props.layout.image_side}>
        <Gallery>
          {props.layout.images.map((image, index) => (
            <GalleryImg
              key={index}
              src={image.localFile.childImageSharp.resolutions.src}
              srcSet={image.localFile.childImageSharp.resolutions.srcSet}
              gallerySize={props.layout.images.length}
              imgIndex={index + 1}
            />
          ))}
        </Gallery>
      </Container>
      <Container imgsOnRight={!props.layout.image_side}>
        <Content>
          <LayoutHeader>{props.layout.header}</LayoutHeader>
          <LayoutBlurb
            dangerouslySetInnerHTML={{ __html: props.layout.content }}
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
      </Container>
    </FlexWrap>
  </LayoutSection>
);

export default ImagesWithTextLayout;

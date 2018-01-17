import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { darken, clearFix } from "polished";

const HeroUnit = styled.section``;

const BackgroundImage = styled.div`
  position: relative;
  background-image: ${props => `url(${props.url})`};
  background-position: ${props => props.position};
  background-repeat: no-repeat;
  background-size: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
`;

const Wrap = styled.div`
  ${clearFix()};
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1rem;
`;

const Content = styled.div`
  position: relative;
  color: #fff;
  text-align: ${props => props.textAlign};
  padding: ${props => `${props.textMargin}rem 0`};
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

class HeroLayout extends Component {
  render() {
    const layout = this.props.layout;
    return (
      <HeroUnit>
        <BackgroundImage
          url={layout.background_image.localFile.childImageSharp.original.src}
          position={`${layout.bg_image_pos_x} ${layout.bg_image_pos_y}`}
        >
          <Overlay />
          <Wrap>
            <Content
              textAlign={layout.text_align}
              textMargin={layout.text_margin}
            >
              <Header>{layout.header}</Header>
              <Blurb dangerouslySetInnerHTML={{ __html: layout.blurb }} />
              {layout.add_button ? (
                <Button
                  to={layout.button_link.url}
                  target={layout.button_link.target}
                >
                  {layout.button_link.title}
                </Button>
              ) : null}
            </Content>
          </Wrap>
        </BackgroundImage>
      </HeroUnit>
    );
  }
}

export default HeroLayout;

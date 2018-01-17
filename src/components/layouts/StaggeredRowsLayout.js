import React from "react";
import styled from "styled-components";
import {
  LayoutSection,
  FlexWrap,
  Circle,
  LayoutHeader,
  LayoutBlurb,
  Button
} from "../Styles";

const Row = styled.div`
  background-color: ${props => (props.rowIndex % 2 ? `#fff` : `#ccc`)};
  padding: 3rem 1rem;
`;

const ImageContainer = styled.div`
  flex: 0 0 100%;
  padding-bottom: 3rem;
  @media (min-width: 768px) {
    flex: 0 0 250px;
    order: ${props => (props.rowIndex % 2 ? 1 : 2)};
    padding-bottom: 0;
  }
`;

const Image = Circle.extend`
  height: 250px;
  width: 250px;
`;

const ContentContainer = styled.div`
  @media (max-width: 767px) {
    flex: 0 0 100%;
    text-align: center;
  }
  @media (min-width: 768px) {
    flex: 0 0 60%;
    order: ${props => (props.rowIndex % 2 ? 2 : 1)};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: ${props => (props.rowIndex % 2 ? `right` : `left`)};
  }
`;

const Content = styled.div``;

const Header = LayoutHeader.extend`
  @media (min-width: 768px) {
    text-align: ${props => (props.rowIndex % 2 ? `right` : `left`)};
  }
`;

const Blurb = LayoutBlurb.extend`
  @media (min-width: 768px) {
    text-align: ${props => (props.rowIndex % 2 ? `right` : `left`)};
  }
`;

const StaggeredRowsLayout = props => (
  <LayoutSection>
    {props.layout.rows.map((row, index) => (
      <Row key={`row-${index}`} rowIndex={index}>
        <FlexWrap>
          <ImageContainer rowIndex={index}>
            <Image url={row.image.localFile.childImageSharp.resize.src} />
          </ImageContainer>
          <ContentContainer rowIndex={index}>
            <Content>
              <Header rowIndex={index}>{row.header}</Header>
              <Blurb
                rowIndex={index}
                dangerouslySetInnerHTML={{ __html: row.blurb }}
              />
              {row.add_button ? (
                <Button
                  to={row.button_link.url}
                  target={row.button_link.target}
                >
                  {row.button_link.title}
                </Button>
              ) : null}
            </Content>
          </ContentContainer>
        </FlexWrap>
      </Row>
    ))}
  </LayoutSection>
);

export default StaggeredRowsLayout;

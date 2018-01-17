import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { LayoutSection, FlexWrap, Button } from "../Styles";

const CardsContainer = FlexWrap.extend`
  justify-content: flex-start;
  border-radius: 0.25rem;
`;

const Card = styled.div`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-sizing: border-box;
  margin-bottom: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  text-align: center;

  @media (min-width: 768px) {
    flex: 0 0 45%;
    &:nth-child(even) {
      margin-left: 10%;
    }
  }

  @media (min-width: 1024px) {
    flex: 0 0 30%;
    &:nth-child(3n + 1) {
      margin-left: 0;
    }
    &:nth-child(3n),
    &:nth-child(3n + 2) {
      margin-left: 5%;
    }
  }
`;

const CardImg = styled(Img)`
  border-top-right-radius: calc(0.25rem - 1px);
  border-top-left-radius: calc(0.25rem - 1px);
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const CardBlock = styled.div`
  flex: 1 1 auto;
  padding: 1rem;
`;

const CardTitle = styled.h4`
  margin-bottom: 0.75rem;
`;

const CardText = styled.div``;

const Blurb = styled.div``;

const CardsLayout = props => (
  <LayoutSection>
    <CardsContainer>
      {props.layout.cards.map((card, index) => (
        <Card key={`card-${index}`}>
          {card.image ? (
            <CardImg sizes={card.image.localFile.childImageSharp.sizes} />
          ) : null}
          <CardBlock>
            <CardTitle>{card.header}</CardTitle>
            <CardText>
              <Blurb dangerouslySetInnerHTML={{ __html: card.blurb }} />
              {card.add_button ? (
                <Button
                  to={card.button_link.url}
                  target={card.button_link.target}
                >
                  {card.button_link.title}
                </Button>
              ) : null}
            </CardText>
          </CardBlock>
        </Card>
      ))}
    </CardsContainer>
  </LayoutSection>
);

export default CardsLayout;

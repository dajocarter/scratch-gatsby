import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { LayoutSection, FlexWrap, Button } from "../Styles";

const CardsContainer = FlexWrap.extend`
  align-items: stretch;
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
    flex: ${props => {
      switch (props.colSize) {
        case "1":
          return "0 0 100%";
          break;
        case "2":
          if (props.twoColOffset === "2 to 1") {
            return props.order % 2 === 1 ? `0 0 32%` : `0 0 64%`;
          } else if (props.twoColOffset === "1 to 2") {
            return props.order % 2 === 0 ? `0 0 32%` : `0 0 64%`;
          } else {
            return `0 0 48%`;
          }
          break;
        case "3":
          if (props.threeColOffset === "1 to 1 to 2") {
            return props.order % 3 === 2 ? `0 0 48%` : `0 0 24%`;
          } else if (props.threeColOffset === "1 to 2 to 1") {
            return props.order % 3 === 1 ? `0 0 48%` : `0 0 24%`;
          } else if (props.threeColOffset === "2 to 1 to 1") {
            return props.order % 3 === 0 ? `0 0 48%` : `0 0 24%`;
          } else {
            return `0 0 32%`;
          }
          break;
        case "4":
          return `0 0 24%`;
          break;
        case "5":
          return `0 0 19.2%`;
          break;
        case "6":
          return `0 0 16%`;
          break;
      }
    }};
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

const CardsLayout = ({ layout }) => (
  <LayoutSection>
    <CardsContainer>
      {layout.cards.map((card, index) => (
        <Card
          key={`card-${index}`}
          colSize={layout.number_of_columns}
          order={index}
          twoColOffset={layout.wordpress_2_col_offset}
          threeColOffset={layout.wordpress_3_col_offset}
        >
          {card.image && (
            <CardImg sizes={card.image.localFile.childImageSharp.sizes} />
          )}
          <CardBlock>
            {card.header && <CardTitle>{card.header}</CardTitle>}
            <CardText>
              {card.blurb && (
                <Blurb dangerouslySetInnerHTML={{ __html: card.blurb }} />
              )}
              {card.add_button && (
                <Button
                  to={card.button_link.url}
                  target={card.button_link.target}
                >
                  {card.button_link.title}
                </Button>
              )}
            </CardText>
          </CardBlock>
        </Card>
      ))}
    </CardsContainer>
  </LayoutSection>
);

export default CardsLayout;

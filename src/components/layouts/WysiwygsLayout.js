import React from "react";
import styled from "styled-components";

const Wysiwygs = styled.section`
  margin-bottom: 2rem;
`;

const Wrap = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1rem;
`;

const Header = styled.h2`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const Blurb = styled.div`
  flex: 1 1 100%;
  @media (min-width: 767px) {
    flex: ${props => {
      if (props.offset === "2 to 1") {
        if (props.order % 2) {
          return `1 0 30%`;
        } else {
          return `1 0 60%`;
        }
      } else if (props.offset === "1 to 2") {
        if (props.order % 2) {
          return `1 0 60%`;
        } else {
          return `1 0 30%`;
        }
      } else {
        return `0 0 45%`;
      }
    }};
    padding-left: ${props => (props.order % 2 ? `2rem` : `1rem`)};
  }
`;

const WysiwygsLayout = props => (
  <Wysiwygs>
    <Wrap>
      <Header>{props.layout.header}</Header>
      <Container>
        {props.layout.wysiwygs.map((column, index) => {
          return (
            <Blurb
              key={index}
              offset={props.layout.offset}
              order={index}
              dangerouslySetInnerHTML={{ __html: column.wysiwyg }}
            />
          );
        })}
      </Container>
    </Wrap>
  </Wysiwygs>
);

export default WysiwygsLayout;

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
  box-sizing: border-box;
  flex: 1 1 100%;
  @media (min-width: 767px) {
    flex: ${props => {
      if (props.offset === "2 to 1") {
        return props.order % 2 ? `1 0 33%` : `1 0 66%`;
      } else if (props.offset === "1 to 2") {
        return props.order % 2 ? `1 0 66%` : `1 0 33%`;
      } else {
        return `0 0 50%`;
      }
    }};
    padding-left: ${props => (props.order % 2 ? `2rem` : `0rem`)};
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

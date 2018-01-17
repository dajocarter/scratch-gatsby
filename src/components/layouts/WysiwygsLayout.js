import React from "react";
import { LayoutSection, Wrap, LayoutHeader, FlexWrap } from "../Styles";
import styled from "styled-components";

const Wysiwyg = styled.div`
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
  <LayoutSection>
    <Wrap>
      <LayoutHeader>{props.layout.header}</LayoutHeader>
    </Wrap>
    <FlexWrap>
      {props.layout.wysiwygs.map((column, index) => {
        return (
          <Wysiwyg
            key={index}
            offset={props.layout.offset}
            order={index}
            dangerouslySetInnerHTML={{ __html: column.wysiwyg }}
          />
        );
      })}
    </FlexWrap>
  </LayoutSection>
);

export default WysiwygsLayout;

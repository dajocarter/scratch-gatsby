import React from "react";
import { LayoutSection, FlexWrap } from "../Styles";
import styled from "styled-components";

const Wysiwyg = styled.div`
  box-sizing: border-box;
  flex: 1 1 100%;
  margin-bottom: 2rem;
  @media (min-width: 767px) {
    flex: ${props => {
      if (props.offset === "2 to 1") {
        return props.order % 2
          ? `1 0 32%`
          : props.flexible
            ? `1 0 64%`
            : `0 0 64%`;
      } else if (props.offset === "1 to 2") {
        return props.order % 2
          ? `1 0 64%`
          : props.flexible
            ? `1 0 32%`
            : `0 0 32%`;
      } else {
        return props.flexible ? `1 0 48%` : `0 0 48%`;
      }
    }};
  }
`;

const WysiwygsLayout = ({ layout }) => (
  <LayoutSection>
    <FlexWrap>
      {layout.wysiwygs.map((column, index) => {
        return (
          <Wysiwyg
            key={index}
            offset={layout.offset}
            order={index}
            flexible={layout.flexible}
            dangerouslySetInnerHTML={{ __html: column.wysiwyg }}
          />
        );
      })}
    </FlexWrap>
  </LayoutSection>
);

export default WysiwygsLayout;

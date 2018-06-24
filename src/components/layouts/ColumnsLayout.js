import React from "react";
import styled from "styled-components";
import { LayoutSection, FlexWrap, Button, Circle } from "../Styles";

const ColumnsContainer = FlexWrap.extend`
  justify-content: flex-start;
  align-items: flex-start;
`;

const Column = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  text-align: center;
  flex: ${props => {
    const count = props.numOfColumns;
    if (count == 1) {
      return `1 1 100%`;
    } else if (count == 2) {
      if (props.twoColOffset === "2 to 1") {
        return props.columnIndex % 2 ? `1 0 33%` : `1 0 66%`;
      } else if (props.twoColOffset === "1 to 2") {
        return props.columnIndex % 2 ? `1 0 66%` : `1 0 33%`;
      } else {
        return props.flexible ? `1 0 50%` : `0 0 50%`;
      }
    } else if (count == 3) {
      if (props.threeColOffset === "1 to 1 to 2") {
        return props.columnIndex % 3 === 2 ? `0 0 50%` : `0 0 25%`;
      } else if (props.threeColOffset === "1 to 2 to 1") {
        return props.columnIndex % 3 === 1 ? `0 0 50%` : `0 0 25%`;
      } else if (props.threeColOffset === "2 to 1 to 1") {
        return props.columnIndex % 3 === 0 ? `0 0 50%` : `0 0 25%`;
      } else if (props.threeColOffset === "Equal") {
        return props.flexible ? `1 0 33%` : `0 0 33%`;
      }
    } else if (count == 4) {
      return props.flexible ? `1 0 25%` : `0 0 25%`;
    } else if (count == 5) {
      return props.flexible ? `1 0 20%` : `0 0 20%`;
    } else if (count == 6) {
      return props.flexible ? `1 0 16%` : `0 0 16%`;
    }
  }};
`;

const ColumnHeader = styled.h4``;

const ColumnBlurb = styled.div``;

const ColumnsLayout = props => (
  <LayoutSection>
    <ColumnsContainer>
      {props.layout.columns.map((column, index) => (
        <Column
          key={`column-${index}`}
          columnIndex={index}
          numOfColumns={parseInt(props.layout.number_of_columns, 10)}
          twoColOffset={props.layout.wordpress_2_col_offset}
          threeColOffset={props.layout.wordpress_3_col_offset}
          flexible={props.layout.flexible_columns}
        >
          {column.image && (
            <Circle url={column.image.localFile.childImageSharp.resize.src} />
          )}
          {column.header && <ColumnHeader>{column.header}</ColumnHeader>}
          {column.blurb && (
            <ColumnBlurb dangerouslySetInnerHTML={{ __html: column.blurb }} />
          )}
          {column.add_button && (
            <Button
              to={column.button_link.url}
              target={column.button_link.target}
            >
              {column.button_link.title}
            </Button>
          )}
        </Column>
      ))}
    </ColumnsContainer>
  </LayoutSection>
);

export default ColumnsLayout;

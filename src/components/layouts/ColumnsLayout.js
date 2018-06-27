import React from "react";
import styled from "styled-components";
import { LayoutSection, FlexWrap, Button, Circle } from "../Styles";

const ColumnsContainer = FlexWrap.extend`
  justify-content: flex-start;
  align-items: flex-start;
`;

const Column = styled.div`
  box-sizing: border-box;
  margin-bottom: 2rem;
  text-align: center;
  flex: 0 0 100%;
  
  @media (min-width: 768px) {
    flex: ${props => {
      switch (props.numOfColumns) {
        case "1":
          return `0 0 100%`;
          break;
        case "2":
          if (props.twoColOffset === "2 to 1") {
            return props.columnIndex % 2 === 1
              ? `0 0 32%`
              : props.flexible
                ? `1 0 64%`
                : `0 0 64%`;
          } else if (props.twoColOffset === "1 to 2") {
            return props.columnIndex % 2 === 0
              ? `0 0 32%`
              : props.flexible
                ? `1 0 64%`
                : `0 0 64%`;
          } else {
            return props.flexible ? `1 0 45%` : `0 0 45%`;
          }
          break;
        case "3":
          if (props.threeColOffset === "1 to 1 to 2") {
            return props.columnIndex % 3 === 2 ? `0 0 50%` : `0 0 25%`;
          } else if (props.threeColOffset === "1 to 2 to 1") {
            return props.columnIndex % 3 === 1 ? `0 0 50%` : `0 0 25%`;
          } else if (props.threeColOffset === "2 to 1 to 1") {
            return props.columnIndex % 3 === 0 ? `0 0 50%` : `0 0 25%`;
          } else {
            return props.flexible ? `1 0 33%` : `0 0 33%`;
          }
          break;
        case "4":
          return props.flexible ? `1 0 25%` : `0 0 25%`;
          break;
      }
    }}};
`;

const ColumnHeader = styled.h4``;

const ColumnBlurb = styled.div``;

const ColumnsLayout = ({ layout }) => (
  <LayoutSection>
    <ColumnsContainer>
      {layout.columns.map((column, index) => (
        <Column
          key={`column-${index}`}
          columnIndex={index}
          numOfColumns={layout.number_of_columns}
          twoColOffset={layout.wordpress_2_col_offset}
          threeColOffset={layout.wordpress_3_col_offset}
          flexible={layout.flexible_columns}
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

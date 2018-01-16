import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import Link from "gatsby-link";

const Columns = styled.section``;

const Wrap = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1rem;
`;

const Header = styled.h2`
  text-align: center;
`;

const Blurb = styled.div`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
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

const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin: 0 auto;
  background-image: ${props => `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ColumnHeader = styled.h4``;

const ColumnBlurb = styled.div``;

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

const ColumnsLayout = props => (
  <Columns>
    <Wrap>
      <Header>{props.layout.header}</Header>
      <Blurb dangerouslySetInnerHTML={{ __html: props.layout.blurb }} />
      <Container>
        {props.layout.columns.map((column, index) => (
          <Column
            key={`column-${index}`}
            numOfColumns={parseInt(props.layout.number_of_columns, 10)}
            columnCount={props.layout.columns.length}
            columnIndex={index}
            twoColOffset={props.layout.wordpress_2_col_offset}
            threeColOffset={props.layout.wordpress_3_col_offset}
            flexible={props.layout.flexible_columns}
          >
            <Circle url={column.image.localFile.childImageSharp.resize.src} />
            <ColumnHeader>{column.header}</ColumnHeader>
            <ColumnBlurb dangerouslySetInnerHTML={{ __html: column.blurb }} />
            {column.add_button ? (
              <Button
                to={column.button_link.url}
                target={column.button_link.target}
              >
                {column.button_link.title}
              </Button>
            ) : null}
          </Column>
        ))}
      </Container>
    </Wrap>
  </Columns>
);

export default ColumnsLayout;

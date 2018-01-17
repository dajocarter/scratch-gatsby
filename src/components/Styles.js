import React from "react";
import styled from "styled-components";
import { clearFix, darken } from "polished";
import Link from "gatsby-link";

export const LayoutSection = styled.section`
  margin-bottom: 2rem;
`;

export const Wrap = styled.div`
  ${clearFix()};
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1rem;
`;

export const FlexWrap = Wrap.extend`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
`;

export const LayoutHeader = styled.h2`
  text-align: center;
  margin-top: 0;
`;

export const LayoutBlurb = styled.div`
  text-align: center;
  p {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: #3d9970;
  background-image: ${props => `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Button = styled(Link)`
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

import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import logo from "./site-logo.svg";
import styled, { injectGlobal } from "styled-components";
import { clearFix, darken, normalize } from "polished";

injectGlobal`
	${normalize()};
	
	body {
		font-family: "Lato", sans-serif;
	}
`;

const HeaderContainer = styled.header`
  background-color: #3d9970;
`;

const Wrap = styled.div`
  ${clearFix()};
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1rem;
`;

const NavMenu = styled.nav`
  float: right;
  @media (max-width: 480px) {
    clear: left;
    float: none;
  }
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    justify-content: space-around;
  }
`;

const MenuItem = styled.li`
  flex: 0 0 auto;
`;

const StyledLink = styled(Link)`
  color: white;
  display: block;
  padding: 1.5rem 1rem;
  text-decoration: none;

  &:hover {
    background-color: ${darken(0.05, `#3d9970`)};
  }
`;

const Logo = styled(Link)`
  display: block;
  float: left;
  margin: 7px auto;
  @media (max-width: 480px) {
    text-align: center;
    width: 100%;
  }
`;

const LogoImg = styled.img`
  margin: 0;
  width: 200px;
`;

const Container = styled.main``;

const Navigation = props => (
  <NavMenu>
    <Menu>
      {props.menuItems.filter(item => item.object_slug !== "home").map(item => (
        <MenuItem
          key={`menu-item-${item.wordpress_id}`}
          className={`menu-item menu-item-type-${item.type} menu-item-object-${
            item.object
          } menu-item-${item.wordpress_id}`}
        >
          <StyledLink to={`/${item.object_slug}/`}>{item.title}</StyledLink>
        </MenuItem>
      ))}
    </Menu>
  </NavMenu>
);

const Header = props => (
  <HeaderContainer>
    <Wrap>
      <Logo to="/">
        <LogoImg src={logo} alt="site-logo" />
      </Logo>
      <Navigation menuItems={props.menu.items} />
    </Wrap>
  </HeaderContainer>
);

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet
      title="Scratch: ACF-Ready WordPress Theme"
      meta={[
        {
          name: "description",
          content:
            "Scratch Theme provides a powerful automated workflow for custom WordPress development. Minified assets, Sass, Hot Reload, and more."
        }
      ]}
    />
    <Header menu={data.wordpressWpApiMenusMenusItems} />
    <Container>{children()}</Container>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const menuQuery = graphql`
  query menuQuery {
    wordpressWpApiMenusMenusItems(wordpress_id: { eq: 2 }) {
      slug
      items {
        wordpress_id
        title
        object_slug
        object
        type
      }
    }
  }
`;

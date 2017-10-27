import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import logo from "./site-logo.svg";
import Navigation from "../components/Navigation";
import "./index.scss";

const Header = props => (
  <header>
    <div className="wrap">
      <Link className="logo" to="/">
        <img src={logo} alt="site-logo" />
      </Link>

      <Navigation menuName={props.menu.slug} menuItems={props.menu.items} />
    </div>
  </header>
);

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header menu={data.wordpressWpApiMenusMenusItems} />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
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

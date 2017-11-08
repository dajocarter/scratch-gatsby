import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const LogoDisplay = props => (
  <div className="logo-display all-logos">
    {props.logos.map(
      (image, index) =>
        image.link ? (
          <Link key={`logo-${index}`} to={image.link}>
            <img src={image.logo.source_url} />
          </Link>
        ) : (
          <img key={`logo-${index}`} src={image.logo.source_url} />
        )
    )}
  </div>
);

LogoDisplay.propTypes = {
  logos: PropTypes.arrayOf(PropTypes.object)
};

export default LogoDisplay;

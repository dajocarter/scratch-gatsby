import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Img from "gatsby-image";
import styled from "styled-components";

const Logos = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

const LinkedLogo = styled(Link)`
  flex: 0 0 auto;
`;

const Logo = styled(Img)`
  flex: 0 0 auto;
  display: block;
  width: 100%;
  max-width: 150px;
  height: auto;
  margin: 0 auto 10px;
`;

const LogoDisplay = props => (
	<Logos>
		{props.logos.map(
			(image, index) =>
				image.link ? (
					<LinkedLogo key={`logo-${index}`} to={image.link.url}>
						<Logo
							resolutions={image.logo.localFile.childImageSharp.resolutions}
						/>
					</LinkedLogo>
				) : (
					<Logo
						key={`logo-${index}`}
						resolutions={image.logo.localFile.childImageSharp.resolutions}
					/>
				)
		)}
	</Logos>
);

LogoDisplay.propTypes = {
  logos: PropTypes.arrayOf(PropTypes.object)
};

export default LogoDisplay;

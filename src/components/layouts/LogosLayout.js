import React from "react";
import styled from "styled-components";
import LogoDisplay from "../LogoDisplay";
import LogoSlick from "../LogoSlick";

const Logos = styled.section`
	margin: 0 auto 2rem;
	max-width: 1024px;
`;

const Header = styled.h2`
	text-align: center;
`;

const LogosLayout = props => (
	<Logos>
		<Header>{props.layout.header}</Header>
		{props.layout.logo_display === "all" ? (
			<LogoDisplay logos={props.layout.logos} />
		) : (
			<LogoSlick logos={props.layout.logos} />
		)}
	</Logos>
);

export default LogosLayout;

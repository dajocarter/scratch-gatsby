import React, { Component } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Toggles = styled.section`
	margin-bottom: 2rem;
`;

const Header = styled.h2`
	text-align: center;
`;

const Blurb = styled.div`
	text-align: center;
`;

const TogglesLayout = props => (
	<Toggles>
		{props.layout.header ? (
			<Header dangerouslySetInnerHTML={{ __html: props.layout.header }} />
		) : null}

		{props.layout.blurb ? (
			<Blurb dangerouslySetInnerHTML={{ __html: props.layout.blurb }} />
		) : null}

		{props.layout.toggles.map((toggle, index) => (
			<Accordion
				key={`toggle-${index}`}
				header={toggle.toggle_header}
				content={toggle.toggle_content}
			/>
		))}
	</Toggles>
);

export default TogglesLayout;

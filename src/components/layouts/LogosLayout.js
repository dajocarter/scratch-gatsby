import React from "react";
import { LayoutSection, Wrap, LayoutHeader } from "../Styles";
import LogoDisplay from "../LogoDisplay";
import LogoSlick from "../LogoSlick";

const LogosLayout = props => (
  <LayoutSection>
    <Wrap>
      <LayoutHeader>{props.layout.header}</LayoutHeader>
      {props.layout.logo_display === "all" ? (
        <LogoDisplay logos={props.layout.logos} />
      ) : (
        <LogoSlick logos={props.layout.logos} />
      )}
    </Wrap>
  </LayoutSection>
);

export default LogosLayout;

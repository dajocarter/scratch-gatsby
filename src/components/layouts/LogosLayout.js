import React from "react";
import { LayoutSection, Wrap } from "../Styles";
import LogoDisplay from "../LogoDisplay";
import LogoSlick from "../LogoSlick";

const LogosLayout = props => (
  <LayoutSection>
    <Wrap>
      {props.layout.logo_display === "all" ? (
        <LogoDisplay logos={props.layout.logos} />
      ) : (
        <LogoSlick logos={props.layout.logos} />
      )}
    </Wrap>
  </LayoutSection>
);

export default LogosLayout;

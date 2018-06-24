import React from "react";
import { LayoutSection, Wrap } from "../Styles";
import LogoDisplay from "../LogoDisplay";
import LogoSlick from "../LogoSlick";

const LogosLayout = ({ layout }) => (
  <LayoutSection>
    <Wrap>
      {layout.logo_display === "all" ? (
        <LogoDisplay logos={layout.logos} />
      ) : (
        <LogoSlick logos={layout.logos} />
      )}
    </Wrap>
  </LayoutSection>
);

export default LogosLayout;

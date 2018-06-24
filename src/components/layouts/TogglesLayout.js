import React from "react";
import { LayoutSection, Wrap } from "../Styles";
import Accordion from "../Accordion";

const TogglesLayout = props => (
  <LayoutSection>
    <Wrap>
      {props.layout.toggles.map((toggle, index) => (
        <Accordion
          key={`toggle-${index}`}
          header={toggle.toggle_header}
          content={toggle.toggle_content}
        />
      ))}
    </Wrap>
  </LayoutSection>
);

export default TogglesLayout;

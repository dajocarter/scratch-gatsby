import React from "react";
import { LayoutSection, Wrap, LayoutHeader, LayoutBlurb } from "../Styles";
import Accordion from "../Accordion";

const TogglesLayout = props => (
  <LayoutSection>
    <Wrap>
      <LayoutHeader>{props.layout.header}</LayoutHeader>
      <LayoutBlurb dangerouslySetInnerHTML={{ __html: props.layout.blurb }} />
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

import React, { Component } from "react";
import ContentToggle from "../ContentToggle";

const TogglesLayout = props => (
  <section className="toggles">
    {props.layout.header ? (
      <h2
        className="layout-header"
        dangerouslySetInnerHTML={{ __html: props.layout.header }}
      />
    ) : (
      ""
    )}
    {props.layout.blurb ? (
      <div dangerouslySetInnerHTML={{ __html: props.layout.blurb }} />
    ) : (
      ""
    )}
    {props.layout.toggles.map((toggle, index) => (
      <ContentToggle
        key={`toggle-${index}`}
        header={toggle.toggle_header}
        content={toggle.toggle_content}
      />
    ))}
  </section>
);

export default TogglesLayout;

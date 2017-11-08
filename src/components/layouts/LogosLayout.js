import React, { Component } from "react";
import LogoDisplay from "../LogoDisplay";
import LogoSlick from "../LogoSlick";
import "./LogosLayout.scss";

class LogosLayout extends Component {
  render() {
    const layout = this.props.layout;
    return (
      <section className="logos">
        <div style={{ maxWidth: 960, marginLeft: "auto", marginRight: "auto" }}>
          <h2 style={{ textAlign: "center" }}>{layout.header}</h2>
          {layout.logo_display === "all" ? (
            <LogoDisplay logos={layout.logos} />
          ) : (
            <LogoSlick logos={layout.logos} />
          )}
        </div>
      </section>
    );
  }
}

export default LogosLayout;

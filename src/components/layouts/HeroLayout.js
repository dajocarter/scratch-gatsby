import React, { Component } from "react";
import Link from "gatsby-link";

class HeroLayout extends Component {
  render() {
    const layout = this.props.layout;
    return (
      <div
        className="scratch-bg"
        style={{
          backgroundImage: `url(${layout.background_image.source_url})`,
          backgroundPosition: `${layout.bg_image_pos_x} ${layout.bg_image_pos_y}`
        }}
      >
        <div className="overlay" />
        <div className="wrap">
          <div
            className={`content white ${layout.text_align}`}
            style={{ padding: `${layout.text_margin}rem 0` }}
          >
            <h2 className="layout-header">{layout.header}</h2>
            <div dangerouslySetInnerHTML={{ __html: layout.blurb }} />
            {layout.add_button ? (
              <p className="button-wrapper">
                <Link
                  to={
                    layout.internal_link
                      ? layout.button_internal_link
                      : layout.button_external_link
                  }
                  target={layout.internal_link ? `` : `_blank`}
                >
                  {layout.button_text}
                </Link>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default HeroLayout;

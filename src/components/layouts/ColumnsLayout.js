import React, { Component } from "react";
import Link from "gatsby-link";
import "./ColumnsLayout.scss";
import "./WysiwygsLayout.scss";

class ColumnsLayout extends Component {
  render() {
    const layout = this.props.layout;
    return (
      <sectional className="flexible-columns">
        <div style={{ maxWidth: 960, marginLeft: "auto", marginRight: "auto" }}>
          <h2 className="layout-header">{layout.header}</h2>
          <div dangerouslySetInnerHTML={{ __html: layout.blurb }} />
          <div className="flex-container">
            {layout.columns.map((col, index) => (
              <div key={`column-${index}`} className="flex-column">
                {col.add_button ? (
                  <Link
                    to={
                      col.internal_link
                        ? col.button_internal_link
                        : col.button_external_link
                    }
                    target={col.internal_link ? `` : `_blank`}
                  >
                    <div
                      className="circle scratch-bg"
                      style={{
                        backgroundImage: `url(${col.image.source_url})`
                      }}
                    />
                    <h3>{col.header}</h3>
                  </Link>
                ) : (
                  <div>
                    <div className="circle center" />
                    <h3>{col.header}</h3>
                  </div>
                )}
                <div
                  className="blurb"
                  dangerouslySetInnerHTML={{ __html: col.blurb }}
                />
                {col.add_button ? (
                  <button>
                    <Link
                      to={
                        col.internal_link
                          ? col.button_internal_link
                          : col.button_external_link
                      }
                      target={col.internal_link ? `` : `_blank`}
                    >
                      {col.button_text}
                    </Link>
                  </button>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </sectional>
    );
  }
}

export default ColumnsLayout;

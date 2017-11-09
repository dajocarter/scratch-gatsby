import React, { Component } from "react";
import Link from "gatsby-link";
import "./StaggeredRowsLayout.scss";

class StaggeredRowsLayout extends Component {
  render() {
    const layout = this.props.layout;
    return (
      <section className="staggered">
        {layout.rows.map((row, index) => (
          <div key={`row-${index}`} className="row">
            <div className="wrap">
              <div className="fivecol first">
                {row.add_button ? (
                  <Link
                    to={
                      row.internal_link
                        ? row.button_internal_link
                        : row.button_external_link
                    }
                    target={row.internal_link ? `` : `_blank`}
                  >
                    <div className="circle scratch-bg" />
                  </Link>
                ) : null}
              </div>
              <div className="sevencol last">
                <div className="content valign">
                  <h3>
                    <Link
                      to={
                        row.internal_link
                          ? row.button_internal_link
                          : row.button_external_link
                      }
                      target={row.internal_link ? `` : `_blank`}
                    >
                      {row.header}
                    </Link>
                  </h3>
                  <div
                    className="blurb"
                    dangerouslySetInnerHTML={{ __html: row.blurb }}
                  />
                  {row.add_button ? (
                    <button>
                      <Link
                        to={
                          row.internal_link
                            ? row.button_internal_link
                            : row.button_external_link
                        }
                        target={row.internal_link ? `` : `_blank`}
                      >
                        {row.button_text}
                      </Link>
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default StaggeredRowsLayout;

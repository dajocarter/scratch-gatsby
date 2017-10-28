import React, { Component } from "react";
import "./WysiwygsLayout.scss";
class WysiwygsLayout extends Component {
  renderHeader() {
    return this.props.layout.header ? (
      <h2
        className="layout-header"
        dangerouslySetInnerHTML={{ __html: this.props.layout.header }}
      />
    ) : (
      ""
    );
  }

  renderWysiwygs() {
    let containerClass = "flex-container";
    switch (this.props.layout.offset) {
      case "2 to 1":
        containerClass += " thirds-1-2";
        break;

      case "1 to 2":
        containerClass += " thirds-2-1";
        break;
    }
    return (
      <div className={containerClass}>
        {this.props.layout.wysiwygs.map((column, index) => {
          return (
            <div
              className="flex-column"
              key={index}
              dangerouslySetInnerHTML={{ __html: column.wysiwyg }}
            />
          );
        })}
      </div>
    );
  }

  render() {
    const layout = this.props.layout;
    return (
      <section className="wysiwygs">
        <div className="wrap">
          {this.renderHeader()}
          {this.renderWysiwygs()}
        </div>
      </section>
    );
  }
}

export default WysiwygsLayout;

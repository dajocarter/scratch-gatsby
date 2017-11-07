import React, { Component } from "react";
import FaChevronDown from "react-icons/lib/fa/chevron-down";
import FaChevronUp from "react-icons/lib/fa/chevron-up";
import "./Toggles.scss";

class ContentToggle extends Component {
  constructor() {
    super();
    this.state = {
      showContent: false
    };
  }
  handleClick() {
    this.setState({
      showContent: !this.state.showContent
    });
  }
  render() {
    return (
      <div>
        <h2 className="toggle-heading" onClick={this.handleClick.bind(this)}>
          {this.props.header}
          {this.state.showContent ? (
            <FaChevronUp className="toggle-icon" />
          ) : (
            <FaChevronDown className="toggle-icon" />
          )}
        </h2>
        <div
          className={
            this.state.showContent
              ? "toggle-content content-show"
              : "toggle-content content-hide"
          }
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        />
      </div>
    );
  }
}

export default ContentToggle;

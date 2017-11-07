import React, { Component } from "react";
import FaChevronDown from "react-icons/lib/fa/chevron-down";
import FaChevronUp from "react-icons/lib/fa/chevron-up";
import TransitionGroup from "react-addons-transition-group";
import "./Accordion.scss";

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
        <TransitionGroup>
          {this.state.showContent && (
            <div
              className="toggle-content"
              dangerouslySetInnerHTML={{ __html: this.props.content }}
            />
          )}
        </TransitionGroup>
      </div>
    );
  }
}

export default ContentToggle;

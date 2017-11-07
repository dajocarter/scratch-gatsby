import React, { Component } from "react";
import FaChevronDown from "react-icons/lib/fa/chevron-down";
import FaChevronUp from "react-icons/lib/fa/chevron-up";
import { VelocityTransitionGroup } from "velocity-react";
import "./Accordion.scss";

class Accordion extends Component {
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
        <VelocityTransitionGroup
          enter={{ animation: "slideDown", duration: 200 }}
          leave={{ animation: "slideUp", duration: 200 }}
        >
          {this.state.showContent ? (
            <div
              className="toggle-content"
              dangerouslySetInnerHTML={{ __html: this.props.content }}
            />
          ) : (
            undefined
          )}
        </VelocityTransitionGroup>
      </div>
    );
  }
}

export default Accordion;

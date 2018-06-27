import React, { Component } from "react";
import styled from "styled-components";
import FaChevronDown from "react-icons/lib/fa/chevron-down";
import FaChevronUp from "react-icons/lib/fa/chevron-up";
import { VelocityTransitionGroup } from "velocity-react";

const Toggle = styled.div`
  margin-bottom: 2rem;
`;

const ToggleTitle = styled.h2`
  border: 1px solid #3d9970;
  color: #3d9970;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  padding: 0.5rem 1.75rem 0.5rem 0.5rem;
  position: relative;

  .toggle-icon {
    bottom: 10px;
    color: #3d9970;
    display: block;
    line-height: inherit;
    position: absolute;
    right: 0.5rem;
  }
`;

const ToggleContent = styled.div`
  padding: 1rem 1rem 0;
  position: relative;
  transition: all 0.2s ease;

  p {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

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
      <Toggle>
        <ToggleTitle onClick={this.handleClick.bind(this)}>
          {this.props.header}
          {this.state.showContent ? (
            <FaChevronUp className="toggle-icon" />
          ) : (
            <FaChevronDown className="toggle-icon" />
          )}
        </ToggleTitle>
        <VelocityTransitionGroup
          enter={{ animation: "slideDown", duration: 200 }}
          leave={{ animation: "slideUp", duration: 200 }}
        >
          {this.state.showContent ? (
            <ToggleContent
              dangerouslySetInnerHTML={{ __html: this.props.content }}
            />
          ) : null}
        </VelocityTransitionGroup>
      </Toggle>
    );
  }
}

export default Accordion;

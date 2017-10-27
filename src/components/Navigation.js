import React, { Component } from "react";
import Link from "gatsby-link";
import FaBars from "react-icons/lib/fa/bars";
import "./Navigation.scss";

class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="nav-toggle">
          <FaBars />
        </div>
        <nav className="menu-nav">
          <ul className={this.props.menuName}>
            {this.props.menuItems.map(item => (
              <li
                key={`menu-item-${item.wordpress_id}`}
                className={`menu-item menu-item-type-${item.type} menu-item-object-${item.object} menu-item-${item.wordpress_id}`}
              >
                <Link to={`/${item.object_slug}/`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;

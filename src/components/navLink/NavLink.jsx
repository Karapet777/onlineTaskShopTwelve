import React from "react";
import { NavLink as HeaderLink } from "react-router-dom";
import PropTypes from "prop-types";

import "./NavLink.scss";

const NavLink = ({ children, to, className, onClick }) => {
  return (
      <HeaderLink
        onClick={onClick}
        exact
        activeClassName="navLink--active"
        className={`navLink ${className}`}
        to={to}
      >
        {children}
      </HeaderLink>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default NavLink;
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Auth from "../Auth/Auth";
import UserMenu from "../UserMenu/UserMenu";
import { authSelectors } from "../../redux/auth";
import s from "./AppBar.module.css";

const AppBar = ({ isAuthenticated }) => (
  <div className={s.AppBar}>
    {isAuthenticated && (
      <NavLink
        className={s.link}
        to="/contacts"
        exat
        className={s.link}
        activeClassName={s.activeStyle}
      >
        Contacts
      </NavLink>
    )}
    {isAuthenticated ? <UserMenu /> : <Auth />}
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/posts">
            Post Feed
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <a
            href="###"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              style={{ width: "25px", marginRight: "5px" }}
              src={user.avatar}
              alt={user.name}
              title="You must have a Gravatar connected to your email"
            />
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">
            Sign Up
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              DevConnector
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profiles">
                    {" "}
                    Developers
                  </NavLink>
                </li>
              </ul>
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);

import React from "react";
import PropTypes from "prop-types";

const Login = (props) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Login in to manage your inventory</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Login in with Github
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};
export default Login;

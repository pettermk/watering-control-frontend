import React from 'react';
import PropTypes from 'prop-types';

export default function Nav(props) {
  const loggedOutNav = (
    <ul>
      <li onClick={() => props.displayForm('login')}>Login</li>
      <li onClick={() => props.displayForm('signup')}>Signup</li>
    </ul>
  );

  const loggedInNav = (
    <ul>
      <li onClick={props.handleLogout}>Logout</li>
    </ul>
  );
  return <div>{props.loggedIn ? loggedInNav : loggedOutNav}</div>;
}

Nav.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  displayForm: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired
};
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = props => {
  const menuItems = [
    { slug: '/', title: 'Home' },
    { slug: '/about', title: 'About' },
    { slug: '/login', title: 'Sign in', type: 'public' },
    { slug: '/profile', title: 'Profile', type: 'private' },
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          {menuItems.map(item => {
            if (props.profile.isLoggedIn === true && item.type === 'public')
              return null;
            if (props.profile.isLoggedIn === false && item.type === 'private')
              return null;

            return (
              <li key={item.slug} className="nav-item">
                <Link className="nav-link" to={item.slug}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  profile: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps)(Header);

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card } from '../../../atoms';

import './InspoCard.css';

const InspoCard = props => {
  const { author = '', content = '', user } = props;
  return (
    <Card>
      <blockquote className="blockquote text-center">
        <p className="mb-0">{content}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <p className="card-text text-right">
        Posted by <Link to={`/users/${user.id}`}>{user.username}</Link>
      </p>
    </Card>
  );
};

InspoCard.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default InspoCard;

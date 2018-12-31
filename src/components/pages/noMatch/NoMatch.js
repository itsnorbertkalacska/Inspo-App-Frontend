import React from 'react';
import { Link } from 'react-router-dom';

import { Title } from '../../atoms';

const NoMatch = () => (
  <>
    <Title title="This page cannot be found." />
    <p>
      Click <Link to="/">here</Link> to return to home.
    </p>
  </>
);

export default NoMatch;

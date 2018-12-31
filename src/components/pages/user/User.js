import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { Alert, Loader, Title } from '../../atoms';

import * as UserActions from '../../../actions/userActions';

const UserDetail = props => {
  const { detail } = props;

  const renderError = () => {
    return (
      <Alert type="danger">
        An error occured while trying to fetch data from server... :( Please try
        again...
      </Alert>
    );
  };

  const renderContent = () => {
    if (detail.loading) return <Loader />;

    if (detail.error) return renderError();

    return <div>User is loaded.</div>;
  };

  return (
    <>
      <Title title="User's Profile" />
      {renderContent()}
    </>
  );
};

UserDetail.propTypes = {
  detail: PropTypes.shape({
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  fetchUser: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

const enhance = compose(
  connect(
    ({ user: { detail } }) => ({ detail }),
    dispatch => ({
      fetchUser: userId => dispatch(UserActions.fetchUser(userId)),
    })
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchUser(this.props.match.params.id);
    },
  })
);

export default enhance(UserDetail);

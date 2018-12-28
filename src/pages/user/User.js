import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Alert, Loader, Title } from '../../atoms';

import * as UserActions from '../../actions/userActions';

class UserDetail extends React.PureComponent {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  renderError() {
    return (
      <Alert type="danger">
        An error occured while trying to fetch data from server... :( Please try
        again...
      </Alert>
    );
  }

  renderUserDetail() {
    const { detail } = this.props;

    if (detail.loading) return <Loader />;

    if (detail.error) return this.renderError();

    return <div>User is loaded.</div>;
  }

  render() {
    return (
      <>
        <Title title="User's Profile" />
        {this.renderUserDetail()}
      </>
    );
  }
}

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

const mapStateToProps = state => state.user;
const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(UserActions.fetchUser(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';

import { Alert, Card, Loader, Title } from '../../atoms';
import { InspoCard } from './Home.partials';

import * as QuoteActions from '../../../actions/quoteActions';

const Home = props => {
  const { list } = props;

  const renderError = () => (
    <Alert type="danger">
      An error occured while getting the quotes. Please refresh the page to try
      again.
    </Alert>
  );

  const renderEmptyState = () => (
    <Card>
      <p className="card-text">
        There isn&lsquo;t any inspirational quotes yet. Click{' '}
        <Link to="">here</Link> to add one.
      </p>
    </Card>
  );

  const renderQuotesList = () => {
    if (list.loading) return <Loader />;

    if (list.error) return renderError();

    if (list.data.length === 0) return renderEmptyState();

    return list.data.map(quote => (
      <InspoCard
        key={quote.id}
        content={quote.content}
        author={quote.author}
        user={quote.user}
      />
    ));
  };

  return (
    <>
      <Title title="Welcome, get some inspiration!" className="text-center" />
      {renderQuotesList()}
    </>
  );
};

Home.propTypes = {
  fetchQuotes: PropTypes.func.isRequired,
  list: PropTypes.shape({
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

const enhance = compose(
  connect(
    ({ quote: { list } }) => ({ list }),
    dispatch => ({
      fetchQuotes: () => dispatch(QuoteActions.fetchQuotes()),
    })
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchQuotes();
    },
  })
);

export default enhance(Home);

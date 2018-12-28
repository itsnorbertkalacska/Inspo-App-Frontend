import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Card, Loader, Title } from '../../atoms';
import { InspoCard } from './Home.partials';

import * as QuoteActions from '../../../actions/quoteActions';

class Home extends React.PureComponent {
  componentDidMount() {
    this.props.fetchQuotes();
  }

  renderEmptyState() {
    return (
      <Card>
        <p className="card-text">
          There isn&lsquo;t any inspirational quotes... :( Click{' '}
          <Link to="">here</Link> to add one.
        </p>
      </Card>
    );
  }

  renderQuotesList() {
    const { list } = this.props;

    if (list.loading) return <Loader />;

    if (list.data.length === 0) return this.renderEmptyState();

    return list.data.map(quote => (
      <InspoCard
        key={quote.id}
        content={quote.content}
        author={quote.author}
        user={quote.user}
      />
    ));
  }

  render() {
    return (
      <>
        <Title title="Welcome, get some inspiration!" className="text-center" />
        {this.renderQuotesList()}
      </>
    );
  }
}

Home.propTypes = {
  fetchQuotes: PropTypes.func.isRequired,
  list: PropTypes.shape({
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => state.quote;
const mapDispatchToProps = dispatch => ({
  fetchQuotes: () => dispatch(QuoteActions.fetchQuotes()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize.css';

import { Layout, PrivateRoute } from '../atoms';
import { About, Home, Login, NoMatch, Profile, UserDetail } from '../pages';

import { Footer, Header } from './Environment.partials';

const Environment = () => (
  <Router>
    <>
      <Header />

      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Login} />
          <Route path="/users/:id" exact component={UserDetail} />
          <PrivateRoute path="/profile" exact component={Profile} />
          <Route component={NoMatch} />
        </Switch>
      </Layout>

      <Footer />
    </>
  </Router>
);

export default Environment;

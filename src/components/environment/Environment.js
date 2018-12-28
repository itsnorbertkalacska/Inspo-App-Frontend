import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'normalize.css';

import { Footer, Header, Layout } from '../atoms';
import { About, Home, Login, UserDetail } from '../pages';

const Environment = () => (
  <Router>
    <>
      <Header />

      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/login" exact component={Login} />
        <Route path="/users/:id" exact component={UserDetail} />
      </Layout>

      <Footer />
    </>
  </Router>
);

export default Environment;

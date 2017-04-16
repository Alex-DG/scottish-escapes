import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

// Layouts
import AppLayout from '../../ui/layouts/AppLayout.js';

// Pages
import HomePage from '../../ui/pages/HomePage.js';

// Containers

// Components

Meteor.startup(() => {

  render(
    <Router history={ browserHistory }>
      <Route name="app" path="/" component={ AppLayout }>
        <IndexRoute name="home" component={ HomePage } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});

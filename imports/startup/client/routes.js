import React from 'react';
import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import { render } from 'react-dom';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

// Layouts
import AppLayout from '../../ui/layouts/AppLayout.js';

// Pages
import LoginPage from '../../ui/pages/LoginPage.js';

// Containers
import ImagesContainer from '../../ui/container/ImagesContainer';

// Components

Meteor.startup(() => {

  render(
    <Router history={ browserHistory }>
      <Route name="app" path="/" component={ AppLayout }>
        <IndexRoute name="home" component={ ImagesContainer } />
        <Route name="login" path="/login" title="Login" component={ LoginPage } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});

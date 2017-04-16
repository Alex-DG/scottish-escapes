import React from 'react';
import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import { render } from 'react-dom';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

// Layouts
import AppLayout from '../../ui/layouts/AppLayout.js';

// Pages
import HomePage from '../../ui/pages/HomePage.js';

// Containers

// Components

Meteor.startup(() => {

  // WebApp.connectHandlers.use(function(req, res, next) {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  //   res.setHeader("Access-Control-Allow-Headers", "*");
  //   return next();
  // });

  render(
    <Router history={ browserHistory }>
      <Route name="app" path="/" component={ AppLayout }>
        <IndexRoute name="home" component={ HomePage } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});

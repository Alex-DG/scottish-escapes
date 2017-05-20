import React from 'react';
import { render } from 'react-dom';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import { isLogged } from '../../modules/access';

// Layouts
import AppLayout from '../../ui/layouts/AppLayout.js';

// Pages
import LoginPage from '../../ui/pages/LoginPage.js';
import ArticlePage from '../../ui/pages/ArticlePage';

// Containers
import ImagesContainer from '../../ui/container/ImagesContainer';

// Components


Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route name="app" path="/" component={ AppLayout }>
        <IndexRoute name="home" component={ ImagesContainer } />
      </Route>

      <Route name="login" path='/login' title='Login' component={ AppLayout } onEnter={ isLogged } >
        <IndexRoute name="login" component={ LoginPage } />
        <Route name="article" path='/article' component={ ArticlePage }/>
      </Route>

    </Router>,
    document.getElementById('react-root')
  );
});

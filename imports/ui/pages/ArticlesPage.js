import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

import Dashboard from '../components/articles/Dashboard';


class ArticlesPage extends Component {
  constructor() {
    super();
    this.state = { articles: [] };
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.articles) {
      this.setState({  articles: nextProps.articles });
    }
  }

  handleLogout() {
    Meteor.logout(() => {
      browserHistory.push('/login');
      Bert.alert('Choux has logged out :\'(', 'success');
    });
  }

  render() {
    return(
      <div>
        <div>
          <button type="button" className="btn btn-danger" onClick={ this.handleLogout }>
            <span className="glyphicon glyphicon-log-out" style={ {paddingRight: '10px'} }></span>Logout
          </button>
        </div>

        <div>
          <Dashboard articles={ this.state.articles } />
        </div>
      </div>
    );
  }
}

ArticlesPage.propTypes = {
  articles: PropTypes.array,
};

export default ArticlesPage;

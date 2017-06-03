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
        <div className="row">
          <button type="button" className="btn btn-danger pull-right margin-top-10 margin-right-10" onClick={ this.handleLogout }>
            <span className="glyphicon glyphicon-log-out"/><span>Logout</span>
          </button>
        </div>

        <div>
          <div className="align">
            <div className="align-item">
              <h2>Scottish Escapes - Articles Dashboard</h2>
            </div>
          </div>
          <div className="margin-top-15">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="container">
                  <Dashboard articles={ this.state.articles } />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ArticlesPage.propTypes = {
  articles: PropTypes.array,
};

export default ArticlesPage;

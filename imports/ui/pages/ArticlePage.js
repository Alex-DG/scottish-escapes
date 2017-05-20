import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

class ArticlePage extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
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
        ArticlePage!!!!
        <button type="button" className="btn btn-danger" onClick={ this.handleLogout }>
          <span className="glyphicon glyphicon-log-out" style={ {paddingRight: '10px'} }></span>Logout
        </button>
      </div>
    );
  }
}

export default ArticlePage;

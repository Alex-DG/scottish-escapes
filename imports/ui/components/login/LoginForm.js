import React, { Component } from 'react';

import { Meteor } from 'meteor/meteor';

import { Bert } from 'meteor/themeteorchef:bert';
import { browserHistory } from 'react-router';


class LoginForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const username = this.refs.user.value;
    const password = this.refs.pass.value;

    Meteor.loginWithPassword(username, password, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Welcome Sir Choux :D !', 'success');

        browserHistory.push('/articles');
      }
    });
  }

  render() {
    return(
      <div>
        <form style={ {padding: '20px'} } id="loginForm" className="form-horizontal" onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label htmlFor="username" className="control-label">Username</label>
            <input
               type="text"
               id="username"
               name="username"
               ref="user"
               placeholder="Username"
               className="form-control required" />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="control-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              ref="pass"
              placeholder="Password"
              className="form-control required " />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-success btn-block">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;

import React, { Component } from 'react';

class LoginForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('handleSubmit');
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
               placeholder="Username"
               className="form-control required" />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="control-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="PIN"
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

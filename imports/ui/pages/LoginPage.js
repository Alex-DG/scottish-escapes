import React, { Component } from 'react';

import LoginForm from '../components/login/LoginForm';

class LoginPage extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div style={ {marginTop: '50px'} } className="container">
        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
          <div className="panel panel-default">
            <div className="panel-body">
              <h3 className="text-center">Choux Login</h3>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;

import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="row auth-box">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <div className="panel panel-default">
              <div className="panel-body">
                <h3 className="text-center">Not Found</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;

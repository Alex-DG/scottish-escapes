import React, { Component } from 'react';

import { Bert } from 'meteor/themeteorchef:bert';

class AddArticleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const newState = { [name]: value };
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    Meteor.call('articles.insert', this.state.title, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Article successfully added', 'success');
        this.props.closeModal();
      }
    });
  }

  render() {
    return(
      <div className="margin-top-30">
        <form role="form" className="form-vertical" onSubmit={ this.handleSubmit }>
          <div className="align">
            <div className="col-xs-12 col-md-10">

              <div className="form-group">
                 <input ref="title"
                   type="text"
                   className="form-control"
                   placeholder="Enter title"
                   name="title"
                   defaultValue={ this.state.title }
                   onChange={ this.handleInputChange } />
              </div>

              <div className="form-group">
                <div className="text-center">
                  <input type="submit" className="btn btn-success" value="Submit" />
                </div>
              </div>

            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddArticleForm;

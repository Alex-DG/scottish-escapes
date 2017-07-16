import React, { Component } from 'react';

import { Bert } from 'meteor/themeteorchef:bert';

class AddArticleForm extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    this.props.handleRemove(event.target.value)
    this.props.closeModal();
  }

  render() {
    return(
      <div className="margin-top-30">
        <div className="align">
          <div className="align-item">
            <input style={ styles.btnStyle } type="button" className="btn btn-warning" value="YES" onClick={ this.handleOnClick } />
            <input style={ styles.btnStyle } type="button" className="btn btn-danger" value="NO" onClick={ this.handleOnClick }/>
          </div>
        </div>
      </div>
    );
  }
}

styles = {
  btnStyle: {
    fontSize: '15px',
    width: '100px',
  }
}

export default AddArticleForm;

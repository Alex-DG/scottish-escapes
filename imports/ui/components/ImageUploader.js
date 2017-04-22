import React from 'react';
import Dropzone from 'react-dropzone';

import { Slingshot } from 'meteor/edgee:slingshot';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert'

import UploadModal from './modals/upload/UploadModal';

class ImageUploader extends React.Component {

  constructor() {
    super();
    this.state = { isOpen: false };
  }

////////////////////////////////////////////////////////////////////////////////
  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }
////////////////////////////////////////////////////////////////////////////////

  render() {

    const title = "Upload Image";

    return(
      <div>
        <button
          type="button"
          className="btn btn-success"
          onClick={ () => this.openModal() }>Upload Image</button>

          <UploadModal
            title={ title }
            isOpen={ this.state.isOpen }
            closeModal={ this.closeModal.bind(this) } />
      </div>
    );
  }
}

export default ImageUploader;

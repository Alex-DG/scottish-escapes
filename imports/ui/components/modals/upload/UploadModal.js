import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'meteor/patrickml:react-modal';

import UploadForm from './UploadForm.js';

/*
 * Upload Image modal
 * @title: Modal's title
 */
class UploadModal extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Modal
        isOpen={ this.props.isOpen }
        title={ this.props.title }
        close={ this.props.closeModal }>

        <UploadForm closeModal={ this.props.closeModal } />

        <button onClick={ this.props.closeModal }>Close</button>

      </Modal>
    );
  }
}

UploadModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default UploadModal;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../../Modal';

class AddArticleModal extends Component {
  render() {
    return (
      <Modal
        containerClassName="col-xs-12 col-md-6 col-md-offset-3"
        title={ this.props.title }
        isOpen={ this.props.isOpen }
        close={ this.props.closeModal }>

        <div>
          AddArticleForm
        </div>

      </Modal>
    );
  }
}

AddArticleModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default AddArticleModal;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../../Modal';
import RemoveArticleForm from './RemoveArticleForm';

class RemoveArticleModal extends Component {
  render() {
    return (
      <Modal
        containerClassName="col-xs-12 col-md-6 col-md-offset-3"
        title={ this.props.title }
        isOpen={ this.props.isOpen }
        close={ this.props.closeModal }>

        <div>
          <RemoveArticleForm
            handleRemove={ this.props.handleRemove }
            closeModal={ this.props.closeModal } />
        </div>

      </Modal>
    );
  }
}

RemoveArticleModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default RemoveArticleModal;

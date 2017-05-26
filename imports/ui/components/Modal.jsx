import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string, // CSS class applied to content modal
  close: PropTypes.func.isRequired,
  containerClassName: PropTypes.string, // CSS class applied to container
  headingChildren: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
};

const defaultProps = {
  className: undefined,
  containerClassName: undefined,
  headingChildren: undefined,
};

const Modal = function Modal({ title, children, close, containerClassName,
  headingChildren, isOpen, className }) {
  const modalClassNames = classNames({
    'our-modal-content': true,
    'container-fluid': true,
    [className]: className,
  });

  const containerClassNames = classNames({
    'react-modal-container': true,
    [containerClassName]: containerClassName,
  });

  return (
    <ReactModal
      className={containerClassNames}
      overlayClassName="modal-overlay"
      onRequestClose={close}
      isOpen={isOpen}
      contentLabel={title}
    >
      <div className="modal-container">
        <button className="btn -icon close-btn" onClick={close}>
          <span className="slicon icon-close" />
        </button>

        <div className={modalClassNames}>
          <h2 className="title">{title}{headingChildren}</h2>
          {children}
        </div>
      </div>
    </ReactModal>
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;

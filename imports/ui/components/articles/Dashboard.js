import React, { Component } from 'react';

import ArticlesTable from './ArticlesTable';
import AddArticleModal from '../modals/addarticle/AddArticleModal'

const addArticle = 'Add Article'

const defaultProps = {
  // Default params
  isOpen: false,
  btnText: addArticle,
  modalTitle: addArticle,
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { articles: [], isOpen: props.isOpen  };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.articles) {
      this.setState({ articles: nextProps.articles });
    }
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {

    return (
      <div>
        <div className="align">
          <div className="align-item">
            <button type="button" className="btn btn-success" onClick={ this.openModal }>
              { this.props.btnText }
            </button>
          </div>
        </div>

        <div>
          <ArticlesTable articles={ this.state.articles } />
        </div>

        <AddArticleModal
          title={ this.props.modalTitle }
          closeModal={ this.closeModal }
          isOpen={ this.state.isOpen } />
      </div>
    );
  }
}

Dashboard.defaultProps = defaultProps;

export default Dashboard;

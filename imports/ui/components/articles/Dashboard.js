import React, { Component } from 'react';

import ArticlesTable from './ArticlesTable';
import ArticleEdit from './ArticleEdit';
import AddArticleModal from '../modals/addarticle/AddArticleModal'

const defaultProps = {
  isOpen: false,
  articleToEdit: undefined,
  modalTitle: 'Add Article',
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      newArticleId: undefined,
      articleToEdit: undefined,
      isEdit: false,
      isOpen: props.isOpen  };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.handleSaveArticle = this.handleSaveArticle.bind(this);
    this.handleEdition = this.handleEdition.bind(this);
    this.handleInsertion = this.handleInsertion.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.articles) {

      let isEdit = false;
      let articleToEdit = undefined;

      if (this.state.newArticleId) {
        const articles = nextProps.articles.filter( a => a._id === this.state.newArticleId);
        if (articles && articles[0]) {
          isEdit = true;
          articleToEdit = articles[0];
        }
      }

      this.setState({ articles: nextProps.articles, isEdit: isEdit, articleToEdit: articleToEdit });
    }
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  getArticleById(id) {
    const articles = nextProps.articles.filter( a => a._id === id);
    if (articles && articles[0]) {
      return articles[0];
    }
    return undefined
  }

  handleSaveArticle() {
    this.setState({ articleToEdit: undefined });
  }

  handleInsertion(newArticleId) {
    this.setState({ newArticleId: newArticleId });
  }

  handleEdition(article) {
    this.setState({ isEdit: true, articleToEdit: article });
  }

  handleBack() {
    this.setState({ newArticleId: undefined, isEdit: false, articleToEdit: undefined });
  }

  render() {
    return (
      <div>
        { this.state.isEdit ?

          <div>
            <div onClick={ this.handleBack }>
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span>Back</span>
            </div>
            <div className="align">
              <div className="align-item">
                <button type="button" className="btn btn-success" onClick={ this.handleSaveArticle }>
                  Save Article
                </button>
              </div>
            </div>

            <div>
              <ArticleEdit article={ this.state.articleToEdit } />
            </div>
          </div>

          :

          <div>
            <div className="align">
              <div className="align-item">
                <button type="button" className="btn btn-success" onClick={ this.openModal }>
                  Add Article
                </button>
              </div>
            </div>

            <div>
              <ArticlesTable edit={ this.handleEdition } articles={ this.state.articles } />
            </div>
          </div>
        }

        <AddArticleModal
          title={ this.props.modalTitle }
          add={ this.handleInsertion }
          closeModal={ this.closeModal }
          isOpen={ this.state.isOpen } />
      </div>
    );
  }
}

Dashboard.defaultProps = defaultProps;

export default Dashboard;

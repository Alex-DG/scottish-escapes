import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

import classNames from 'classnames';

import ArticlesTable from '../components/articles/ArticlesTable';
import ArticleEdit from '../components/articles/ArticleEdit';
import AddArticleModal from '../components/modals/addarticle/AddArticleModal';

const propTypes = {
  articles: PropTypes.array.isRequired,
  article: PropTypes.object,
  isOpen: PropTypes.bool,
  articleId: PropTypes.string,
  modalTitle: PropTypes.string,
};

const defaultProps = {
  articles: [],
  article: undefined,
  articleId: '',
  isOpen: false,
  isArticleEdit: false,
  modalTitle: 'Add New Article',
};

class ArticlesPage extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], article: props.article, isOpen: props.isOpen, articleId: props.articleId };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleBackNav = this.handleBackNav.bind(this);
    this.handleAddArticle = this.handleAddArticle.bind(this);
    this.handleArticleEdit = this.handleArticleEdit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.articleId !== '') {
      const articlesFilter = nextProps.articles.filter( a => a._id === this.state.articleId);
      this.setState({  articles: nextProps.articles, article: articlesFilter[0] });
    } else {
      this.setState({  articles: nextProps.articles });
    }
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  handleAddArticle(id) {
    this.setState({ articleId: id });
  }

  handleArticleEdit(article) {
    this.setState({ article: article });
  }

  handleBackNav() {
    this.setState({ article: this.props.article });
  }

  handleLogout() {
    Meteor.logout(() => {
      browserHistory.push('/login');
      Bert.alert('log out :\'(', 'success');
    });
  }

  render() {

    const classNameCollapse = classNames({
      'collapse': (this.state.article !== undefined ? true : false)
    });

    return(
      <div>

        <div className="row">
          <button type="button" className="btn btn-danger pull-right margin-top-10 margin-right-10" onClick={ this.handleLogout }>
            <span className="glyphicon glyphicon-log-out"/><span>Logout</span>
          </button>
        </div>

        <div>

          <div className="align">
            <div className="align-item">
              <h2>Scottish Escapes - Articles Dashboard</h2>
            </div>
          </div>

          <div className="margin-top-15">
            <div className="panel panel-default">
              <div className="panel-body">

                <div className={ classNameCollapse }>
                  <div className="align">
                    <button type="button" className="btn btn-success" onClick={ this.openModal }>
                      <span>Add Article</span>
                    </button>
                  </div>
                </div>

                <div className="container">

                  { this.state.article !== undefined ?

                    <ArticleEdit article={ this.state.article } handleBack={ this.handleBackNav } />

                    :

                    <ArticlesTable articles={ this.state.articles } handleEdit={ this.handleArticleEdit } />

                  }
                </div>

              </div>
            </div>

          </div>

        </div>

        <AddArticleModal
          isOpen={ this.state.isOpen }
          closeModal={ this.closeModal }
          title={ this.props.modalTitle }
          handleAdd={ this.handleAddArticle }
        />
      </div>
    );
  }
}


ArticlesPage.propTypes = propTypes;
ArticlesPage.defaultProps = defaultProps;

export default ArticlesPage;

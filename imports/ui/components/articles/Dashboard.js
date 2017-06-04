import React, { Component, PropTypes } from 'react';

import ArticlesTable from './ArticlesTable';
import ArticleEdit from './ArticleEdit';
import AddArticleModal from '../modals/addarticle/AddArticleModal'

const propTypes = {
  articles: PropTypes.array,
  article: PropTypes.object,
  isArticleEdit: PropTypes.bool,
};

const defaultProps = {
  articles: [],
  article: undefined,
  isArticleEdit: false,
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: props.articles,
      article: props.article,
      isArticleEdit: props.isArticleEdit
    };

    this.handleSave = this.handleSave.bind(this);
    this.handleEdition = this.handleEdition.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.articles) {
      this.setState({ articles: nextProps.articles });
    }
  }

  handleBack() { // Handle back navigation between components
    this.setState({ isArticleEdit: false, article: undefined });
  }

  handleSave() {
    this.setState({ isArticleEdit: false, article: undefined });
  }

  handleAddNew() { // Just handle navigation between components
    this.setState({ isArticleEdit: false, article: undefined });
  }

  handleEdition(article) {
    this.setState({ isArticleEdit: true, article: article });
  }

  render() {
    return (
      <div>
        { this.state.isArticleEdit ?

          <div>
            <div onClick={ this.handleBack }>
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span>Back</span>
            </div>

            <div>
              <ArticleEdit save={ this.handleSave } article={ this.state.article } />
            </div>
          </div>

          :

          <div>
            <div>
              <ArticlesTable save={ this.handleSave } edit={ this.handleEdition } add={ this.handleAddNew } articles={ this.state.articles } />
            </div>
          </div>
        }
      </div>
    );
  }
}

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;

export default Dashboard;

import React, { Component } from 'react';

import ArticlesTable from './ArticlesTable';
import ArticleEdit from './ArticleEdit';
import AddArticleModal from '../modals/addarticle/AddArticleModal'

const defaultProps = {
  isOpen: false,
  article: undefined
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      article: undefined,
      isArticleEdit: false
    };

    this.handleSaveArticle = this.handleSaveArticle.bind(this);
    this.handleEdition = this.handleEdition.bind(this);
    this.handleInsertion = this.handleInsertion.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.articles) {
      this.setState({ articles: nextProps.articles });
    }
  }

  handleSaveArticle() {
    this.setState({ article: undefined });
  }

  handleInsertion() {
    this.setState({  isArticleEdit: true, article: undefined });
  }

  handleEdition(article) {
    console.log(article);
    this.setState({ isArticleEdit: true, article: article });
  }

  handleBack() {
    this.setState({  isArticleEdit: false, article: undefined });
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
            <div className="align">
              <div className="align-item">
                <button type="button" className="btn btn-success" onClick={ this.handleSaveArticle }>
                  Save Article
                </button>
              </div>
            </div>

            <div>
              <ArticleEdit article={ this.state.article } />
            </div>
          </div>

          :

          <div>
            <div className="align">
              <div className="align-item">
                <button type="button" className="btn btn-success" onClick={ this.handleInsertion }>
                  Add Article
                </button>
              </div>
            </div>

            <div>
              <ArticlesTable edit={ this.handleEdition } articles={ this.state.articles } />
            </div>
          </div>
        }
      </div>
    );
  }
}

Dashboard.defaultProps = defaultProps;

export default Dashboard;

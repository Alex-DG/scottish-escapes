import React, { Component } from 'react';

import ArticlesTable from './ArticlesTable';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = { articles: [] };
    this.handleAddArticle = this.handleAddArticle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.articles) {
      this.setState({ articles: nextProps.articles });
    }
  }

  handleAddArticle() {

  }

  render() {
    return (
      <div>
        <div className="align">
          <div className="align-item">
            <button type="button" className="btn btn-success" onClick={ this.handleAddArticle }>
              Add Article
            </button>
          </div>
        </div>

        <div>
          <ArticlesTable articles={ this.state.articles } />
        </div>
      </div>
    );
  }
}

export default Dashboard;

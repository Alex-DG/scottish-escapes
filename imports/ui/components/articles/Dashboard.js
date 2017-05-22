import React, { Component } from 'react';

import ArticlesTable from './ArticlesTable';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = { articles: [] };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.articles) {
      this.setState({ articles: nextProps.articles });
    }
  }

  render() {
    return (
      <div>
        <ArticlesTable articles={ this.state.articles } />
      </div>
    );
  }
}

export default Dashboard;

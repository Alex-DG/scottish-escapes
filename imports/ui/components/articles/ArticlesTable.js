import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class ArticlesTable extends Component {
  constructor() {
    super();
    this.state = { articles: [], articleToEdit: {} };
    this.renderBtns = this.renderBtns.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.articles) {
      this.setState({ articles: nextProps.articles });
    }
  }

  renderBtns(cell, row, enumObject, rowIndex) {
    return (
      <div className="row align">
        <div onClick={ () => this.handleEdit(rowIndex) }>
          <span style={ {paddingLeft: '10px'} } className="glyphicon glyphicon-edit"></span>
        </div>
        <div onClick={ () => this.handleDelete(rowIndex) }>
          <span style={ {paddingLeft: '10px'} } className="glyphicon glyphicon-remove"></span>
        </div>
      </div>
    );
  }

  handleEdit(rowIndex) {
    const article = this.state.articles[rowIndex];
    if (article) {
      //TODO: open edit article component
      console.log(article);
    }
  }

  handleDelete(rowIndex) {
    const article = this.state.articles[rowIndex];
    if (article) {
      const id = article._id
      Meteor.call('articles.remove', id, (error) => {
        if (error) {
          Bert.alert(error.reason, 'danger');
        } else {
          Bert.alert('Article successfully removed', 'success');
        }
      });
    }
  }

  render() {
    return (
      <div className="margin-top-15">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="col-xs-12 col-sm-12 react-table">
              <BootstrapTable
                ref="articles-table"
                data={ this.state.articles }
                pagination
                bordered={ false }
                hover>

                <TableHeaderColumn width='25' />
                <TableHeaderColumn isKey dataField='_id' hidden>ID</TableHeaderColumn>
                <TableHeaderColumn width='100' dataField='created_at' dataSort={ true } dataAlign="center">Creation</TableHeaderColumn>
                <TableHeaderColumn width='100' dataField='updated_at' dataSort={ true } dataAlign="center">Updated At</TableHeaderColumn>
                <TableHeaderColumn width='200' dataField='title' dataSort={ true } dataAlign="center">Title</TableHeaderColumn>
                <TableHeaderColumn width='100' dataField='' dataFormat={ this.renderBtns } dataAlign="center"></TableHeaderColumn>
                <TableHeaderColumn width='25' />
              </BootstrapTable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticlesTable;

import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class ArticlesTable extends Component {
  constructor() {
    super();
    this.state = { articles: [] };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.articles) {
      this.setState({ articles: nextProps.articles });
    }
  }

  handleEdit(cell, row){
    return (
      <button type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>Edit
      </button>
    );
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-12 react-table">
        <BootstrapTable
          ref="glucometers-table"
          data={ this.state.articles }
          pagination
          bordered={ false }
          hover>

          <TableHeaderColumn width='25' />
          <TableHeaderColumn isKey dataField='_id' hidden>ID</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='created_at' dataSort={ true }>Creation</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='title' dataSort={ true }>Title</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='updated_at' dataSort={ true }>Updated At</TableHeaderColumn>
          <TableHeaderColumn dataField="button" dataFormat={ this.handleEdit }>Edition</TableHeaderColumn>
          <TableHeaderColumn width='25' />
        </BootstrapTable>

      </div>
    );
  }
}

export default ArticlesTable;

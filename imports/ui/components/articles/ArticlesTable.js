import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class ArticlesTable extends Component {
  constructor() {
    super();
    this.state = { articles: [], articleToEdit: {} };
    this.renderEditBtn = this.renderEditBtn.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.articles) {
      this.setState({ articles: nextProps.articles });
    }
  }

  renderEditBtn(cell, row, enumObject, rowIndex) {
    return (
      <div onClick={ () => this.handleEdit(rowIndex) }>
        <span style={ {paddingLeft: '10px'} } className="glyphicon glyphicon-edit"></span>
      </div>
    );
  }

  handleEdit(rowIndex) {
    if (this.state.articles) {
      const article = this.state.articles[rowIndex];
      this.setState({ articleToEdit: article });
    } else {
      alert('Error: can\'t find articles..');
    }
  }

  render() {
    return (
      <div className="margin-top-15">
        <div className="panel panel-default">
          <div className="panel-body">
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
                <TableHeaderColumn width='150' dataField='' dataFormat={ this.handleEdit }>Edit</TableHeaderColumn>
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

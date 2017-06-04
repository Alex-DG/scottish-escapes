import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import RemoveArticleModal from '../modals/removearticle/RemoveArticleModal';

const defaultProps = {
  // Default params
  isOpen: false,
  modalTitle: 'Remove Article',
}

class ArticlesTable extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], isOpen: props.isOpen, rowIndex: undefined };
    this.renderBtns = this.renderBtns.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleRemoveStatus = this.handleRemoveStatus.bind(this);
  }

  openModal(rowIndex) {
    this.setState({ isOpen: true, rowIndex: rowIndex});
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  componentWillMount() {
    this.setState({ articles: this.props.articles });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ articles: nextProps.articles });
  }

  renderBtns(cell, row, enumObject, rowIndex) {
    return (
      <div className="row align">
        <div onClick={ () => this.handleEdit(rowIndex) }>
          <span style={ {paddingLeft: '10px'} } className="glyphicon glyphicon-edit"></span>
        </div>
        <div onClick={ () => this.openModal(rowIndex) }>
          <span style={ {paddingLeft: '10px'} } className="glyphicon glyphicon-remove"></span>
        </div>
      </div>
    );
  }

  handleRemoveStatus(status) {
    if (status === 'YES') {
      const article = this.state.articles[this.state.rowIndex];
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
  }

  handleEdit(rowIndex) {

    const article = this.state.articles[rowIndex];
    if (article) {
      this.props.edit(article);
    }
  }

  handleDelete(rowIndex) {

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


        <RemoveArticleModal
          title={ this.props.modalTitle }
          closeModal={ this.closeModal }
          handleRemoveStatus={ this.handleRemoveStatus }
          isOpen={ this.state.isOpen } />
      </div>
    );
  }
}

ArticlesTable.defaultProps = defaultProps;

export default ArticlesTable;

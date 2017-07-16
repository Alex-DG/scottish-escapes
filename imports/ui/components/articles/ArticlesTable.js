import React, { Component, PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import RemoveArticleModal from '../modals/removearticle/RemoveArticleModal';

const propTypes = {
  articles: PropTypes.array,
  isOpen: PropTypes.bool,
  articleToRemove: PropTypes.object,
  modalTitle: PropTypes.string,
};

const defaultProps = {
  articles: [],
  isOpen: false,
  articleToRemove: undefined,
  modalTitle: 'Remove Article',
}

class ArticlesTable extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: props.article, isOpen: props.isOpen, articleToRemove: props.articleToRemove };

    this.renderBtns = this.renderBtns.bind(this);

    this.closeModal = this.closeModal.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  openModal(row) {
    this.setState({ isOpen: true, articleToRemove: row});
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

  renderBtns(cell, row, enumObject) {
    return (
      <div className="row align">
        <div onClick={ () => this.props.handleEdit(row) }>
          <span style={ {paddingLeft: '10px'} } className="glyphicon glyphicon-edit"></span>
        </div>
        <div onClick={ () => this.openModal(row) }>
          <span style={ {paddingLeft: '10px'} } className="glyphicon glyphicon-remove"></span>
        </div>
      </div>
    );
  }

  handleRemove(status) {
    if (status === 'YES') {
      const articles = this.state.articles.filter( a => a._id === this.state.articleToRemove._id );
      if (articles[0]) {
        const id = articles[0]._id
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

  render() {
    return (
      <div>

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
            handleRemove={ this.handleRemove }
            isOpen={ this.state.isOpen } />
        </div>
      </div>
    );
  }
}

ArticlesTable.defaultProps = defaultProps;

export default ArticlesTable;

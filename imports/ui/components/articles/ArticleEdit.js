import React, { Component, PropTypes } from 'react';
import update from 'react-addons-update';
import Dropzone from 'react-dropzone';

import DraftEditor from '../DraftEditor';
import PhotoUploader from '../PhotoUploader';

const propTypes = {
  article: PropTypes.object.isRequired,
  preview: PropTypes.string,
};

const defaultProps = {
  preview: undefined,
  article: {
    title: '',
    location: '',
    description: '',
    thumbnail: '',
    images: [],
 },
};

class ArticleEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: props.article, preview: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleArticleSave = this.handleArticleSave.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.article) {
      this.setState({ article: nextProps.article });
    }
  }

  handleArticleSave() {
    this.props.handleSave(this.props.article);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    const articleUpdated = update(this.state.article, {
      [name] : { $set: value }
    });

    this.setState({ article: articleUpdated });
  }

  handlePreview(preview) {
    this.setState({ preview: preview });
  }

  render() {
    return(
      <div>
        
        <div onClick={ this.props.handleBack }>
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span>Back</span>
        </div>

        <div className="align">
          <div className="align-item">
            <button type="button" className="btn btn-success" onClick={ this.handleArticleSave }>
              Save Article
            </button>
          </div>
        </div>

        <div className="margin-top-15">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal">

                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Enter title"
                    onChange={ this.handleInputChange }
                    defaultValue={ this.state.article.title } />
                </div>

                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    placeholder="Enter location"
                    onChange={ this.handleInputChange }
                    defaultValue={ this.state.article.location } />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <div className="resize-container">
                    <DraftEditor
                      name="description"
                      placeholder="Enter description"
                      onChange={ this.handleInputChange } />
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>

        <div className="margin-top-15">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal">

                <div className="form-group">
                  <label>Thumbnail</label>
                  <div>
                    <div className="col-xs-12 col-sm-6">
                      <PhotoUploader
                        contextName={ 'thumbnail' }
                        handleUpload={ this.handleInputChange }
                        handlePreview={ this.handlePreview }
                      />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <img src={ this.state.preview } />
                    </div>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ArticleEdit.propTypes = propTypes;
ArticleEdit.defaultProps = defaultProps;

export default ArticleEdit;

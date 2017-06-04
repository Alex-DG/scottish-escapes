import React, { Component, PropTypes } from 'react';
import update from 'react-addons-update';
import Dropzone from 'react-dropzone';

import DraftEditor from '../DraftEditor';
import Thumbnail from '../grid/Thumbnail';

const propTypes = {
  article: PropTypes.object,
};

const defaultProps = {
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
      article: props.article,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSaveArticle = this.handleSaveArticle.bind(this);

    this.handleThumbnail = this.handleThumbnail.bind(this);
    this.handleDropImages = this.handleDropImages.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.article) {
      this.setState({ article: nextProps.article });
    }
  }

  handleSaveArticle() {
    this.props.save(this.props.article);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    const articleUpdated = update(this.state.article, {
      [name] : { $set: value }
    });

    this.setState({ article: articleUpdated });
  }

  handleThumbnail() {
    const file = this.fileUpload.files[0];

    if (file) {
      let reader = new FileReader();
      let url = reader.readAsDataURL(file);

      reader.onloadend = function (e) {
              this.setState({
                  preview: reader.result,
              })
            }.bind(this);
    }
  }

  handleDropImages(files) {
    console.log(files);
  }

  render() {
    return(
      <div>
        <div className="align">
          <div className="align-item">
            <button type="button" className="btn btn-success" onClick={ this.handleSaveArticle }>
              Save Article
            </button>
          </div>
        </div>

        <div className="margin-top-15">
          <div className="container">
            <form className="form-horizontal">

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Enter title"
                  onChange={ this.handleInputChange }
                  defaultValue={ this.state.article.title } />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  placeholder="Enter location"
                  onChange={ this.handleInputChange }
                  defaultValue={ this.state.article.location } />
              </div>

              <div className="form-group">
                <div className="resize-container">
                  <DraftEditor
                    name="description"
                    placeholder="Enter description"
                    onChange={ this.handleInputChange } />
                </div>
              </div>

              {/* <div className="form-group row">
                <div className="col-xs-12 col-sm-3">
                  <label htmlFor="thumbnailfile">Select Thumbnail</label>
                  <input
                    type='file' accept='.jpg'
                    name="thumbnail"
                    onChange={ this.handleThumbnail }
                    ref={ (ref) => this.fileUpload = ref } />
                  <small id="fileHelp" className="form-text text-muted">Format: .jpg</small>
                </div>

                <div className="col-xs-12 col-sm-4">
                  <Thumbnail index={ 0 } url={ this.state.preview } />
                </div>
              </div>

              <div className="form-group row">
                <Dropzone onDrop={ this.handleDropImages }>
                  <div className="full-height flex-center-vertical-container">
                    <span>[ Drop your images here, or click to select one ]</span>
                  </div>
                </Dropzone>
              </div> */}

              {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}


ArticleEdit.propTypes = propTypes;
ArticleEdit.defaultProps = defaultProps;

export default ArticleEdit;

import React, { Component, PropTypes } from 'react';
import update from 'react-addons-update';
import Dropzone from 'react-dropzone';

import DraftEditor from '../DraftEditor';
import Thumbnail from '../grid/Thumbnail';

const propTypes = {
  article: PropTypes.object,
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
      article: props.article,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSaveArticle = this.handleSaveArticle.bind(this);
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

  handleDropImage(files) {
    console.log(files);
    const file = files[0];
    if (file) {
      this.setState({ preview: file.preview });
      // let reader = new FileReader();
      // let url = reader.readAsDataURL(file);
      // reader.onloadend = function (e) {
      //   this.setState({ preview: reader.result });
      // }.bind(this);
    }
  }

  handleDropImages(files) {
    console.log(files);
  }

  render() {
    console.log(this.state.preview);
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
          <div className="panel panel-default">
            <div className="panel-body">
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

              </form>
            </div>
          </div>
        </div>

        <div className="margin-top-15">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal">

                <div className="form-group">
                  <div className="col-xs-6 col-md-6">
                    <Dropzone
                      className="dropzone-container"
                      onDrop={ this.handleDropImage }>
                      <div className="align">
                        <span>[ Thumbnail: Drop or Select your file ]</span>
                      </div>
                    </Dropzone>
                  </div>
                  <div className="col-xs-6 col-md-6">
                    <div className="thumbnail">
                      <div>
                         <img src={ this.state.preview } />
                      </div>
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

import React, { Component } from 'react';
import update from 'react-addons-update';
import Dropzone from 'react-dropzone';

import Thumbnail from '../grid/Thumbnail';

class ArticleEdit extends Component {
  constructor(props) {
    super(props);

    this.state = { article: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleThumbnail = this.handleThumbnail.bind(this);
    this.handleDropImages = this.handleDropImages.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.article) {
      this.setState({ article: nextProps.article });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const title = this.refs.title.value;
    const location = this.refs.location.value;
    const description = this.refs.description.value;

    console.log(title);
    console.log(location);
    console.log(description);
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
      <div className="container">
        <form className="form-horizontal" onSubmit={ this.handleSubmit }>

          <div className="form-group">
            <input type="text" className="form-control" name="title" ref="title" placeholder="Enter title" defaultValue={ this.state.article.title } />
          </div>

          <div className="form-group">
            <input type="text" className="form-control" name="location" ref="location" placeholder="Enter location" defaultValue={ this.state.article.location } />
          </div>

          <div className="form-group">
            <textarea type="text" rows="6" className="form-control" name="description" ref="description" placeholder="Enter description" defaultValue={ this.state.article.description } />
          </div>

          <div className="form-group row">
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
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default ArticleEdit;

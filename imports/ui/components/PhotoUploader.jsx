import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';

import ProgressBar from './ProgressBar';

const propTypes = {
  progress: PropTypes.number,
  dragDropText: PropTypes.string,
  handleUpload: PropTypes.func.isRequired,
  contextName: PropTypes.string.isRequired,
  acceptedFiles: PropTypes.array,
  preview: PropTypes.string,
};

const defaultProps = {
  progress: -1,
  dragDropText: 'Click or Drag and drop Photo here',
  contextName: 'file',
  acceptedFiles: [],
  preview: undefined,
};

class PhotoUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: props.progress,
      dragDropText: props.dragDropText,
      contextName: props.contextName,
      acceptedFiles: props.preview };

    this.handleDrop = this.handleDrop.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleRemove() {
    this.setState({ preview: this.props.preview }, this.props.handlePreview(undefined));
  }

  handleUpload() {
    if (this.state.acceptedFiles) {
      this.setState({ progress: 0 });

      const metaContext = { name: this.state.contextName };
      const Uploader = new Slingshot.Upload('Uploads', metaContext);

      Uploader.send(this.state.acceptedFiles[0], (error, url) => {
        this.setState({ progress: Uploader.progress() * 100 });

        if (error) {
          Bert.alert(error.reason, 'danger');
        } else {
          const event = {
            target: {
              name: 'photo',
              value: url,
            }
          }

          this.props.handleUpload(event)

          setTimeout(() => {
            this.setState({ progress: this.props.progress });
          }, 1500);
        }
      });
    }
  }

  handleDrop(acceptedFiles, rejectedFiles) {
    if (acceptedFiles) {
      const preview = acceptedFiles[0].preview;
      this.setState({
        acceptedFiles: acceptedFiles,
        preview: preview
      }, this.props.handlePreview(preview));
    }
  }

  renderDropZone() {
    if (this.state.preview === undefined) {
      return (
        <Dropzone
          onDrop={ this.handleDrop }
          className="dropzone-container"
          activeClassName="dropzone-active" rejectClassName="dropzone-rejected"
        >
          <label
            htmlFor="photo-dropzone-input"
            className="text-center form-label" >{ this.state.dragDropText }</label>
        </Dropzone>
      );
    }
    return (
      <div className="align">
        <div className="col-xs-12 col-sm-2">
          <button type="submit" onClick={ this.handleRemove } className="btn btn-danger">Remove</button>
        </div>
        <div className="col-xs-12 col-sm-2">
          <button type="submit" onClick={ this.handleUpload } className="btn btn-success">Upload</button>
        </div>
      </div>
    );
  }

  render() {
    return(
      <div>
        { this.state.progress < 0 ?

          <div>
            { this.renderDropZone() }
          </div>

        :

        <div>
          <div>
            <ProgressBar progressValue={ this.state.progress } />
            { this.state.progress === 100 ?
              <div className="align">
                <label>Success !</label>
              </div>
            :
              <div className="align">
                <label>Uploading...</label>
              </div>
            }
          </div>
        </div>

        }
      </div>
    );
  }
}

PhotoUploader.propTypes = propTypes;
PhotoUploader.defaultProps = defaultProps;

export default PhotoUploader;

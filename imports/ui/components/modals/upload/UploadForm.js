import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import { Slingshot } from 'meteor/edgee:slingshot';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert'

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: '', name: '', caption: '', progress: -1 };
  }

  handleUpload() {

    const name = this.state.name;
    const src = this.state.src;
    const thumbnail = this.state.src;
    const caption = this.state.caption;

    Meteor.call('images.insert', name, src, thumbnail, caption, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('File successfully uploaded!', 'success');
      }
    });
  }

  handleDrop(files) {
    this.setState({ progress: 0 });

    const Uploader = new Slingshot.Upload('Uploads');

    if (files) {

      const caption = this.refs.caption.value;

      Uploader.send(files[0], (error, url) => {

        this.setState({ progress: Uploader.progress() * 100 });

        if (error) {
          Bert.alert(error.reason, 'danger');
        } else {

          const name = files[0].name;

          this.setState({
            src: url,
            name: name,
            caption: caption
          });

          this.handleUpload();
        }
      });
    }
  }

  render() {
    const progressStyle = {
      width: `${ this.state.progress }%`
    };

    return (
      <div className="flex-center-container">
        <form id="uploadDocument" className="full form-horizontal">
          <div className="form-group dropzone">

            { this.state.progress < 0 ?
            <div className="flex-column-container">
                <div style={ {margin: "10px"} }>
                  <p>
                    <input type="text" className="form-control" ref="caption" placeholder="Caption" defaultValue="" />
                  </p>
                </div>
                <div className="flex-center-container">
                  <Dropzone onDrop={ this.handleDrop.bind(this) }>
                    <div className="full-height flex-center-vertical-container">
                      <span>[ Drop your file here, or click to select one ]</span>
                    </div>
                  </Dropzone>
                </div>
            </div>
            :
            <div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info"
                  role="progressbar"
                  aria-valuenow={ this.state.progress }
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={ progressStyle }>
                </div>
              </div>

              { this.state.progress < 100 ?
                <div className="flex-center-container">
                  <p>Uploading file... { this.state.progress }%</p>
                </div>
                :
                <div className="flex-center-container">
                  <p>Success!</p>
                </div>
              }
            </div>
            }

          </div>
        </form>
      </div>
    );
  }
}

UploadForm.propTypes = {
  closeModal: PropTypes.func.isRequired
};

export default UploadForm;

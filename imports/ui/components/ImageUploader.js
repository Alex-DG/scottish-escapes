import React from 'react';
import Dropzone from 'react-dropzone';

import { Slingshot } from 'meteor/edgee:slingshot';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert'

class ImageUploader extends React.Component {

  constructor() {
    super();

    this.state = { url: "", name: "" };
  }

  handleDrop(files) {
    this.setState({ progress: 0 });

    const Uploader = new Slingshot.Upload('Uploads');
    console.log(files);
    console.log(Uploader);
    if (files) {
      Uploader.send(files[0], (error, url) => {
        if (error) {
          Bert.alert(error.reason, 'danger');
        } else {
          const name = files[0].name;
          this.setState({ url: url, name: name });
        }
      });
    }
  }

  handleSubmit() {
    let name = this.state.name;
    let url = this.state.url;

    console.log(url);

    Meteor.call('images.insert', name, url, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
        console.log('ERROR - submit');
      } else {
        Bert.alert('Document successfully uploaded', 'success');
      }
    });
  }

  render() {
    return(
      <div>
        <Dropzone onDrop={ this.handleDrop.bind(this) }>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <button type="submit" className="btn btn-default" onClick={ () => this.handleSubmit() }>
          <i className="glyphicon glyphicon-refresh" /><span style={ {paddingLeft: '10px'} }>Submit</span>
        </button>
      </div>
    );
  }
}

//<input type="submit" className="btn btn-success" value="Upload" />

export default ImageUploader;

import React from 'react';
import Dropzone from 'react-dropzone';

import { Slingshot } from 'meteor/edgee:slingshot';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert'

class Uploader extends React.Component {

  constructor() {
    super();

    this.state = { url: "", name: "" };
  }

  handleDrop(files) {
    this.setState({ progress: 0 });

    const Uploader = new Slingshot.Upload('Uploads');

    if (files) {
      Uploader.send(files[0], (error, url) => {
        //this.setState({ progress: Uploader.progress() * 100 });

        if (error) {
          Bert.alert(error.reason, 'danger');
        } else {
          const name = files[0].name;
          this.setState({ url: url, name: name });
        }
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    let name = this.state.name;
    let url = this.state.url;
    console.log(url);

    Meteor.call('images.insert', name, url, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document successfully uploaded', 'success');
        this.props.closeModal();
      }
    });
  }

  render() {
    return(
      <div>
        <Dropzone onDrop={ this.handleDrop.bind(this) }>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <input type="submit" className="btn btn-success" value="Upload" />
      </div>
    );
  }
}

export default Uploader;

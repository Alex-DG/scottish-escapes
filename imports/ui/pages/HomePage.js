import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageUploader from '../components/ImageUploader';
import Gallery from '../components/grid/Gallery';

class HomePage extends Component {

  constructor() {
    super();
    this.state = { images: [] }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.images) {
      this.setState({ images: nextProps.images });
    }
  }

  render() {
    return (
      <div>
        <ImageUploader />
        <div className="flex-container">
          <Gallery className="flex-container" data={ this.state.images }/>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  images: PropTypes.array
};

export default HomePage;

import React from 'react';
import PropTypes from 'prop-types';

import ImageUploader from '../components/ImageUploader';
import ImagesGrid from '../components/ImagesGrid';

class HomePage extends React.Component {

  constructor() {
    super();

    this.state = { images: [] }
  }

  componentWillReceiveProps(nextProps) {
    //console.log(nextProps);
    if (nextProps.images) {
      this.setState({ images: nextProps.images });
    }
  }

  render() {
    //console.log(this.state.images);
    return (
      <div>
        <ImageUploader />
        <ImagesGrid data={ this.state.images }/>
      </div>
    );
  }
}

HomePage.propTypes = {
  images: PropTypes.array
};

export default HomePage;

import React from 'react';
import PropTypes from 'prop-types';

import ImageUploader from '../components/ImageUploader';
import Gallery from '../components/Gallery';

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
    console.log(this.state.images);
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

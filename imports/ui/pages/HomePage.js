import React from 'react';
import PropTypes from 'prop-types';

import ImageUploader from '../components/ImageUploader';

class HomePage extends React.Component {

  constructor() {
    super();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.images);
  }

  render() {
    return (
      <div>
        <ImageUploader />
      </div>
    );
  }
}

HomePage.propTypes = {
  images: PropTypes.array
};

export default HomePage;

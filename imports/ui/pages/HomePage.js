import React from 'react';

import Uploader from '../components/Uploader';
import ImageGrid from '../components/ImageGrid';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <Uploader />
        <ImageGrid />
      </div>
    );
  }
}

export default HomePage;

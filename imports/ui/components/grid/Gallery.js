import React from 'react';

import Thumbnail from './Thumbnail';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({ images: nextProps.data });
    }
  }

  renderThumb() {
    if (this.state.images) {
      return this.state.images.map( (img, index) => {
        return (
          <Thumbnail key={ index }
            index={ index }
            url={ img.thumbnail }   />
        );
      });
    }
  }

  render() {
    return (
      <div className="gallery-main">
        <div className="gallery">
          { this.renderThumb() }
        </div>
      </div>
     );
  }
}


export default Gallery;

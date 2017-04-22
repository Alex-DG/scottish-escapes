import React from 'react';
import Gallery from 'react-grid-gallery';

class ImagesGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({ images: nextProps.data });
    }
  }

  handleClickThumbnail() {
    console.log('handleClickThumbnail');
  }

  render() {
    return(
      <div>
        <Gallery
          images={ this.state.images }
          onClickThumbnail={ this.handleClickThumbnail.bind(this) } />
      </div>
    );
  }
}

export default ImagesGrid;

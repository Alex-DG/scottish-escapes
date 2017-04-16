import React from 'react';
import PropTypes from 'prop-types';

class ImageGrid extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.images);
  }

  render() {
    return(
      <div>Component ImageGrid</div>
    );
  }
}

ImageGrid.propTypes = {
  images: PropTypes.array
};

export default ImageGrid;

import React from 'react';
import Gallery from 'react-grid-gallery';

import ImageItem from './ImageItem';

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

  /**
   * Grid with 4 images max / row
   **/
  renderGrid() {
    if (this.state.images) {

      let images = this.state.images.map( (image, index) => {
        return <ImageItem key={ index } url={ image.thumbnail } />
      });

      let row = [];
      let grid = [];

      images.map( (item, index) => {
        console.log(item);
        index++;
        row.push(<div key={ index } className="col-xs-12 col-sm-3">{ item } </div>);

        if (index % 4 === 0) {
          grid.push(<div key={ index } className="row">{ row }</div>);
          row = [];
          index = 1;
        } else if (index === images.length) {
          grid.push(<div key={ index } className="row">{ row }</div>);
        }
      });

      return (
        <div>{ grid }</div>
      );

    }
  }

  render() {
    return (
      <div>
        { this.renderGrid() }
      </div>
     );
  }
}

export default ImagesGrid;

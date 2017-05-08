import React from 'react';

import { getThumbnail } from '../../modules/thumbnail'

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

  /**
   * Grid with 4 images max / row
   **/
  renderGrid() {
    if (this.state.images) {

      let thumbnails = this.state.images.map( (image, index) => {
        return <Thumbnail key={ index } url={ image.thumbnail } />;
      });

      let row = [];
      let grid = [];

      thumbnails.map( (item, index) => {
        console.log(item);
        index++;
        row.push(<td style={ {padding: '20px'} } >{ item }</td>);

        if (index % 3 === 0) {
          grid.push(<tr key={ index }>{ row }</tr>);
          row = [];
          index = 1;
        } else if (index === thumbnails.length) {
          grid.push(<div key={ index } className="row align-items-center">{ row }</div>);
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

export default Gallery;

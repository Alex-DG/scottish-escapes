import React from 'react';
import PropTypes from 'prop-types';

class Thumbnail extends React.Component {

  renderFigure() {
    if (this.props.index === 0) {
      return (
        <figure className="thumb-first">
          <a href="#">
            <img className="img-first" src={ this.props.url } />
          </a>
        </figure>
      );
    } else {
      return (
        <figure className="thumb">
          <a href="#">
            <img src={ this.props.url } />
          </a>
        </figure>
      );
    }
  }

  render() {
    return(
      <div>
        { this.renderFigure() }
      </div>
    );
  }
}

Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default Thumbnail;

import React from 'react';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: '' };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url) {
      this.setState({ url: nextProps.url });
    }
  }

  componentWillMount() {
    if (this.props.url) {
      this.setState({ url: this.props.url });
    }
  }

  render() {
    return(
      <img className="gal-thumb" src={ this.state.url } />
    );
  }
}

{/* <div className="gallery-thumbnail">
  <img style={ {width: '100%', height: '100%'} } src={ this.state.url } />
</div> */}
{/* <a style={ {width: '295px', height: '295px'} } href="#" className="thumbnail">
  <img style={ {width: '100%', height: '100%'} } src={ this.state.url } />
</a> */}

export default Thumbnail;

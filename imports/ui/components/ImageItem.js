import React from 'react';

class ImageItem extends React.Component {
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
      <div>
        <img style={ {width: '400px', height: '400px'} } src={ this.state.url} />
      </div>
    );
  }
}

export default ImageItem;

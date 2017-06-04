import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';

class DraftEditor extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      value: RichTextEditor.createEmptyValue()
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      const event = {
        target: {
          name: this.props.name,
          value: value.toString('html')
        }
      }
      this.props.onChange(event);
    }
  };

  render () {
    return (
        <RichTextEditor
          name={ this.props.name }
          rows={ this.props.rows }
          placeholder={ this.props.placeholder }
          value={this.state.value}
          onChange={this.onChange}
        />
    );
  }
}

export default DraftEditor;

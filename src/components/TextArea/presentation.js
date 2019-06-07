import React, { PureComponent, createRef } from 'react';
import cx from 'classnames';

class TextArea extends PureComponent {
  constructor() {
    super(...arguments);

    this.textAreaRef = createRef();
  }

  componentDidMount() {
    if (this.props.focusOnMount && this.textAreaRef.current) {
      this.textAreaRef.current.focus();
    }
  }

  render() {
    const { name, className, rows, onChange, value, placeholder } = this.props;

    return (
      <textarea
        name={name}
        className={cx(
          'TextArea bg-color-gray-lighter resize-none p_5',
          className
        )}
        rows={rows}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        ref={this.textAreaRef}
      />
    );
  }
}

export default TextArea;

import { Component } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import linkIsExternal from 'utils/linkIsExternal';

import get from 'utils/get';

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    variant: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    text: PropTypes.string,
    onClick: PropTypes.func,
    to: PropTypes.string,
    type: PropTypes.string,
    ariaLabel: PropTypes.string,
    anchorTitle: PropTypes.string,
    isDisabled: PropTypes.bool,
    disabledClassName: PropTypes.string,
    tabIndex: PropTypes.string,
    elemRef: PropTypes.func
  };

  static defaultProps = {
    className: '',
    variant: 'no-style',
    children: null,
    text: '',
    onClick: f => f,
    to: null,
    type: 'button',
    ariaLabel: '',
    anchorTitle: '',
    isDisabled: false,
    disabledClassName: 'disabled',
    tabIndex: null,
    elemRef: null
  };

  render() {
    const {
      className,
      variant,
      children,
      text,
      onClick,
      to,
      type,
      ariaLabel,
      anchorTitle,
      isDisabled,
      disabledClassName,
      tabIndex,
      elemRef
    } = this.props;

    return RegistryLoader(
      {
        className,
        variant,
        children,
        text,
        onClick,
        to,
        type,
        ariaLabel,
        anchorTitle,
        isDisabled,
        disabledClassName,
        tabIndex,
        elemRef,
        linkIsExternal:
          get(this, 'props.to') && linkIsExternal(get(this, 'props.to'))
      },
      'components.Button',
      () => import('./presentation.js')
    );
  }
}

export default Button;

import { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import RegistryLoader from 'lib/RegistryLoader';

class Image extends Component {
  static propTypes = {
    alt: PropTypes.string,
    isBg: PropTypes.bool,
    src: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    styleName: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onImgLoad: PropTypes.func,
    errorStyles: PropTypes.string
  };

  static defaultProps = {
    alt: '',
    isBg: false,
    src: '',
    style: {},
    children: null,
    className: 'w100',
    onImgLoad: () => {}
  };

  constructor(props) {
    super(...arguments);
    const { src, className, styleName } = props;
    const loader = new window.Image();

    loader.onload = () => this.didLoad();
    loader.src = src;

    this.state = {
      loaded: false,
      errored: false,
      classes: cx('Image preload', className),
      styles: cx('Image', styleName)
    };
  }

  didLoad() {
    if (this.outOfView) return;
    const { className } = this.props;
    const classes = `${className}`;
    const loaded = true;
    this.props.onImgLoad();
    this.setState({ classes, loaded });
  }

  componentWillUnmount() {
    this.outOfView = true;
  }

  render() {
    const { src, alt, style, isBg, children } = this.props;
    const { classes, loaded } = this.state;

    return RegistryLoader(
      { src, alt, style, isBg, children, classes, loaded },
      'components.Image',
      () => import('./presentation.js')
    );
  }
}

export default Image;

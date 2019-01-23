import { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import RegistryLoader from 'lib/RegistryLoader';

class Image extends Component {
  constructor(props) {
    super(...arguments);

    this.state = {
      loaded: false,
      classes: cx('Image preload', props.className),
      styles: cx('Image', props.styleName)
    };
  }

  componentWillMount() {
    const { src } = this.props;
    const loader = new window.Image();
    loader.onload = () => this.didLoad();
    loader.src = src;
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

Image.propTypes = {
  alt: PropTypes.string,
  isBg: PropTypes.bool,src: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  styleName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onImgLoad: PropTypes.func
};

Image.defaultProps = {
  alt: '',
  isBg: false,
  src: '',
  style: {},
  children: null,
  className: 'w100',
  onImgLoad: () => {}
};

export default Image;

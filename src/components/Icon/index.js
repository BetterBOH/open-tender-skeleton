import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  At,
  Back,
  Bag,
  Bubbles,
  Car,
  Cart,
  Check,
  Clear,
  Clock,
  Close,
  CloudUpload,
  CreditCard,
  Details,
  Dropdown,
  Dropup,
  Error,
  Filter,
  Flame,
  Gift,
  Group,
  Heart,
  Left,
  Loader,
  Location,
  Lock,
  Map,
  Marker,
  Mobile,
  Phone,
  Plus,
  Radio,
  RadioActive,
  Repeat,
  Right,
  Share,
  Star,
  User,
  UserCircle
} from 'components/Icon/svgs';

const icons = {
  At,
  Back,
  Bag,
  Bubbles,
  Car,
  Cart,
  Check,
  Clear,
  Clock,
  Close,
  CloudUpload,
  CreditCard,
  Details,
  Dropdown,
  Dropup,
  Error,
  Filter,
  Flame,
  Gift,
  Group,
  Heart,
  Left,
  Loader,
  Location,
  Lock,
  Map,
  Marker,
  Mobile,
  Phone,
  Plus,
  Radio,
  RadioActive,
  Repeat,
  Right,
  Share,
  Star,
  User,
  UserCircle
};

class Icon extends Component {
  render() {
    const { icon, fill } = this.props;

    // TO-DO: Make an 'icon' registry to swap out SVGs on the fly during config
    return React.createElement(icons[icon], { fill });
  }
}

Icon.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
  fill: PropTypes.string,
  icon: PropTypes.string
};

Icon.defaultProps = {
  alt: '',
  children: null,
  className: 'w100',
  fill: '#8D92A3',
  icon: 'Right'
};

export default Icon;

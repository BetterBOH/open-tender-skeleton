import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class Rating extends PureComponent {
  constructor(props) {
    super(...arguments);

    const { rating } = props;

    this.state = {
      rating: rating
    };
  }

  handleOnChange = rating => {
    this.setState({ rating }, () => this.props.onChange(rating));
  };

  render() {
    const { isInteractive, total, icon } = this.props;
    const { rating } = this.state;

    return RegistryLoader(
      {
        isInteractive,
        total,
        icon,
        rating,
        onChange: this.handleOnChange
      },
      'components.Rating',
      () => import('./presentation.js')
    );
  }
}

Rating.propTypes = {
  isInteractive: PropTypes.bool,
  total: PropTypes.number,
  rating: PropTypes.number,
  icon: PropTypes.string,
  onChange: PropTypes.func
};

Rating.defaultProps = {
  isInteractive: false,
  total: 5,
  rating: 0,
  icon: 'Star',
  onChange: f => f
};

export default Rating;

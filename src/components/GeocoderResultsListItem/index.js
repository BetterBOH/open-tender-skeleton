import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class GeocoderResultsListItem extends PureComponent {
  static propTypes = {
    option: PropTypes.shape({
      meta: PropTypes.shape({
        address: PropTypes.string,
        street: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        country: PropTypes.string
      })
    }),
    onSelect: PropTypes.func,
    elemRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ])
  };

  static defaultProps = {
    option: {
      meta: {
        address: '',
        street: '',
        city: '',
        state: '',
        country: ''
      }
    },
    onSelect: f => f,
    elemRef: null
  };

  render() {
    const { option, onSelect, elemRef } = this.props;

    return RegistryLoader(
      { option, onSelect, elemRef },
      'components.GeocoderListItem',
      () => import('./presentation.js')
    );
  }
}

export default GeocoderResultsListItem;

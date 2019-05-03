import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class Allergens extends PureComponent {
  static propTypes = {
    allergens: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    }),
    userAllergens: PropTypes.arrayOf(PropTypes.string),
    handleAllergenClick: PropTypes.func
  };

  static defaultProps = {
    allergens: null,
    userAllergens: [],
    handleAllergenClick: f => f
  };

  render() {
    const { allergens, userAllergens, handleAllergenClick } = this.props;

    return RegistryLoader(
      { allergens, userAllergens, handleAllergenClick },
      'components.Allergens',
      () => import('./presentation.js')
    );
  }
}

export default Allergens;

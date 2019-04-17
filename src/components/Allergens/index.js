import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class Allergens extends PureComponent {
  render() {
    const { allergens, handleAllergenClick } = this.props;
    return RegistryLoader(
      { allergens, handleAllergenClick },
      'components.Allergens',
      () => import('./presentation.js')
    );
  }
}

export default Allergens;

import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import withBrand from 'lib/withBrand';

class LineItemEditorTopBar extends PureComponent {
  render() {
    const {
      title,
      price,
      calories,
      onClose,
      localesContext,
      brandContext
    } = this.props;
    return RegistryLoader(
      { title, price, calories, onClose, localesContext, brandContext },
      'components.LineItemEditorTopBar',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(withBrand(LineItemEditorTopBar));

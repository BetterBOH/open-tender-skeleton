import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import withBrand from 'lib/withBrand';

class LineItemEditorTopBar extends PureComponent {
  render() {
    const {
      lineItem,
      onClose,
      isActive,
      localesContext,
      brandContext
    } = this.props;
    return RegistryLoader(
      { lineItem, onClose, isActive, localesContext, brandContext },
      'components.LineItemEditorTopBar',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(withBrand(LineItemEditorTopBar));

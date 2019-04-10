import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';

class LineItemEditorTopBar extends PureComponent {
  render() {
    const { lineItem, onClose, isActive, localesContext } = this.props;
    return RegistryLoader(
      { lineItem, onClose, isActive, localesContext },
      'components.LineItemEditorTopBar',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(LineItemEditorTopBar);

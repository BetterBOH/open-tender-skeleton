import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class LineItemEditorTopBar extends PureComponent {
  render() {
    const { lineItem, onClose, isActive } = this.props;
    return RegistryLoader(
      { lineItem, onClose, isActive },
      'components.LineItemEditorTopBar',
      () => import('./presentation.js')
    );
  }
}

export default LineItemEditorTopBar;

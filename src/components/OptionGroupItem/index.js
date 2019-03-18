import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';

class OptionGroupItem extends PureComponent {
  render() {
    return RegistryLoader(this.props, 'components.OptionGroupItem', () =>
      import('./presentation.js')
    );
  }
}

export default withLocales(OptionGroupItem);

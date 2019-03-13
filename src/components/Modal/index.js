import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import withModalActions from 'lib/withModalActions';
import RegistryLoader from 'lib/RegistryLoader';

class Modal extends PureComponent {
  static propTypes = {
    ...withModalActions.propTypes
  };

  static defaultProps = {
    ...withModalActions.defaultProps
  };

  render() {
    const { modalIsActive, variant, data, actions } = this.props;

    return RegistryLoader(
      { modalIsActive, variant, data, actions },
      'components.Modal',
      () => import('./presentation.js')
    );
  }
}

export default withModalActions(Modal);

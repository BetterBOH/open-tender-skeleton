import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import withLocales from 'lib/withLocales';

class LocateMeButton extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  handleClick = () => {
    console.log('clicked');
  };

  render() {
    return RegistryLoader(
      {
        className: this.props.className,
        handleClick: this.handleClick,
        localesContext: this.props.localesContext
      },
      'components.LocateMeButton',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(LocateMeButton);

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class RadioInput extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    className: '',
    id: '',
    name: '',
    checked: false,
    onChange: f => f
  };

  render() {
    const { className, id, name, checked, onChange } = this.props;

    return RegistryLoader(
      { className, id, name, checked, onChange },
      'components.RadioInput',
      () => import('./presentation.js')
    );
  }
}

export default RadioInput;

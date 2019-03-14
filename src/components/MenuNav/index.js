import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

class MenuNav extends PureComponent {
  static propTypes = {
    menuCategories: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
      })
    )
  };

  static defaultProps = {
    menuCategories: []
  };

  state = {
    selectedCategory: get(this.props, 'menuCategories[0]')
  };

  handleChange = e => {
    this.setState({ selectedCategory: e.target.value });
  };

  render() {
    const { menuCategories } = this.props;
    const selectedCategory = this.state.selectedCategory;
    const handleChange = this.handleChange;

    return RegistryLoader(
      { menuCategories, selectedCategory, handleChange },
      'components.MenuNav',
      () => import('./presentation.js')
    );
  }
}

export default MenuNav;

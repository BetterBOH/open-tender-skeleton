import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

class MenuNavigation extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      selectedCategory: PropTypes.string,
      menuTitle: PropTypes.string,
      menuCategories: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          slug: PropTypes.string.isRequired
        })
      )
    }),
    onClose: PropTypes.func
  };

  static defaultProps = {
    data: {
      selectedCategory: null,
      menuTitle: '',
      menuCategories: []
    },
    onClose: f => f
  };

  render() {
    const { data, onClose } = this.props;
    const menuTitle = get(data, 'menuTitle');
    const menuCategories = get(data, 'menuCategories');
    const selectedCategory = get(data, 'selectedCategory');

    return RegistryLoader(
      {
        menuTitle,
        menuCategories,
        selectedCategory,
        onClose
      },
      'components.MenuNavigation',
      () => import('./presentation.js')
    );
  }
}

export default MenuNavigation;

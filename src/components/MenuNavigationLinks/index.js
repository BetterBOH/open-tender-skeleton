import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

class MenuNavigationLinks extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      currentCategory: PropTypes.string,
      daypart: PropTypes.string,
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
      currentCategory: null,
      daypart: '',
      menuCategories: []
    },
    onClose: f => f
  };

  render() {
    const { data, onClose } = this.props;
    const { daypart, menuCategories, currentCategory } = data;

    return RegistryLoader(
      {
        daypart,
        menuCategories,
        currentCategory,
        onClose
      },
      'components.MenuNavigationLinks',
      () => import('./presentation.js')
    );
  }
}

export default MenuNavigationLinks;

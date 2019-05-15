import { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

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

  constructor() {
    super(...arguments);

    this.menuNavigationLinksRef = createRef();
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = e => {
    if (!this.menuNavigationLinksRef || !this.menuNavigationLinksRef.current) {
      return null;
    }

    if (!this.menuNavigationLinksRef.current.contains(e.target)) {
      return this.props.onClose();
    }
  };

  render() {
    const { data, onClose } = this.props;
    const { daypart, menuCategories, currentCategory } = data;

    return RegistryLoader(
      {
        daypart,
        menuCategories,
        currentCategory,
        onClose,
        menuNavigationLinksRef: this.menuNavigationLinksRef
      },
      'components.MenuNavigationLinks',
      () => import('./presentation.js')
    );
  }
}

export default MenuNavigationLinks;

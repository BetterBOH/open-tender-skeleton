import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import { scroller } from 'react-scroll';

class MenuNav extends PureComponent {
  static propTypes = {
    menuCategories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        slug: PropTypes.string.isRequired
      })
    )
  };

  static defaultProps = {
    menuCategories: []
  };

  state = {
    selectedCategory: get(this.props, 'menuCategories[0].name'),
    shouldUpdateScroll: false
  };

  componentDidUpdate() {
    if (this.state.shouldUpdateScroll) {
      const selected = get(this.props, 'menuCategories').find(
        category => category.name === this.state.selectedCategory
      );

      scroller.scrollTo(get(selected, 'slug'), {
        duration: 1000,
        smooth: 'easeInOutQuad'
      });
    }
  }

  handleChange = e => {
    this.setState({
      selectedCategory: e.target.value,
      shouldUpdateScroll: true
    });
  };

  handleSetActive = category => {
    this.setState({
      selectedCategory: category,
      shouldUpdateScroll: false
    });
  };

  render() {
    const { menuCategories } = this.props;

    return RegistryLoader(
      {
        menuCategories,
        selectedCategory: this.state.selectedCategory,
        handleChange: this.handleChange,
        handleSetActive: this.handleSetActive
      },
      'components.MenuNav',
      () => import('./presentation.js')
    );
  }
}

export default MenuNav;

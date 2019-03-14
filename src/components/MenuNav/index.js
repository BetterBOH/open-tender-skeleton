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

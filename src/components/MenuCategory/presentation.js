import React, { PureComponent, createRef } from 'react';
import { MenuCategoryHeader, MenuCategoryItems } from 'components';
import ScrollToSection from 'components/ScrollTo/ScrollToSection';

import get from 'utils/get';
import debounce from 'utils/debounce';
import { SCROLL_DEBOUNCE_LIMIT } from 'constants/DebounceLimits';

class MenuCategory extends PureComponent {
  constructor() {
    super(...arguments);

    this.menuCategoryRef = createRef();

    this.state = {
      scrolledIntoView: false
    };
  }

  componentDidMount = () => {
    window.addEventListener(
      'scroll',
      debounce(this.handleScroll, SCROLL_DEBOUNCE_LIMIT)
    );
  };

  componentDidUpdate = (prevProps, prevState) => {
    const menuCategoryWasScrolledIntoView = get(prevState, 'scrolledIntoView');
    const menuCategoryIsScrolledIntoView = this.state.scrolledIntoView;

    if (!menuCategoryWasScrolledIntoView && menuCategoryIsScrolledIntoView) {
      const { actions, menuCategory } = this.props;
      return actions.setCurrentCategory(get(menuCategory, 'slug'));
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener(
      'scroll',
      debounce(this.handleScroll, SCROLL_DEBOUNCE_LIMIT)
    );
  };

  handleScroll = () => {
    const windowHeight = window.innerHeight;
    const menuCategory = this.menuCategoryRef.current;
    const menuCategoryBounds = menuCategory.getBoundingClientRect();
    const menuCategoryUpperBounds = menuCategoryBounds.top;
    const menuCategoryLowerBounds = menuCategoryBounds.bottom;
    const scrolledIntoView =
      windowHeight > menuCategoryUpperBounds &&
      windowHeight < menuCategoryLowerBounds;
    if (this.state.scrolledIntoView !== scrolledIntoView) {
      this.setState({ scrolledIntoView });
    }
  };

  render() {
    const { menuCategory } = this.props;

    return (
      <div className="MenuCategory mb3" ref={this.menuCategoryRef}>
        <ScrollToSection
          key={get(menuCategory, 'id')}
          sectionName={get(menuCategory, 'slug')}
        >
          <MenuCategoryHeader menuCategory={menuCategory} />
          <MenuCategoryItems menuCategory={menuCategory} />
        </ScrollToSection>
      </div>
    );
  }
}

export default MenuCategory;

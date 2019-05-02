import React, { PureComponent, createRef } from 'react';
import { Card, Text, Icon } from 'components';
import { Link } from 'react-scroll';
import get from 'utils/get';

class MenuNavigationLinks extends PureComponent {
  constructor(props) {
    super(...arguments);

    const menuCategories = get(props, 'menuCategories', []);
    this.menuCategoryRefs = menuCategories.map(createRef);
  }

  componentDidMount() {
    const firstCategoryRefFocus = get(
      this,
      'menuCategoryRefs[0].current.focus'
    );

    // TO-DO replace react-scroll with an a11y-friendly script instead
    if (firstCategoryRefFocus) return firstCategoryRefFocus();

    return null;
  }

  render() {
    const {
      daypart,
      menuCategories,
      currentCategory,
      onClose,
      localesContext
    } = this.props;

    const menuTitle = !!daypart
      ? `${daypart} ${localesContext.Language.t('menu.title')}`
      : localesContext.Language.t('menu.title');

    return (
      <div className="MenuNavigationLinks bg-color-gray-light col-12 md:absolute z1">
        <div className="MenuNavigationLinks__inner px1 py2 md:py1">
          <div className="MenuNavigationLinks__header flex flex-col md:none mb_5">
            <Text size="cta" className="text-bold">
              {menuTitle}
            </Text>
            <Text size="description" className="color-gray-dark">
              {localesContext.Language.t('menu.navigation')}
            </Text>
          </div>
          <Card className="MenuNavigationLinks__card col-12 md:col-3 lg:col-2 p1_5">
            {menuCategories.map((category, i) => (
              <Link
                key={get(category, 'id')}
                className="MenuNavigationLinks__button flex justify-between items-center pointer"
                onClick={onClose}
                to={get(category, 'slug')}
                offset={-48}
                duration={1000}
                smooth="easeInOutQuad"
                ref={get(this, `menuCategoryRefs[${i}]`)}
                isDynamic
                spy
              >
                <Text
                  className={
                    get(category, 'slug') === currentCategory
                      ? 'color-black'
                      : 'color-gray-dark'
                  }
                >
                  {get(category, 'name')}
                </Text>
                <div className="MenuNavigationLinks__icon">
                  <Icon icon="Details" />
                </div>
              </Link>
            ))}
          </Card>
        </div>
      </div>
    );
  }
}

export default MenuNavigationLinks;

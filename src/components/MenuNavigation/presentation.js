import React from 'react';
import { Card, Text, Icon } from 'components';
import { Link } from 'react-scroll';
import get from 'utils/get';
import cx from 'classnames';

const MenuNavigation = React.memo(
  ({
    menuTitle,
    menuCategories,
    selectedCategory,
    onClose,
    localesContext
  }) => {
    return (
      <div className="MenuNavigation bg-color-gray-light col-12 md:absolute z1">
        <div className="MenuNavigation__inner px1 py2 md:py1">
          <div className="MenuNavigation__header flex flex-col md:none mb_5">
            <Text size="cta" className="text-bold">
              {menuTitle}
            </Text>
            <Text size="description" className="color-gray-dark">
              {localesContext.Language.t('menu.navigation')}
            </Text>
          </div>
          <Card className="MenuNavigation__card col-12 md:col-3 lg:col-2 p1_5">
            {menuCategories.map(category => (
              <button
                className={cx(
                  'MenuNavigation__button',
                  get(category, 'name') === selectedCategory
                    ? 'color-black'
                    : 'color-gray'
                )}
                key={get(category, 'id')}
              >
                <Link
                  className="flex justify-between items-center pointer"
                  onClick={onClose}
                  to={get(category, 'slug')}
                  duration={1000}
                  smooth="easeInOutQuad"
                  spy
                >
                  <Text className="color-gray-dark">
                    {get(category, 'name')}
                  </Text>
                  <div className="MenuNavigation__icon">
                    <Icon icon="Details" />
                  </div>
                </Link>
              </button>
            ))}
          </Card>
        </div>
      </div>
    );
  }
);

export default MenuNavigation;

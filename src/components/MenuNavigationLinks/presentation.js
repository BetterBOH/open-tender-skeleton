import React from 'react';
import { Card, Text, Icon } from 'components';
import { Link } from 'react-scroll';
import get from 'utils/get';
import cx from 'classnames';

const MenuNavigationLinks = React.memo(
  ({ daypart, menuCategories, selectedCategory, onClose, localesContext }) => {
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
            {menuCategories.map(category => (
              <button
                className={cx(
                  'MenuNavigationLinks__button',
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
                  <div className="MenuNavigationLinks__icon">
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

export default MenuNavigationLinks;

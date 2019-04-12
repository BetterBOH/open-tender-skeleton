import React from 'react';
import { Card, Text } from 'components';
import { Link } from 'react-scroll';
import get from 'utils/get';

const MenuNavigation = React.memo(
  ({ menuTitle, menuCategories, selectedCategory, onClose }) => {
    return (
      <div className="vh100 mx1">
        <Card className="MenuNavigation absolute col-12 md:col-3 lg:col-2 z1 p1">
          <Text size="description" className="text-bold">
            {menuTitle}
          </Text>
          <div className="flex flex-col ml1">
            {menuCategories.map(category => (
              <Link
                onClick={onClose}
                key={get(category, 'id')}
                to={get(category, 'slug')}
                duration={1000}
                smooth="easeInOutQuad"
                spy
              >
                <button
                  className={`color-${
                    get(category, 'name') === selectedCategory
                      ? 'black'
                      : 'gray'
                  }`}
                >
                  <Text size="small">{get(category, 'name')}</Text>
                </button>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    );
  }
);

export default MenuNavigation;

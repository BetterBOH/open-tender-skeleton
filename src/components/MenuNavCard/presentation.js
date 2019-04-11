import React from 'react';
import { Card, Text } from 'components';
import { Link } from 'react-scroll';
import get from 'utils/get';

const MenuNavCard = React.memo(
  ({ menuTitle, menuCategories, selectedCategory, resetModal }) => {
    return (
      <Card className="MenuNavCard absolute t0 l0 p1 m1">
        <Text size="description" className="text-bold">
          {menuTitle}
        </Text>
        <div className="flex flex-col ml1">
          {menuCategories.map(category => (
            <Link
              onClick={resetModal}
              key={get(category, 'id')}
              to={get(category, 'slug')}
              duration={1000}
              smooth="easeInOutQuad"
              spy
            >
              <button
                className={`color-${
                  get(category, 'name') === selectedCategory ? 'black' : 'gray'
                }`}
              >
                <Text size="small">{get(category, 'name')}</Text>
              </button>
            </Link>
          ))}
        </div>
      </Card>
    );
  }
);

export default MenuNavCard;

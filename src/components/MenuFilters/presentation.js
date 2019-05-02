import React, { PureComponent } from 'react';
import cx from 'classnames';
import { Button, Icon, Card, Allergens } from 'components';
import get from 'utils/get';

class MenuFilters extends PureComponent {
  render() {
    const {
      userAllergens,
      allergens,
      handleAllergenClick,
      filterRef,
      modalIsActive,
      brandContext,
      onClose
    } = this.props;

    return (
      <div
        ref={filterRef}
        className={cx('MenuFilters z5 col-12 md:col-6 lg:col-3 p1', {
          'absolute t0 r0': modalIsActive
        })}
      >
        <Card variant="filter" className="relative bg-color-white shadow-md">
          <Button
            onClick={onClose}
            variant="icon-circle"
            className="absolute t0 r0 my1_5 mr2 bg-color-gray-dark"
          >
            <Icon icon="Close" fill={get(brandContext, 'colors.white')} />
          </Button>
          <Allergens
            allergens={allergens}
            userAllergens={userAllergens}
            handleAllergenClick={handleAllergenClick}
          />
        </Card>
      </div>
    );
  }
}

export default MenuFilters;

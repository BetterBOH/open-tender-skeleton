import React, { PureComponent, createRef } from 'react';
import { Button, Icon, Card, Allergens } from 'components';
import get from 'utils/get';

class MenuFilters extends PureComponent {
  constructor() {
    super(...arguments);

    this.closeRef = createRef();
  }

  componentDidMount() {
    const closeRef = get(this, 'closeRef.current');

    if (closeRef) return closeRef.focus();

    return null;
  }

  render() {
    const {
      userAllergens,
      allergens,
      handleAllergenClick,
      filterRef,
      brandContext,
      onClose
    } = this.props;

    return (
      <div ref={filterRef} className="MenuFilters z5 col-12 p1">
        <Card variant="filter" className="relative shadow-md">
          <Button
            onClick={onClose}
            variant="icon-circle"
            className="absolute t0 r0 my1_5 mr2 bg-color-gray-dark hover-bg-color-black md:none"
            elemRef={this.closeRef}
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

import React, { PureComponent } from 'react';

import { Card, Button, Icon } from 'components';

class OrderRating extends PureComponent {
  render() {
    const { interactive, total, rating, icon } = this.props;

    return (
      <Card>
        <Button>
          <Icon icon={icon} fill="gray" />
        </Button>
      </Card>
    );
  }
}

export default OrderRating;

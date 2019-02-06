import React, { PureComponent } from 'react';

import { Card, Button, Icon } from 'components';

class OrderRating extends PureComponent {
  render() {
    const { interactive, total, rating, icon } = this.props;

    return (
      <Card className="justify-center md:col-4">
        <div className="flex items-around m1">
          {Array(total).fill(
            <Button className="mx_5">
              <Icon icon={icon} fill="gray" />
            </Button>
          )}
        </div>
      </Card>
    );
  }
}

export default OrderRating;

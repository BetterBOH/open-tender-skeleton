import React, { PureComponent } from 'react';

import { Card, Button, Icon } from 'components';

class OrderRating extends PureComponent {
  state = {
    rating: this.props.rating
  };

  render() {
    const { interactive, total, icon } = this.props;

    const orderRating = Array.apply(null, Array(total)).map((value, index) => {
      return (
        <Button key={index} className="mx_5">
          <Icon
            icon={icon}
            fill={this.state.rating > index ? '#8d92a3' : '#CDCDD7'}
          />
        </Button>
      );
    });

    return (
      <Card className="justify-center md:col-4">
        <div className="flex items-around m1">{orderRating}</div>
      </Card>
    );
  }
}

export default OrderRating;

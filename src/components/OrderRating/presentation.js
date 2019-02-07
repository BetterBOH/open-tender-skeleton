import React, { PureComponent } from 'react';

import { Card, Button, Icon } from 'components';

class OrderRating extends PureComponent {
  state = {
    rating: this.props.rating
  };

  handleClick = e => {
    this.setState({
      rating: parseInt(e.target.closest('span').id.split('-')[1])
    });
  };

  render() {
    const { isInteractive, total, icon } = this.props;

    const orderRating = Array.apply(null, Array(total)).map((value, index) => {
      const ratingIcon = (
        <Icon
          icon={icon}
          // temporary hex codes as colors are currently different in storybook
          fill={this.state.rating > index ? '#8d92a3' : '#CDCDD7'}
        />
      );

      const id = `${icon}-${index + 1}`;

      if (isInteractive) {
        return (
          <span id={id} key={id} className="mx_5">
            <Button onClick={this.handleClick}>{ratingIcon}</Button>
          </span>
        );
      }

      return (
        <span id={id} key={id} className="mx_5">
          {ratingIcon}
        </span>
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

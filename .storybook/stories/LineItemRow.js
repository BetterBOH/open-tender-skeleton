import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { order } from 'constants/Mocks';
import { LocalesContext, localesRegistry } from '../mockConfig';
import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import LineItemRow from 'components/LineItemRow';
import documentation from 'components/LineItemRow/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

// mock line item data
class LineItemData extends Component {
  state = order.items[0];

  increment = () => {
    this.setState(prevState => ({
      ...prevState,
      quantity: prevState.quantity + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      ...prevState,
      quantity: prevState.quantity - 1
    }));
  };

  render() {
    return (
      <React.Suspense fallback={<div />}>
        <LocalesContext.Provider value={localesRegistry}>
          <LocalesContext.Consumer>
            {context => (
              <LineItemRow
                lineItem={this.state}
                isConfigurable={this.props.isConfigurable}
                handleDecrement={this.decrement}
                handleIncrement={this.increment}
                {...context}
              />
            )}
          </LocalesContext.Consumer>
        </LocalesContext.Provider>
      </React.Suspense>
    );
  }
}

storiesOf('LineItemRow', module)
  .addDecorator(checkA11y)
  .add(
    'default (configurable)',
    () => (
      <div className="col-12 md:col-5 lg:col-4">
        <BrandStyle brand={brand} />
        <LineItemData isConfigurable={true} />
      </div>
    ),
    addons
  )
  .add(
    'not configurable',
    () => (
      <div className="col-12 md:col-5 lg:col-4">
        <BrandStyle brand={brand} />
        <LineItemData isConfigurable={false} />
      </div>
    ),
    addons
  );

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { lineItemsData } from 'constants/Mocks';
import { LocalesContext, localesRegistry } from '../mockConfig';
import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import LineItemRow from 'components/LineItemRow';
import documentation from 'components/LineItemRow/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

// mock parent element
class LineItemRowParent extends Component {
  state = { data: lineItemsData };

  increment = itemToIncrement => {
    this.setState(prevState => {
      const itemsData = [...prevState.data];
      const matchedItemIndex = itemsData.findIndex(
        item => item.uuid === itemToIncrement.uuid
      );
      itemsData[matchedItemIndex].quantity += 1;
      return { data: itemsData };
    });
  };

  decrement = itemToDecrement => {
    this.setState(prevState => {
      const itemsData = [...prevState.data];
      const matchedItemIndex = itemsData.findIndex(
        item => item.uuid === itemToDecrement.uuid
      );
      itemsData[matchedItemIndex].quantity -= 1;
      return { data: itemsData };
    });
  };

  render() {
    return (
      <React.Suspense fallback={<div />}>
        <LocalesContext.Provider value={localesRegistry}>
          <LocalesContext.Consumer>
            {context =>
              this.state.data.map(item => (
                <LineItemRow
                  key={item.uuid}
                  lineItem={item}
                  isConfigurable={this.props.isConfigurable}
                  handleDecrement={() => this.decrement(item)}
                  handleIncrement={() => this.increment(item)}
                  {...context}
                />
              ))
            }
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
        <LineItemRowParent isConfigurable={true} />
      </div>
    ),
    addons
  )
  .add(
    'not configurable',
    () => (
      <div className="col-12 md:col-5 lg:col-4">
        <BrandStyle brand={brand} />
        <LineItemRowParent isConfigurable={false} />
      </div>
    ),
    addons
  );

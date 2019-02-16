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

  increment = currentIndex => {
    this.setState(prevState => {
      const itemsCopy = [...prevState.data];
      itemsCopy[currentIndex].quantity = itemsCopy[currentIndex].quantity + 1;
      return { data: itemsCopy };
    });
  };

  decrement = currentIndex => {
    this.setState(prevState => {
      const itemsCopy = [...prevState.data];
      itemsCopy[currentIndex].quantity = itemsCopy[currentIndex].quantity - 1;
      return { data: itemsCopy };
    });
  };

  render() {
    return (
      <React.Suspense fallback={<div />}>
        <LocalesContext.Provider value={localesRegistry}>
          <LocalesContext.Consumer>
            {context =>
              this.state.data.map((item, index) => (
                <LineItemRow
                  key={index}
                  lineItem={item}
                  isConfigurable={this.props.isConfigurable}
                  handleDecrement={() => this.decrement(index)}
                  handleIncrement={() => this.increment(index)}
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

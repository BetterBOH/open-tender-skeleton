import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { RadioSelectButton } from 'components';
import documentation from 'components/RadioSelectButton/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

const data = [
  { text: 'Small', labelBold: '$3.95', labelRegular: '260 Cal' },
  { text: 'Medium', labelBold: '$5.20', labelRegular: '350 Cal' },
  { text: 'Large', labelBold: '$8.50', labelRegular: '500 Cal' }
];

// mock parent element
class RadioSelectButtonParent extends Component {
  state = {
    selected: null
  };

  handleSelect = item => {
    this.setState({
      selected: item.text
    });
  };

  render() {
    return (
      <div className="m1">
        {this.props.data.map(item => (
          <RadioSelectButton
            key={item.text}
            text={item.text}
            labelBold={item.labelBold}
            labelRegular={item.labelRegular}
            isSelected={this.state.selected === item.text}
            onClick={() => this.handleSelect(item)}
          />
        ))}
      </div>
    );
  }
}

storiesOf('RadioSelectButton', module).add(
  'default list of buttons',
  () => <RadioSelectButtonParent data={data} />,
  addons
);

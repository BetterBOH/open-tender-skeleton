import React from 'react';
import { Text, Card, OptionGroupItem } from 'components';

const OptionGroup = React.memo(({ optionGroup, lineItem }) => (
  <div className="LineItemEditor__option-group my2 px2">
    <Text size="body" className="block text-semibold mb1">
      {optionGroup.name}
    </Text>
    <Card className="px2 py1">
      {optionGroup.option_items.map(optionItem => (
        <OptionGroupItem
          item={optionItem}
          optionGroup={optionGroup}
          lineItem={lineItem}
        />
      ))}
    </Card>
  </div>
));

export default OptionGroup;

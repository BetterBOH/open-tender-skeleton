import React from 'react';
import { Text, Card, OptionGroupItem } from 'components';

const OptionGroup = React.memo(({ optionGroup, lineItem }) => (
  <div className="LineItemEditor__option-group my2 px2">
    <Text size="body" className="block text-semibold mb_5">
      {optionGroup.name}
    </Text>
    <Text size="small" className="block text-semibold color-gray mb1">
      {optionGroup.description}
    </Text>
    <Card variant="small" className="px2 py1 shadow-sm bg-color-white">
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

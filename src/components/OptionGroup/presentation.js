import React from 'react';
import { Text, Card, OptionGroupItem } from 'components';
import get from 'utils/get';

const OptionGroup = React.memo(({ optionGroup, lineItem }) => (
  <div className="LineItemEditor__option-group my2 px2">
    <Text size="body" className="block text-semibold mb_5">
      {get(optionGroup, 'name', '')}
    </Text>
    <Text size="small" className="block text-semibold color-gray mb1">
      {get(optionGroup, 'description', '')}
    </Text>
    <Card variant="small" className="px2 py1 shadow-sm bg-color-white">
      {get(optionGroup, 'option_items', []).map(optionItem => (
        <OptionGroupItem
          optionItem={optionItem}
          optionGroup={optionGroup}
          lineItem={lineItem}
        />
      ))}
    </Card>
  </div>
));

export default OptionGroup;

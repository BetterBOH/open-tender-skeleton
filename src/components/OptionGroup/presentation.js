import React from 'react';
import { Text, Card, OptionGroupItem } from 'components';
import get from 'utils/get';

const OptionGroup = React.memo(({ optionGroup, lineItem }) => (
  <div className="LineItemEditor__option-group my2 px1_5 md:px2">
    <Text size="body" className="block text-semibold mb_5">
      {get(optionGroup, 'optionGroupData.name', '')}
    </Text>
    <Text size="small" className="block text-semibold color-gray mb1">
      {get(optionGroup, 'optionGroupData.description', '')}
    </Text>
    <Card variant="small" className="px1_5 py_5 shadow-sm bg-color-white">
      {get(optionGroup, 'optionItems', []).map(optionItem => (
        <OptionGroupItem
          key={optionItem.optionId}
          optionItem={optionItem}
          optionGroup={optionGroup}
          lineItem={lineItem}
        />
      ))}
    </Card>
  </div>
));

export default OptionGroup;

import React from 'react';
import { Text, Card, OptionGroupStatus, OptionGroupItem } from 'components';
import get from 'utils/get';

const OptionGroup = React.memo(({ optionGroup, lineItem }) => (
  <div className="LineItemEditor__option-group my2 px1_5 md:px2">
    <div className="flex flex-wrap items-end mb1">
      <div className="col-7">
        <Text size="body" className="block text-semibold">
          {get(optionGroup, 'optionGroupData.name', '')}
        </Text>
        {get(optionGroup, 'optionGroupData.description') && (
          <Text size="small" className="block text-semibold color-gray mt_5">
            {get(optionGroup, 'optionGroupData.description')}
          </Text>
        )}
      </div>
      <div className="col-5 flex flex-wrap justify-end">
        <OptionGroupStatus optionGroup={optionGroup} />
      </div>
    </div>
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

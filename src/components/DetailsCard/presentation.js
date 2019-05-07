import React from 'react';
import get from 'utils/get';
import {
  Card,
  DetailItemRow,
  DetailItemRowWithChildren,
  DetailItemRowWithDropdown
} from 'components';

const DetailsCard = React.memo(({ details }) => {
  return (
    <Card className="DetailsCard px1_5 py_5">
      {details.map(detail => {
        if (!!get(detail, 'children')) {
          if (get(detail, 'renderChildrenInDropdown')) {
            return (
              <DetailItemRowWithDropdown
                key={get(detail, 'label')}
                label={get(detail, 'label')}
                icon={get(detail, 'icon')}
                value={get(detail, 'value')}
                onClickValueNode={get(detail, 'onClickValueNode')}
              >
                {detail.children}
              </DetailItemRowWithDropdown>
            );
          } else {
            return (
              <DetailItemRowWithChildren
                key={get(detail, 'label')}
                label={get(detail, 'label')}
                hasError={get(detail, 'hasError')}
                icon={get(detail, 'icon')}
                value={get(detail, 'value')}
              >
                {detail.children}
              </DetailItemRowWithChildren>
            );
          }
        }

        return (
          <DetailItemRow
            key={get(detail, 'label')}
            label={get(detail, 'label')}
            icon={get(detail, 'icon')}
            value={get(detail, 'value')}
          />
        );
      })}
    </Card>
  );
});

export default DetailsCard;

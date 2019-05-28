import React, { Fragment } from 'react';
import currency from 'currency.js';

import { Text } from 'components';
import get from 'utils/get';

const OptionGroupStatus = React.memo(({ optionGroup, localesContext }) => {
  if (!optionGroup) return null;

  const includedOptions = get(
    optionGroup,
    'optionGroupData.included_options',
    0
  );
  const requiresMoreInThisGroup = get(
    optionGroup,
    'requiresMoreInThisGroup',
    false
  );
  const remainingIncludedOptions = get(
    optionGroup,
    'remainingIncludedOptions',
    0
  );
  const canAddMoreToThisGroup = get(
    optionGroup,
    'canAddMoreToThisGroup',
    false
  );
  const currentlySelectedCount = get(
    optionGroup,
    'currentlySelectedCount',
    false
  );
  const totalAllowedCount = get(optionGroup, 'totalAllowedCount', false);
  const totalEffectOnPrice = currency(
    get(optionGroup, 'totalEffectOnPrice', '0.00'),
    {
      formatWithSymbol: true
    }
  );

  if (!includedOptions && !requiresMoreInThisGroup && canAddMoreToThisGroup) {
    return null;
  }

  const { Language } = localesContext;

  return (
    <div className="OptionGroupStatus bg-color-white radius-sm shadow-sm p_5">
      {remainingIncludedOptions || requiresMoreInThisGroup ? (
        <Text size="detail">
          {remainingIncludedOptions ? (
            <div className="flex items-center">
              {Language.t('menu.lineItemEditor.optionGroupSelect')}
              <div className="OptionGroupStatus__count flex items-center justify-center bg-color-gray-dark radius-lg ml_5">
                <Text size="extrasmall" className="color-white">
                  {remainingIncludedOptions}
                </Text>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              {Language.t('menu.lineItemEditor.optionGroupSelect')}
              <div className="OptionGroupStatus__count flex items-center justify-center bg-color-gray-dark radius-lg ml_5">
                <Text size="extrasmall" className="color-white">
                  {totalAllowedCount - currentlySelectedCount}
                </Text>
              </div>
            </div>
          )}
        </Text>
      ) : (
        <Fragment>
          {canAddMoreToThisGroup ? (
            <Text size="detail">
              <span>
                {Language.t('menu.lineItemEditor.optionGroupSelected', {
                  value: includedOptions
                })}
              </span>
              {!!totalEffectOnPrice.value && (
                <span className="ml_5 text-bold">
                  +{totalEffectOnPrice.format()}
                </span>
              )}
            </Text>
          ) : (
            <Text size="detail">
              {Language.t('menu.lineItemEditor.optionGroupSelected', {
                value: currentlySelectedCount
              })}
            </Text>
          )}
        </Fragment>
      )}
    </div>
  );
});

export default OptionGroupStatus;

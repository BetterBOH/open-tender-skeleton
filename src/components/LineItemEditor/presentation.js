import React, { Fragment } from 'react';
import {
  Image,
  Text,
  Button,
  Card,
  Icon,
  OptionGroup,
  ConfirmButtons
} from 'components';
import get from 'utils/get';

const LineItemEditor = React.memo(({ item, onClose, localesContext }) => {
  if (!item) return null;

  const { menuItem, lineItem } = item;
  const optionGroups = get(menuItem, 'option_groups', []);
  const hasOptionGroups = !!optionGroups.length;

  if (!menuItem || !hasOptionGroups) return onClose();

  return (
    <Fragment>
      <Button
        className="fixed col-12 t0 l0 r0 b0 bg-color-black-overlay"
        onClick={onClose}
      />
      <div className="LineItemEditor fixed md:col-6 lg:col-4 mxauto z1">
        <Card className="LineItemEditor__inner relative z2 overflow-scroll">
          <div className="bg-color-gray-light">
            <div className="LineItemEditor__header bg-color-white radius-sm shadow-sm">
              <div className="LineItemEditor__header__image mb2 relative">
                <Image
                  src={menuItem.small_image_url}
                  alt={menuItem.name}
                  isBg={true}
                />
                <div className="p1 absolute t0 r0">
                  <Button
                    variant="icon-circle-secondary"
                    className="bg-color-white p_25 shadow-sm"
                    onClick={onClose}
                  >
                    <Icon icon="Close" />
                  </Button>
                </div>
              </div>
              <div className="px2">
                <Text size="headline" className="block mb_25">
                  {menuItem.name}
                </Text>
                <div className="mb1 flex">
                  <Text size="detail" className="color-gray text-bold mr_5">
                    ${menuItem.price}
                  </Text>
                  <Text size="detail" className="color-gray">
                    {menuItem.calories}
                    {` ${localesContext.Language.t('menu.cal')}`}
                  </Text>
                </div>
                <Text size="detail" className="block color-gray">
                  {menuItem.description}
                </Text>
              </div>
            </div>
            <div className="LineItemEditor__option-groups">
              {optionGroups.map(group => {
                const items = group.option_items.map(item => {
                  const lineItemOption = lineItem.optionGroupMappings
                    .find(
                      optionGroupMapping => optionGroupMapping.id === group.id
                    )
                    .optionItems.find(
                      optionItem => optionItem.optionId === item.id
                    );

                  return {
                    ...item,
                    quantity: lineItemOption.quantity
                  };
                });

                const optionGroup = {
                  ...group,
                  items
                };

                return (
                  <OptionGroup optionGroup={optionGroup} lineItem={lineItem} />
                );
              })}
            </div>
          </div>
          <div className="fixed b0 l0 col-12 bg-color-white py1 shadow-top">
            <ConfirmButtons
              confirmButtonText={localesContext.Language.t(
                'menu.lineItemEditor.addToOrder'
              )}
              disabledConfirmButtonColor="gray"
              confirmButtonIsDisabled={!lineItem.isValid}
              handleConfirm={onClose}
              cancelButtonIcon="Close"
              cancelButtonColor="gray-dark"
              handleCancel={onClose}
            />
          </div>
        </Card>
      </div>
    </Fragment>
  );
});

export default LineItemEditor;

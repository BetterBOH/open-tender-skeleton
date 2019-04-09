import React, { PureComponent, Fragment, createRef } from 'react';
import {
  Image,
  Text,
  Button,
  Card,
  Icon,
  OptionGroup,
  ConfirmButtons,
  LineItemEditorTopBar
} from 'components';
import get from 'utils/get';

class LineItemEditor extends PureComponent {
  constructor() {
    super(...arguments);

    this.headerRef = createRef();

    this.state = {
      headerIsInView: true
    };
  }

  handleScroll = e => {
    const distance = e.target.scrollTop;
    const headerHeight = this.headerRef.current.clientHeight;
    const headerIsInView = distance < headerHeight;

    console.log(
      headerIsInView,
      this.state.headerIsInView,
      distance,
      headerHeight
    );
    if (this.state.headerIsInView !== headerIsInView)
      this.setState({ headerIsInView });
  };

  render() {
    const { lineItem, onClose, localesContext } = this.props;
    if (!lineItem) return null;

    const productData = get(lineItem, 'productData');
    const optionGroups = get(lineItem, 'optionGroupMappings', []);
    const hasOptionGroups = !!optionGroups.length;

    if (!hasOptionGroups || !productData) return onClose();

    console.log('render', this.state.headerIsInView);
    return (
      <Fragment>
        <Button
          className="fixed col-12 t0 l0 r0 b0 bg-color-black-overlay"
          onClick={onClose}
        />
        <div
          className="LineItemEditor fixed md:col-6 lg:col-4 mxauto z1"
          onScroll={this.handleScroll}
        >
          <Card className="LineItemEditor__inner relative z2 overflow-scroll">
            <div className="bg-color-gray-light">
              <LineItemEditorTopBar
                lineItem={lineItem}
                onClose={onClose}
                isActive={!this.state.headerIsInView}
              />
              <div
                className="LineItemEditor__header bg-color-white radius-sm shadow-sm"
                ref={this.headerRef}
              >
                <div className="LineItemEditor__header__image mb2 relative">
                  <Image
                    src={productData.small_image_url}
                    alt={productData.name}
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
                    {productData.name}
                  </Text>
                  <div className="mb1 flex">
                    <Text size="detail" className="color-gray text-bold mr_5">
                      ${productData.price}
                    </Text>
                    <Text size="detail" className="color-gray">
                      {productData.calories}
                      {` ${localesContext.Language.t('menu.cal')}`}
                    </Text>
                  </div>
                  <Text size="detail" className="block color-gray">
                    {productData.description}
                  </Text>
                </div>
              </div>
              <div className="LineItemEditor__option-groups">
                {optionGroups.map(optionGroup => (
                  <OptionGroup
                    key={optionGroup.id}
                    optionGroup={optionGroup}
                    lineItem={lineItem}
                  />
                ))}
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
  }
}

export default LineItemEditor;

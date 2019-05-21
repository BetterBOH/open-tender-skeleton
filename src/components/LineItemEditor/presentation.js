import React, { PureComponent, createRef } from 'react';
import cx from 'classnames';
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
import { CALORIE_NULL_VALUE } from 'constants/OpenTender';
const PRODUCT_DATA_DESCRIPTION_CHAR_LIMIT = 200;

class LineItemEditor extends PureComponent {
  constructor() {
    super(...arguments);

    this.headerRef = createRef();
    this.closeRef = createRef();

    this.state = {
      headerIsInView: true,
      descriptionIsCollapsed: true
    };
  }

  componentDidMount() {
    const closeRef = get(this, 'closeRef.current');

    if (closeRef) return closeRef.focus();

    return null;
  }

  handleScroll = e => {
    const distance = e.target.scrollTop;
    const headerHeight = this.headerRef.current.clientHeight;
    const headerIsInView = distance < headerHeight;

    if (this.state.headerIsInView !== headerIsInView) {
      this.setState({ headerIsInView });
    }
  };

  expandDescription = () => this.setState({ descriptionIsCollapsed: false });
  collapseDescription = () => this.setState({ descriptionIsCollapsed: true });

  render() {
    const { lineItem, onClose, localesContext, brandContext } = this.props;
    if (!lineItem) return null;

    const productData = get(lineItem, 'productData');
    const optionGroups = get(lineItem, 'optionGroupMappings', []);

    if (!productData) return onClose();

    return (
      <div
        className="LineItemEditor fixed h100 md:hauto col-12 md:col-6 lg:col-4 mxauto z1"
        onScroll={this.handleScroll}
      >
        <Card className="LineItemEditor__inner relative z2 overflow-scroll">
          <div className="bg-color-gray-lighter" ref={this.modalRef}>
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
                  className="col-12"
                  src={productData.small_image_url}
                  alt={productData.name}
                  isBg={true}
                />
                <div className="p1 absolute t0 r0">
                  <Button
                    variant="icon-circle-secondary"
                    className="bg-color-white p_25 shadow-sm"
                    onClick={onClose}
                    elemRef={this.closeRef}
                  >
                    <Icon
                      icon="Close"
                      fill={get(brandContext, 'colors[gray-dark]')}
                    />
                  </Button>
                </div>
              </div>
              <div className="px2 pb2">
                <Text size="headline" className="block mb_25">
                  {productData.name}
                </Text>
                <div className="mb1 flex">
                  <Text
                    size="detail"
                    className="color-gray-dark text-bold mr_5"
                  >
                    ${productData.price}
                  </Text>
                  {!!get(productData, 'calories') &&
                    get(productData, 'calories') !== CALORIE_NULL_VALUE && (
                      <Text size="detail" className="color-gray-dark">
                        {productData.calories}{' '}
                        {localesContext.Language.t('menu.cal')}
                      </Text>
                    )}
                </div>
                {!!get(productData, 'description') && (
                  <div
                    className={cx(
                      'LineItemEditor__description-container relative',
                      {
                        'LineItemEditor__description-container--collapsed': this
                          .state.descriptionIsCollapsed
                      }
                    )}
                  >
                    <Text
                      size="detail"
                      className="LineItemEditor__description block color-gray-dark pb2"
                    >
                      {productData.description}
                    </Text>
                    {productData.description.length >
                      PRODUCT_DATA_DESCRIPTION_CHAR_LIMIT && (
                      <div className="LineItemEditor__description-container__fade-out flex items-end absolute t0 l0 r0 b0">
                        <Button
                          variant="no-style"
                          onClick={
                            this.state.descriptionIsCollapsed
                              ? this.expandDescription
                              : this.collapseDescription
                          }
                        >
                          <Text size="detail" className="text-bold">
                            {this.state.descriptionIsCollapsed
                              ? localesContext.Language.t(
                                  'menu.lineItemEditor.expandDescription'
                                )
                              : localesContext.Language.t(
                                  'menu.lineItemEditor.collapseDescription'
                                )}
                          </Text>
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            {!!optionGroups.length && (
              <div className="LineItemEditor__option-groups">
                {optionGroups.map(optionGroup => (
                  <OptionGroup
                    key={optionGroup.id}
                    optionGroup={optionGroup}
                    lineItem={lineItem}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="fixed b0 l0 col-12 bg-color-white py1 shadow-top">
            <ConfirmButtons
              confirmButtonText={localesContext.Language.t(
                'menu.lineItemEditor.addToOrder'
              )}
              confirmButtonIsDisabled={!lineItem.isValid}
              handleConfirm={onClose}
              cancelButtonIcon="Close"
              handleCancel={onClose}
            />
          </div>
        </Card>
      </div>
    );
  }
}

export default LineItemEditor;

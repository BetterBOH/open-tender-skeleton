import React, { PureComponent, Fragment, createRef } from 'react';
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
import toCamelCase from 'utils/toCamelCase';
import {
  SERVING_SIZE,
  CHOLESTEROL,
  SODIUM,
  CALORIES
} from 'constants/OpenTender';
import getTotalLineItemPrice from 'utils/getTotalLineItemPrice';

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

  renderNutritionFactUnit = nutrient => {
    const { localesContext } = this.props;
    const { Language } = localesContext;

    switch (nutrient) {
      case SERVING_SIZE:
        return Language.t('menu.nutritionFactUnits.oz');
      case (CHOLESTEROL, SODIUM):
        return Language.t('menu.nutritionFactUnits.mg');
      case CALORIES:
        return Language.t('menu.nutritionFactUnits.cal');
      default:
        return Language.t('menu.nutritionFactUnits.g');
    }
  };

  render() {
    const {
      lineItem,
      onClose,
      onConfirm,
      localesContext,
      brandContext
    } = this.props;
    if (!lineItem) return null;

    const productData = get(lineItem, 'productData');
    const optionGroups = get(lineItem, 'optionGroupMappings', []);

    if (!productData) return onClose();

    const nutritionFacts = get(productData, 'nutritional_info', {});
    const totalLineItemPrice = getTotalLineItemPrice(lineItem);

    return (
      <Fragment>
        <div
          className="LineItemEditor fixed col-12 md:col-6 lg:col-4 mxauto z1 md:px1"
          onScroll={this.handleScroll}
        >
          <Card className="LineItemEditor__inner overflow-hidden relative z2 pb2">
            <LineItemEditorTopBar
              lineItem={lineItem}
              onClose={onClose}
              isActive={!this.state.headerIsInView}
            />
            <div
              className="bg-color-gray-lighter overflow-scroll h100 col-12"
              ref={this.modalRef}
            >
              <div
                className={cx('LineItemEditor__header bg-color-white', {
                  'shadow-sm': !!optionGroups.length
                })}
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
                <div className="px1_5 md:px2 pb2">
                  <Text size="headline" className="block mb_25">
                    {productData.name}
                  </Text>
                  <div className="LineItemEditor__basic-meta flex mb1">
                    <Text size="detail" className="color-gray-dark text-bold">
                      ${totalLineItemPrice}
                    </Text>
                    {!!get(nutritionFacts, CALORIES) && (
                      <Text size="detail" className="color-gray-dark ml_5">
                        {nutritionFacts[CALORIES]}{' '}
                        {this.renderNutritionFactUnit(CALORIES)}
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
                      {!this.state.descriptionIsCollapsed && (
                        <Text
                          size="extrasmall"
                          className="LineItemEditor__description-title block text-bold letter-spacing-sm uppercase color-black mt2 mb1"
                        >
                          {localesContext.Language.t(
                            'menu.lineItemEditor.description'
                          )}
                        </Text>
                      )}
                      <Text
                        size="detail"
                        className="LineItemEditor__description block color-gray pb1"
                      >
                        {productData.description}
                      </Text>
                      {!this.state.descriptionIsCollapsed && (
                        <div className="LineItemEditor__nutrition-facts color-gray pb2">
                          <Text
                            size="extrasmall"
                            className="LineItemEditor__nutrition-facts-title block text-bold letter-spacing-sm uppercase color-black pb1"
                          >
                            {localesContext.Language.t(
                              'menu.lineItemEditor.nutritionFacts'
                            )}
                          </Text>
                          {Object.keys(nutritionFacts).map(
                            nutrient =>
                              !!nutritionFacts[nutrient] && (
                                <div className="LineItemEditor__nutrition-facts-row flex justify-between pb_25">
                                  <Text size="detail">
                                    {localesContext.Language.t(
                                      `menu.nutritionFacts.${toCamelCase(
                                        nutrient
                                      )}`
                                    )}
                                  </Text>
                                  <Text size="detail">
                                    {parseInt(nutritionFacts[nutrient], 10)}
                                    {nutrient === CALORIES && ' '}
                                    {this.renderNutritionFactUnit(nutrient)}
                                  </Text>
                                </div>
                              )
                          )}
                        </div>
                      )}
                      {(productData.description.length >
                        PRODUCT_DATA_DESCRIPTION_CHAR_LIMIT ||
                        Object.values(nutritionFacts).some(
                          value => !!value
                        )) && (
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
                <div className="LineItemEditor__option-groups mb2">
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
            <div className="absolute b0 l0 col-12 bg-color-white shadow-top py1 px_5 md:px1">
              <ConfirmButtons
                confirmButtonText={localesContext.Language.t(
                  'menu.lineItemEditor.addToOrder'
                )}
                confirmButtonIsDisabled={!lineItem.isValid}
                handleConfirm={onConfirm}
                cancelButtonIcon="Close"
                handleCancel={onClose}
              />
            </div>
          </Card>
        </div>
        <Button
          className="fixed b0 l0 r0 t0 col-12 h100 z-1"
          onClick={onClose}
          ariaLabel={localesContext.Language.t(
            'menu.lineItemEditor.closeLabel'
          )}
        />
      </Fragment>
    );
  }
}

export default LineItemEditor;

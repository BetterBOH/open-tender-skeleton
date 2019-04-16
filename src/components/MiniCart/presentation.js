import React from 'react';
import get from 'utils/get';
import {
  Text,
  Button,
  Icon,
  OrderSubtotal,
  OrderSummary,
  LineItemsCard
} from 'components';

const MiniCart = React.memo(
  ({
    handleAddMore,
    handleCheckout,
    handleClose,
    localesContext,
    lineItemsData,
    currentOrder,
    currentCustomer,
    currentLocation,
    subtotal
  }) => {
    const { Language } = localesContext;

    const cartIsEmpty = !lineItemsData || !lineItemsData.length;
    return (
      <div className="MiniCart h100 w100 bg-color-gray-light overflow-scroll">
        <div className="MiniCart__title-container text-center pt1_5">
          <Text size="headline">{Language.t('miniCart.title')}</Text>
        </div>
        <div className="MiniCart__order-summary-container p1_5">
          <OrderSummary
            orderSummaryData={{
              serviceType: get(currentOrder, 'service_type'),
              orderTime: get(currentOrder, 'requested_at'),
              locationName: get(currentLocation, 'name'),
              customer: currentCustomer
            }}
          />
        </div>
        <div className="MiniCart__line-items-card-container p1_5">
          <LineItemsCard
            items={lineItemsData}
            isConfigurable={true}
            showItemsWithoutQuantity={false}
            customer={currentCustomer}
          />

          {cartIsEmpty && (
            <div className="MiniCart__empty-cart-container text-center">
              <Text className="color-gray" size="headline">
                {Language.t('miniCart.cartIsEmpty')}
              </Text>
            </div>
          )}
        </div>
        <div className="MiniCart__footer fixed r0 b0 l0 bg-color-white">
          <div className="MiniCart__footer__subtotal-row">
            <OrderSubtotal subtotal={subtotal} />
          </div>
          <div className="MiniCart__footer__actions-row bg-color-gray-light p1_5 flex">
            <Button
              className={`flex-1 mr1 bg-color-white color-black shadow-md`}
              variant="primary"
              onClick={handleAddMore}
            >
              <Text size="cta-small">{Language.t('miniCart.addMore')}</Text>
            </Button>
            <Button
              className={`flex-1 mr1 bg-color-black color-white shadow-md`}
              variant="primary"
              isDisabled={cartIsEmpty}
              disabledClassName="disabled bg-color-gray-light color-gray"
              onClick={handleCheckout}
            >
              <Text size="cta-small">{Language.t('miniCart.checkout')}</Text>
            </Button>
            <Button
              variant="icon-circle-primary"
              className={`bg-color-gray-dark`}
              onClick={handleClose}
            >
              <Icon fill="white" icon="Close" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

export default MiniCart;

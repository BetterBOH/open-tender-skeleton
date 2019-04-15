import React, { Fragment } from 'react';
import {
  Card,
  Text,
  Button,
  DetailItemRowWithDropdown,
  PaymentMethods,
  DetailItemRowWithChildren,
  AddPromoCode
} from 'components';
import { Constants } from 'brandibble-redux';

const CheckoutDetails = React.memo(
  ({
    localesContext,
    locationName,
    serviceType,
    requestedAt,
    phoneNumber,
    activePaymentMethod,
    promoCode,
    handleSetPromoCode,
    handleSetServiceType
  }) => {
    const { Language } = localesContext;

    return (
      <Fragment>
        <div className="mb1">
          <Text size="cta" className="bold">
            {Language.t('checkout.details')}
          </Text>
        </div>
        <Card className="CheckoutDetails px1_5 py_5">
          <DetailItemRowWithDropdown
            label={Language.t('checkout.location')}
            icon="Marker"
            value={locationName}
          />
          <DetailItemRowWithDropdown
            label={Language.t('checkout.serviceType')}
            icon="Bag"
            value={serviceType}
          >
            <div className="py_5">
              {Object.values(Constants.ServiceTypes).map(type => (
                <Button
                  className="px1 py_5 capitalize"
                  onClick={
                    type === serviceType
                      ? f => f
                      : () => handleSetServiceType(type)
                  }
                >
                  <Text
                    size="description"
                    className="color-gray-dark text-semibold"
                  >
                    {type}
                  </Text>
                </Button>
              ))}
            </div>
          </DetailItemRowWithDropdown>
          <DetailItemRowWithDropdown
            label={Language.t('checkout.pickupTime')}
            icon="Clock"
            value={requestedAt}
          />
          <DetailItemRowWithDropdown
            label={Language.t('checkout.contact')}
            icon="Phone"
            value={
              phoneNumber || Language.t('checkout.placeholders.addPhoneNumber')
            }
          />
          <DetailItemRowWithDropdown
            label={Language.t('checkout.payment')}
            icon="CreditCard"
            value={
              activePaymentMethod ||
              Language.t('checkout.placeholders.addPayment')
            }
          >
            <PaymentMethods className="CheckoutDetails__payment-dropdown none lg:block" />
          </DetailItemRowWithDropdown>
          <DetailItemRowWithChildren
            label={Language.t('checkout.promo')}
            icon="Gift"
            value={promoCode || Language.t('checkout.placeholders.optional')}
          >
            <AddPromoCode handleSubmit={handleSetPromoCode} />
          </DetailItemRowWithChildren>
        </Card>
      </Fragment>
    );
  }
);

export default CheckoutDetails;

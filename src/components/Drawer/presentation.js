import React, { Suspense } from 'react';
import cx from 'classnames';

import {
  Spinner,
  PaymentMethods,
  MenuNavigationLinks,
  MenuFilters,
  EditServiceTypeTime,
  EditUserAttributeLinks,
  ChangePickupLocation,
  ChangeDeliveryAddress,
  AccountDetailsEditName,
  AccountDetailsEditEmail,
  AccountDetailsEditPhone,
  AccountDetailsEditPassword,
  Allergens
} from 'components';
import DrawerTypes from 'constants/DrawerTypes';
import { SELECT_PAYMENT_METHOD_VARIANT_EDIT_ORDER } from 'constants/PaymentMethods';
import get from 'utils/get';

const Drawer = React.memo(props => {
  const {
    drawerIsActive,
    variant,
    data,
    actions,
    openTenderRef,
    accountDetails,
    allergens,
    updateUserStatus
  } = props;

  if (!drawerIsActive || !variant) return null;

  const renderDrawerInner = () => {
    switch (variant) {
      case DrawerTypes.PAYMENT_METHODS:
        return (
          <PaymentMethods
            onClose={actions.resetDrawer}
            selectPaymentMethodVariant={
              get(data, 'selectPaymentMethodVariant')
                ? get(data, 'selectPaymentMethodVariant')
                : SELECT_PAYMENT_METHOD_VARIANT_EDIT_ORDER
            }
          />
        );

      case DrawerTypes.EDIT_NAME:
        return (
          <AccountDetailsEditName
            onClose={actions.resetDrawer}
            openTenderRef={openTenderRef}
            updateUser={actions.updateUser}
            updateUserStatus={updateUserStatus}
            customerAttributes={accountDetails}
          />
        );
      case DrawerTypes.EDIT_EMAIL:
        return (
          <AccountDetailsEditEmail
            onClose={actions.resetDrawer}
            openTenderRef={openTenderRef}
            updateUser={actions.updateUser}
            updateUserStatus={updateUserStatus}
            customerAttributes={accountDetails}
          />
        );
      case DrawerTypes.EDIT_PHONE:
        return (
          <AccountDetailsEditPhone
            onClose={actions.resetDrawer}
            openTenderRef={openTenderRef}
            updateUser={actions.updateUser}
            updateUserStatus={updateUserStatus}
            customerAttributes={accountDetails}
          />
        );
      case DrawerTypes.EDIT_PASSWORD:
        return (
          <AccountDetailsEditPassword
            onClose={actions.resetDrawer}
            openTenderRef={openTenderRef}
            updateUser={actions.updateUser}
            updateUserStatus={updateUserStatus}
            customerAttributes={accountDetails}
          />
        );
      case DrawerTypes.EDIT_ALLERGENS:
        return (
          <Allergens
            allergens={allergens}
            userAllergens={get(accountDetails, 'allergens')}
            handleAllergenClick={allergen => {
              const userAllergens = get(accountDetails, 'allergens');

              if (userAllergens.includes(allergen)) {
                return actions.removeAllergens(openTenderRef, [allergen]);
              }

              return actions.addAllergens(openTenderRef, [allergen]);
            }}
          />
        );
      case DrawerTypes.EDIT_SERVICE_TYPE_TIME:
        return <EditServiceTypeTime onClose={actions.resetDrawer} />;
      case DrawerTypes.EDIT_USER_ATTRIBUTE_REDIRECT:
        return <EditUserAttributeLinks onClose={actions.resetDrawer} />;
      case DrawerTypes.CHANGE_PICKUP_LOCATION:
        return <ChangePickupLocation onClose={actions.resetDrawer} />;
      case DrawerTypes.CHANGE_DELIVERY_ADDRESS:
        return <ChangeDeliveryAddress onClose={actions.resetDrawer} />;
      case DrawerTypes.MENU_NAVIGATION:
        return (
          <MenuNavigationLinks onClose={actions.resetDrawer} data={data} />
        );
      case DrawerTypes.MENU_FILTER:
        return <MenuFilters onClose={actions.resetDrawer} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cx(
        'Drawer fixed t0 r0 b0 l0 flex justify-center items-end z5',
        {
          hidden: !drawerIsActive
        }
      )}
    >
      <div className="Drawer__inner bg-color-white z2 fixed col-12">
        <Suspense
          fallback={
            <Suspense fallback={null}>
              <Spinner />
            </Suspense>
          }
        >
          {renderDrawerInner(variant, data)}
        </Suspense>
      </div>
      <div
        className="absolute vh100 col-12 bg-color-black-overlay"
        onClick={actions.resetDrawer}
      />
    </div>
  );
});

export default Drawer;

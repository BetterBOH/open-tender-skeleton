import React from 'react';
import { Status } from 'brandibble-redux';
import {
  Text,
  Card,
  TextField,
  Button,
  TextFieldError,
  Icon
} from 'components';
import InputTypes from 'constants/InputTypes';
import get from 'utils/get';

const CheckoutGuestContact = React.memo(
  ({
    values,
    errors,
    localesContext,
    brandContext,
    handleOnFocus,
    handleFieldChange,
    handleOnBlur,
    handleSignIn,
    showSignInForm,
    toggleSignInForm,
    authenticateUserStatus,
    authenticationErrors
  }) => {
    const formIsPending = authenticateUserStatus === Status.PENDING;

    return (
      <div>
        <div className="flex mb1">
          <Text size="cta" className="CheckoutGuestContact__title bold">
            {localesContext.Language.t('checkout.contact.title')}
          </Text>
          <Button
            variant="secondary"
            onClick={toggleSignInForm}
            className="bg-color-gray-dark flex items-center px1 py_5 justify-center"
          >
            <Icon
              variant="small"
              className="mr_5"
              icon="UserCircle"
              fill={get(brandContext, 'colors.white')}
            />

            <Text
              size="extrasmall"
              className="text-extrabold color-white uppercase letter-spacing-md"
            >
              {showSignInForm
                ? localesContext.Language.t('checkout.contact.checkoutAsGuest')
                : localesContext.Language.t('checkout.contact.login')}
            </Text>
          </Button>
        </div>
        <Card className="p1_5">
          {showSignInForm ? (
            <form
              className="CheckoutGuestContact__login-form"
              onSubmit={e => e.preventDefault()}
            >
              <div className="flex mt1">
                <TextField
                  className="col-12"
                  iconLeft="At"
                  type="email"
                  value={values[InputTypes.EMAIL]}
                  placeholder={localesContext.Language.t(
                    'checkout.contact.placeholders.email'
                  )}
                  onChange={value => handleFieldChange(InputTypes.EMAIL, value)}
                />
              </div>
              <div className="flex mt1">
                <TextField
                  className="col-12"
                  iconLeft="Lock"
                  type="password"
                  value={values[InputTypes.PASSWORD]}
                  errors={errors[InputTypes.PASSWORD]}
                  placeholder={localesContext.Language.t(
                    'checkout.contact.placeholders.password'
                  )}
                  onFocus={() => handleOnFocus(InputTypes.PASSWORD)}
                  onChange={value =>
                    handleFieldChange(InputTypes.PASSWORD, value)
                  }
                />
              </div>
              {!!authenticationErrors.length && (
                <div className="flex mt1">
                  <TextFieldError errors={authenticationErrors} />
                </div>
              )}
              <Button
                isDisabled={formIsPending}
                disabledClassName="bg-color-gray-dark"
                className="bg-color-black px2 mt1 inline-block width-auto"
                variant="secondary"
                type="submit"
                onClick={handleSignIn}
              >
                <Text
                  size="detail"
                  className="color-white uppercase text-semibold letter-spacing-sm"
                >
                  {formIsPending
                    ? localesContext.Language.t('checkout.contact.loading')
                    : localesContext.Language.t('checkout.contact.login')}
                </Text>
              </Button>
            </form>
          ) : (
            <form
              className="CheckoutGuestContact__contact-info-form"
              onSubmit={e => e.preventDefault()}
            >
              <div className="flex items-start">
                <TextField
                  className="col-12 mr1"
                  value={values[InputTypes.FIRST_NAME]}
                  errors={errors[InputTypes.FIRST_NAME]}
                  placeholder={localesContext.Language.t(
                    'checkout.contact.placeholders.firstName'
                  )}
                  onFocus={() => handleOnFocus(InputTypes.FIRST_NAME)}
                  onChange={value =>
                    handleFieldChange(InputTypes.FIRST_NAME, value)
                  }
                  onBlur={value => handleOnBlur(InputTypes.FIRST_NAME, value)}
                />
                <TextField
                  className="col-12"
                  value={values[InputTypes.LAST_NAME]}
                  errors={errors[InputTypes.LAST_NAME]}
                  placeholder={localesContext.Language.t(
                    'checkout.contact.placeholders.lastName'
                  )}
                  onFocus={() => handleOnFocus(InputTypes.LAST_NAME)}
                  onChange={value =>
                    handleFieldChange(InputTypes.LAST_NAME, value)
                  }
                  onBlur={value => handleOnBlur(InputTypes.LAST_NAME, value)}
                />
              </div>
              <div className="flex mt1">
                <TextField
                  className="col-12"
                  value={values[InputTypes.EMAIL]}
                  errors={errors[InputTypes.EMAIL]}
                  placeholder={localesContext.Language.t(
                    'checkout.contact.placeholders.email'
                  )}
                  onFocus={() => handleOnFocus(InputTypes.EMAIL)}
                  onChange={value => handleFieldChange(InputTypes.EMAIL, value)}
                  onBlur={value => handleOnBlur(InputTypes.EMAIL, value)}
                />
              </div>
              <div className="flex mt1">
                <TextField
                  className="col-12"
                  value={values[InputTypes.PHONE]}
                  errors={errors[InputTypes.PHONE]}
                  placeholder={localesContext.Language.t(
                    'checkout.contact.placeholders.phoneNumber'
                  )}
                  onFocus={() => handleOnFocus(InputTypes.PHONE)}
                  onChange={value => handleFieldChange(InputTypes.PHONE, value)}
                  onBlur={value => handleOnBlur(InputTypes.PHONE, value)}
                />
              </div>
            </form>
          )}
        </Card>
      </div>
    );
  }
);

export default CheckoutGuestContact;

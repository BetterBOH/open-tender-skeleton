import { ApiVersion, ErrorCodes } from 'brandibble-redux';

export const HOST = 'https://www.brandibble.co/api/';
export const STAGING_HOST = 'https://staging.brandibble.co/api/';

export const PICKUP = 'pickup';
export const ASAP = 'asap';

/* Payment Types */
export const CREDIT_CARD = 'credit';

export const CALORIE_NULL_VALUE = 'n/a';

/* Completed order statuses */
export const OPEN = 'open';

/* Order Validation Source Pointer*/
export const INVALID_ITEMS_POINTER = 19708;
export const INVALID_CUSTOMER_ATTRIBUTES_POINTER = 'customer';

export const ServerErrorCodes = {
  DUPLICATE_EMAIL: 'orders.validate.duplicate_email',
  PROMO_CODE_NOT_FOUND: 'orders.validate.promo_code_not_found',
  INVALID_PROMO_CODE: 'orders.validate.invalid_code',
  INVALID_LOGIN_LEVELUP: 'customers.login.validation.levelup',
  INVALID_LOGIN_BOTH: 'customers.login.validation.both'
};

export { ApiVersion, ErrorCodes };

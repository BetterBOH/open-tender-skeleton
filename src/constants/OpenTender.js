export const HOST = 'https://www.brandibble.co/api/';
export const STAGING_HOST = 'https://staging.brandibble.co/api/';

export const PICKUP = 'pickup';
export const DELIVERY = 'delivery';
export const ASAP = 'asap';

/* Payment Types */
export const CREDIT_CARD = 'credit';

/* Nutrition Facts */
export const SERVING_SIZE = 'serving_size';
export const CHOLESTEROL = 'cholesterol';
export const SODIUM = 'sodium';
export const CALORIES = 'calories';

/* Completed order statuses */
export const OPEN = 'open';

/* Order Validation Source Pointer*/
export const INVALID_ITEMS_POINTER = 19708;
export const INVALID_CUSTOMER_ATTRIBUTES_POINTER = 'customer';

export const ServerErrorCodes = {
  ORDER_DUPLICATE_EMAIL: 'orders.validate.duplicate_email',
  UPDATE_ACCOUNT_DUPLICATE_EMAIL: 'customers.update.duplicate_email',
  PROMO_CODE_NOT_FOUND: 'orders.validate.promo_code_not_found',
  INVALID_PROMO_CODE: 'orders.validate.invalid_code',
  INVALID_LOGIN_LEVELUP: 'customers.login.validation.levelup',
  INVALID_LOGIN_BOTH: 'customers.login.validation.both'
};

export const LocalStorageKeys = {
  UNAUTHENTICATED_USER_ALLERGENS: 'UNAUTHENTICATED_USER_ALLERGENS'
};

export const LOCAL_STORAGE_DELIMITER = ',';

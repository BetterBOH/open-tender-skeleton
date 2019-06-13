import environmentIsProd from 'utils/environmentIsProd';

export const FLAGS = {
  REWARDS: {
    DEV: false,
    PROD: false
  },
  MENU_SHARING: {
    DEV: false,
    PROD: false
  },
  CUSTOMER_ADDRESS_BOOK: {
    DEV: false,
    PROD: false
  },
  MENU_STATUS: {
    DEV: false,
    PROD: false
  }
};

export const isEnabled = flag => {
  return environmentIsProd() ? flag.PROD : flag.DEV;
};

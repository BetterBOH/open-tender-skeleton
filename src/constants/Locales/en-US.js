export default {
  global: {
    hello: 'Hello, en-US World!',
    weekdays: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday'
    },
    to: 'to'
  },
  auth: {
    errors: {
      emailIsInvalid: 'Please enter a valid email address.'
    },
    signup: {
      errors: {
        emailIsInvalid: 'Please enter a valid email address.',
        firstNameIsInvalid: 'Please enter a valid first name.',
        lastNameIsInvalid: 'Please enter a valid last name.',
        phoneNumberIsInvalid: 'Please enter a valid phone number.',
        passwordIsInvalid:
          'Please enter a password that is greater than 5 characters in length.'
      }
    },
    login: {
      errors: {
        emailIsInvalid: 'Please enter a valid email address.',
        passwordIsInvalid: 'Please enter your password.'
      }
    }
  },
  dashboard: {},
  welcome: {
    headline: 'What type of order would you like to place?',
    adlib: "Let's get started, shall we?",
    description: 'Select a service type from the options below.',
    orderFor: 'Order for',
    orderTypes: {
      pickup: 'Pickup',
      delivery: 'Delivery',
      catering: 'Catering'
    }
  },
  location: {
    openNow: 'Open Now',
    closedNow: 'Closed Now',
    changeLocation: 'Change Location',
    orderHere: 'Order Here'
  },
  menu: {
    cal: 'Cal'
  },
  cart: {
    cal: 'Cal',
    summary: {
      orderFor: 'order for',
      from: 'from',
      at: 'at'
    },
    subtotalWithTax: 'SUBTOTAL + TAX',
    rewards: 'REWARDS',
    total: 'TOTAL',
    item: 'ITEM',
    items: 'ITEMS'
  },
  checkout: {
    items: 'Items'
  },
  account: {
    guest: 'Guest'
  },
  order: {
    details: 'Details',
    service: 'SERVICE',
    location: 'LOCATION',
    pickupTime: 'PICKUP TIME',
    contact: 'CONTACT',
    payment: 'PAYMENT'
  }
};

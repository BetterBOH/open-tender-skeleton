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
          'Please enter a password that is greater than 8 characters in length.'
      }
    },
    login: {
      errors: {
        emailIsInvalid: 'Please enter a valid email address.',
        passwordIsInvalid: 'Please enter your password.'
      }
    },
    reset: {
      errors: {
        emailIsInvalid: 'Please enter a valid email address.',
        passwordMismatch: 'Your passwords do not match.',
        passwordIsInvalid:
          'Please enter a password that is greater than 8 characters in length.'
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
  locations: {
    startSearch: 'Enter your address to find the closest restuarant near you.',
    searchResults: 'Restaurants Near You',
    noSearchResults: "Unfortunately, we don't have any restaurants nearby."
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
      serviceType: {
        pickup: 'Pickup',
        delivery: 'Delivery'
      },
      asap: 'ASAP',
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
    guest: 'Guest',
    details: 'Account Details',
    name: 'Name',
    email: 'E-mail',
    password: 'Password',
    delivery: 'Delivery',
    payment: 'Payment',
    instructions: 'Tap an entry to make a change.',
    addAddress: 'Add Your Address',
    ccEndingIn: 'Ending In ****',
    addCreditCard: 'Add Your Credit Card'
  },
  order: {
    details: 'Details',
    service: 'SERVICE',
    location: 'LOCATION',
    pickupTime: 'PICKUP TIME',
    contact: 'CONTACT',
    payment: 'PAYMENT',
    reOrder: 'RE-ORDER'
  }
};

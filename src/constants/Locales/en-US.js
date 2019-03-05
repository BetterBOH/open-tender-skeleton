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
  dashboard: {
    recentOrders: {
      headline: 'Recent Orders',
      adlib: 'Life is uncertain. Have the usual.',
      browseAll: 'Browse All',
      orders: 'Orders',
      noOrders: 'You have no recent orders.'
    }
  },
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
    subtotal: 'Subtotal',
    subtotalWithTax: 'Subtotal + Tax',
    rewards: 'Rewards',
    total: 'Total',
    item: 'Item',
    items: 'Items'
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
    pickupTime: 'Pickup Time',
    contact: 'Contact',
    payment: 'Payment',
    reorder: 'Reorder'
  },
  feedback: {
    rating: {
      headline: 'How was your experience?',
      description:
        'Rate from 1-5, with 5 being stupendous and 1 being pretty awful. We hope it wasn’t a 1.'
    },
    continue: 'Continue',
    comment: {
      headline: 'Anything else to add?',
      description: 'Don’t hold back. We can take it.',
      adlib: '…plz b gentle',
      placeholder: 'Write your feedback here.'
    },
    submit: 'Submit Feedback'
  },
  pastOrders: {
    myPastOrders: 'My Past Orders',
    youHavePlaced: 'You have placed',
    order: 'Order',
    orders: 'Orders',
    inTotal: 'in total.',
    description:
      'Tap an order to see its details or tap REORDER to quickly add its items to your current order if they are avaiable at the restaurant selected.',
    noOrders: "You haven't placed any orders."
  }
};

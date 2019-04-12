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
  footer: {
    attribution: 'Powered By'
  },
  auth: {
    checkoutAsGuest: 'Checkout as a guest',
    placeholders: {
      email: 'Email Address',
      firstName: 'First Name',
      lastName: 'Last Name',
      phoneNumber: 'Phone Number',
      password: 'Password',
      confirmPassword: 'Confirm Password'
    },
    emailCheck: {
      haveAccount: 'Do you have an account with us already?',
      enterEmail: "Enter your email - we'll check!",
      willAskForPassword: "If you do, we'll ask for your password.",
      errors: {
        emailIsInvalid: 'Please enter a valid email address.'
      }
    },
    signup: {
      enterDetails: 'Enter your details to sign up for an account.',
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
      enterPassword: 'Enter your password to log into your account.',
      emailHasAccount:
        'This email has an account associated with it. Please enter your password to log in.',
      forgotPassword: 'Forgot your password?',
      errors: {
        emailIsInvalid: 'Please enter a valid email address.',
        passwordIsInvalid: 'Please enter your password.'
      }
    },
    reset: {
      resetPassword: 'Reset Password',
      enterEmail:
        "Enter your email address and we'll send you a reset password link.",
      enterPassword: 'Enter a new password.',
      errors: {
        emailIsInvalid: 'Please enter a valid email address.',
        passwordMismatch: 'Your passwords do not match.',
        passwordIsInvalid:
          'Please enter a password that is greater than 8 characters in length.'
      }
    }
  },
  dashboard: {
    welcomeBack: 'Welcome back',
    adlib: 'How can we serve you today?',
    recentOrders: {
      headline: 'Recent Orders',
      adlib: 'Life is uncertain. Have the usual.',
      browseAll: 'Browse All',
      orders: 'Orders',
      noOrders: 'You have no recent orders.'
    },
    summary: {
      yourOrder: 'Your Order',
      startNewOrder: 'Start a New Order',
      resumeOrder: 'Resume Your Order',
      serviceType: {
        pickup: 'Pickup',
        delivery: 'Delivery'
      },
      asap: 'ASAP',
      from: 'from',
      at: 'at'
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
    pickupAdlib: "Cool, we can't wait to see you.",
    whereAreYou: 'Where are you located?',
    startSearchDesktop:
      'We can recommend the nearest restaurants if you enter your zip below or tap  “locate me” to share your browser’s location. (It’s totally private, swear.)',
    startSearchMobile:
      'Enter your address to see restaurants nearby, or tap locate to detect your location.',
    locateMe: 'Locate me',
    loading: 'Loading...',
    cannotLocate: 'Unable to retrieve your location',
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
    cal: 'Cal',
    customize: 'Customize',
    allergen: {
      contains: 'Contains'
    },
    lineItemEditor: {
      addToOrder: 'Add To Order',
      selectSize: 'What size would you like?',
      expandDescription: 'More',
      collapseDescription: 'Less'
    }
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
    items: 'Items',
    details: 'Details',
    location: 'Location',
    serviceType: 'Service Type',
    pickupTime: 'Pickup Time',
    pickupBy: 'Pickup By',
    contact: 'Contact',
    payment: 'Payment',
    promo: 'Promo/Gift Code',
    ccEndingIn: 'Ending In ***',
    submitOrder: 'Submit Order',
    subtotalWithTax: 'Subtotal + Tax',
    rewards: 'Rewards',
    total: 'Total',
    promoCode: {
      label: 'Promo Code',
      havePromoCode: 'Have a promo or gift code?',
      enterHere: 'Enter it here!',
      apply: 'Apply'
    },
    placeholders: {
      addPhoneNumber: 'Add a phone number',
      addPayment: 'Add a payment method',
      optional: 'Optional',
      promoCode: 'CHEATCODES'
    },
    errors: {
      promoCodeIsInvalid: 'That code is invalid. Sry!!'
    },
    notifications: {
      setPaymentMethod: {
        success: 'Your payment method was successfully set',
        error: 'Something went wrong setting your payment method'
      },
      createPayment: {
        success: 'Your payment method was successfully created',
        error: 'Something went wrong creating your payment method'
      }
    }
  },
  account: {
    guest: 'Guest',
    details: 'Account Details',
    name: 'Name',
    email: 'Email Address',
    password: 'Password',
    delivery: 'Delivery',
    payment: 'Payment',
    instructions: 'Tap an entry to make a change.',
    addAddress: 'Add Your Address',
    ccEndingIn: 'Ending In ***',
    addCreditCard: 'Add Your Credit Card'
  },
  order: {
    details: 'Details',
    service: 'Service',
    location: 'Location',
    pickupTime: 'Pickup Time',
    pickupBy: 'Pickup By',
    contact: 'Contact',
    payment: 'Payment',
    ccEndingIn: 'Ending In ***',
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
  },
  reward: {
    rewards: 'Rewards',
    thankYou: 'Thank you for being a friend.',
    spendAnother: 'Spend another',
    toEarn: 'to earn',
    moreOrders: 'more orders until you earn a',
    inCredit: 'in credit',
    discount: 'discount'
  },
  favorites: {
    headerText: 'Your Favorites',
    subtitle: "You know you want it. Don't deny yourself.",
    favoriteSaved: 'Favorite Saved',
    favoritesSaved: 'Favorites Saved'
  },
  miniCart: {
    title: 'Your Order',
    addMore: 'Add more',
    checkout: 'Check out',
    cartIsEmpty: 'Your cart is empty.'
  },
  paymentTypes: {
    credit: {
      secondaryText: '',
      primaryText: 'Add a Credit Card'
    }
  },
  selectPaymentMethod: {
    header: 'How would you like to pay?',
    confirm: 'Confirm Selection',
    addPayment: 'Add Payment Method'
  },
  choosePaymentType: {
    header: 'What type of payment method would you like to add?',
    confirm: 'Confirm Selection',
    credit: {
      secondaryText: '',
      primaryText: 'Add a Credit Card'
    }
  },
  addCreditCard: {
    header: 'Please enter your payment details',
    confirm: 'Submit Details',
    cardHolderName: 'Cardholder Name',
    cardNumber: 'Card Number',
    expiration: 'Expiration Date',
    zip: 'Zip Code',
    cvv: 'CVV',
    errors: {
      cardHolderName: "Please enter the card holder's name.",
      ccNumber: 'The credit card number is not valid.',
      ccExpiration: 'An expiration date is required',
      ccCvv: 'CVV is required',
      ccZip: 'Zip code is required'
    }
  },
  systemNotification: {
    setPaymentMethod: {
      success: 'Your payment method was successfully set',
      error: 'Something went wrong setting your payment method'
    },
    createPayment: {
      success: 'Your payment method was successfully created',
      error: 'Something went wrong creating your payment method'
    }
  },
  orderSummary: {
    howWasIt: 'How was it?',
    feedback: 'Feedback',
    reorder: 'Reorder'
  }
};

export default {
  global: {
    hello: 'Hello, en-US World!',
    home: 'Home',
    weekdays: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday'
    },
    to: 'to',
    today: 'Today'
  },
  footer: {
    attribution: 'Powered By',
    openTenderLogo: 'Open Tender Logo.'
  },
  auth: {
    submit: 'Submit',
    loading: 'Checking...',
    forgotPassword: 'Forgot Password?',
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
      loading: 'Submitting...',
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
      loading: 'Submitting...',
      enterPassword: 'Enter your password to log into your account.',
      emailHasAccount:
        'This email has an account associated with it. Please enter your password to log in.',
      forgotPassword: 'Forgot your password?',
      errors: {
        emailIsInvalid: 'Please enter a valid email address.',
        passwordIsInvalid: 'Please enter your password.',
        invalidLoginLevelup:
          "The email address or password you submitted doesn't match our records. Please try again.",
        invalidLoginBoth:
          "The email address or password you submitted doesn't match our records. Please try again."
      }
    },
    reset: {
      loading: 'Submitting...',
      resetPassword: 'Reset Password',
      enterEmail:
        "Enter your email address and we'll send you a reset password link.",
      enterPassword: 'Enter a new password.',
      errors: {
        emailIsInvalid: 'Please enter a valid email address.',
        passwordMismatch: 'Your passwords do not match.',
        passwordIsInvalid:
          'Please enter a password that is greater than 8 characters in length.'
      },
      sent: 'Check your email for next steps on resetting your password.'
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
    },
    nav: {
      reorder: 'Reorder',
      favorites: 'Favorites',
      rewards: 'Rewards',
      account: 'Account'
    },
    account: {
      editName: 'Edit Your Name',
      editPhone: 'Edit Your Phone Number',
      editEmail: 'Edit Your Email',
      editPassword: 'Edit Your Password',
      update: 'Update',
      loading: 'Updating...',
      placeholders: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        phone: 'Phone Number',
        password: 'Password',
        confirmPassword: 'Confirm Password'
      },
      errors: {
        firstName: 'Your first name cannot be blank.',
        lastName: 'Your last name cannot be blank.',
        email: 'You must provide a valid email address.',
        existingAccount:
          'This email address is associated with another account.',
        phone: 'You must provide a valid phone number.',
        password:
          'Please enter a password that is greater than 8 characters in length.'
      }
    },
    logout: 'Logout'
  },
  welcome: {
    headline: 'How can we help you today?',
    adlib: "Let's get started, shall we?",
    description: 'Select an order type from the options below.',
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
    geocoderPlaceholder: 'Enter your ZIP or address',
    startSearchDesktop:
      'We can recommend the nearest restaurants if you enter your zip below or tap  “locate me” to share your browser’s location. (It’s totally private, swear.)',
    startSearchMobile:
      'Enter your address to see restaurants nearby, or tap locate to detect your location.',
    enterYourAddress: 'Enter your address',
    locateMe: 'Locate me',
    loading: 'Loading...',
    cannotLocate: 'Unable to retrieve your location',
    searchResults: 'Restaurants Near You',
    noSearchResults: "Unfortunately, we don't have any restaurants nearby.",
    distanceUnit: 'miles away'
  },
  location: {
    openNow: 'Open Now',
    closedNow: 'Closed Now',
    changeLocation: 'Change Location',
    changeDeliveryAddress: 'Change Delivery Address',
    orderHere: 'Order Here',
    searchFor: 'Search for',
    locationInGoogleMaps: 'location in Google Maps'
  },
  quantitySpinner: {
    increment: 'Increment',
    decrement: 'Decrement'
  },
  menu: {
    title: 'Menu',
    add: 'Add',
    moreDetailsAbout: 'More details about',
    allergen: {
      contains: 'Contains'
    },
    lineItemEditor: {
      closeLabel: 'Close this menu item and return to menu',
      addToOrder: 'Add To Order',
      selectSize: 'What size would you like?',
      description: 'Description',
      expandDescription: 'More',
      collapseDescription: 'Less',
      nutritionFacts: 'Nutrition Facts',
      optionGroupSelect: 'Select',
      optionGroupSelected: 'Selected %{value}/%{value}'
    },
    nutritionFacts: {
      calories: 'Calories',
      cholesterol: 'Cholesterol',
      dietaryFiber: 'Dietary Fiber',
      protein: 'Protein',
      saturatedFat: 'Saturated Fat',
      servingSize: 'Serving Size',
      sodium: 'Sodium',
      sugars: 'Sugars',
      totalCarbs: 'Total Carbs',
      totalFat: 'Total Fat',
      transFat: 'Trans Fat'
    },
    nutritionFactUnits: {
      cal: 'Cal',
      oz: 'oz',
      mg: 'mg',
      g: 'g'
    },
    navigation: 'Tap to jump to a section of the menu.'
  },
  allergens: {
    title: 'Allergens'
  },
  cart: {
    guest: 'Guest',
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
    items: 'Items',
    forCustomer: 'for'
  },
  checkout: {
    items: 'Items',
    details: 'Details',
    location: 'Location',
    address: 'Address',
    serviceType: 'Service Type',
    changeLocation: 'Change Location',
    changeAddress: 'Change Address',
    changeServiceType: 'Change Service Type',
    viewMenu: 'View Menu',
    pickupTime: 'Pickup Time',
    deliveryTime: 'Delivery Time',
    pickupBy: 'Pickup By',
    payment: 'Payment',
    promo: 'Promo/Gift Code',
    ccEndingIn: 'Ending In ***',
    submitOrder: 'Submit Order',
    submittingOrder: 'Submitting Order...',
    subtotalWithTax: 'Subtotal + Tax',
    rewards: 'Rewards',
    total: 'Total',
    promoCode: {
      label: 'Promo Code',
      havePromoCode: 'Have a promo or gift code?',
      enterHere: 'Enter it here!',
      apply: 'Apply'
    },
    contact: {
      title: 'Contact Info',
      editInDashboard: 'Edit in Dashboard',
      checkoutAsGuest: 'Checkout as a Guest',
      loading: 'Loading',
      login: 'Log in',
      errors: {
        firstName: 'You must provide a first name',
        lastName: 'You must provide a last name',
        email: 'You must provide a valid email address',
        phoneNumber: 'You must provide a valid phone number',
        password: 'Please enter your password.'
      },
      fullName: 'Full Name',
      email: 'Email Address',
      phoneNumber: 'Phone Number',
      placeholders: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        phoneNumber: 'Phone Number',
        password: 'Password'
      }
    },
    placeholders: {
      addPayment: 'Add a payment method',
      optional: 'Optional',
      promoCode: 'CHEATCODES'
    },
    errors: {
      promoCodeIsInvalid: 'Sorry but that code is invalid',
      promoCodeNotFound: 'Sorry but we did not find that promo code',
      existingAccount:
        'There is already an account associated with this email - please sign in to proceed'
    },
    notifications: {
      setPaymentMethod: {
        success: 'Your payment method was successfully set',
        error: 'Something went wrong setting your payment method'
      },
      setDefaultPayment: {
        success: 'Your default payment method was successfully set',
        error: 'Something went wrong setting your default payment method'
      },
      createPayment: {
        success: 'Your payment method was successfully created',
        error: 'Something went wrong creating your payment method'
      },
      createOrder: {
        error: 'Something went wrong creating your order'
      }
    }
  },
  account: {
    guest: 'Guest',
    details: 'Account Details',
    name: 'Name',
    email: 'Email Address',
    phone: 'Phone Number',
    password: 'Password',
    asterisks: '*********',
    delivery: 'Delivery',
    payment: 'Payment',
    allergies: 'Allergies',
    editAllergies: 'Edit Allergies',
    instructions: 'Tap an entry to make a change.',
    addAddress: 'Add an Address',
    ccEndingIn: 'Ending In ***',
    addCreditCard: 'Add a Credit Card',
    noDefaultPayment: 'No Default Payment'
  },
  delivery: {
    change: 'Change',
    enterYourAddressHeader: "We'll come to you!",
    enterYourAddressDescription:
      "Choose the address where you'd like your order delivered.",
    confirmYourAddressHeader: 'Enter your delivery address',
    confirmYourAddressDescription:
      "Please confirm we've found the right address!",
    enterYourUnit: 'Enter apartment number, buzzer, floor',
    confirm: 'Confirm',
    loading: 'Loading...',
    validatingAddress: 'Validating address...',
    noLocations: 'This address is currently not in our delivery zone.',
    addressNotSpecificEnough: 'Please enter a more specific address.'
  },
  order: {
    details: 'Details',
    service: 'Service',
    location: 'Location',
    pickupTime: 'Pickup Time',
    contact: 'Contact',
    payment: 'Payment',
    ccEndingIn: 'Ending In ***',
    reorder: 'Reorder'
  },
  feedback: {
    rating: {
      headline: 'How was your experience?',
      description:
        'Rate from 1-5, with 5 being stupendous and 1 being pretty awful. We hope it wasn’t a 1.',
      clickToSetRating: 'Click to set rating to %{ratingValue}.'
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
    recentOrders: 'Recent Orders',
    theUsual: 'Life is uncertain. Have the usual.',
    noOrders: "You haven't placed any orders.",
    afterPlacedOrders:
      "All of your past orders will eventually show up here. But you haven't placed any orders yet! Let's get some food in you.",
    placeAnOrder: 'Place an Order',
    showMore: 'Show More'
  },
  reward: {
    rewards: 'Rewards',
    thankYou: 'Thank you for being a friend.',
    spendAnother: 'Spend another',
    toEarn: 'to earn',
    moreOrders: 'more orders until you earn a',
    inCredit: 'in credit',
    discount: 'discount',
    noRewards:
      "It doesn't look like you have any rewards memberships connected to your account.",
    connectAccount: 'Connect an Account'
  },
  favorites: {
    headerText: 'Your Favorites',
    subtitle: 'You hearted ‘em. They love you back.',
    favoriteSaved: 'Favorite Saved',
    favoritesSaved: 'Favorites Saved',
    noFavorites:
      "You haven't favorited any items yet. Luckily there is still so much to discover.",
    addFavorites: 'Add Favorites'
  },
  miniCart: {
    title: 'Your Order',
    guest: 'Guest',
    addMore: 'Add more',
    checkout: 'Checkout',
    cartIsEmpty: 'Your cart is empty.'
  },
  paymentTypes: {
    credit: {
      secondaryText: '',
      primaryText: 'Add a Credit Card'
    }
  },
  selectPaymentMethod: {
    editOrderHeader: 'How would you like to pay?',
    editAccountHeader: 'Your Payment Methods',
    confirm: 'Confirm Selection',
    delete: 'Delete Payment Method',
    addPayment: 'Add Payment Method',
    thisIsYourDefault: 'This is your default payment card',
    saveAsDefault: 'Save as default payment card',
    default: '(Default)',
    ccEndingIn: 'Ending in ***'
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
      cardHolderName: "Please enter the cardholder's name",
      ccNumber: 'The credit card number is not valid',
      ccExpiration: 'A valid expiration date is required',
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
    },
    attemptReorder: {
      success: {
        reorderSuccessful: 'Your order was successful!',
        itemsWereRemoved: 'Some items had to be removed to complete your order.'
      },
      error: 'Your order could not be fulfilled'
    },
    validateOrder: {
      errors: {
        duplicateEmail:
          'There is already an account associated with this email - please sign in to proceed.',
        belowDeliveryMinimum:
          'Our delivery minimum is $%{deliveryMinimum}, please add more items to your cart.'
      }
    }
  },
  orderSummary: {
    title: 'Order #%{orderId}',
    subtitle:
      'Your order was placed on %{orderDate} for a total of $%{orderTotal} after any applicable discounts were applied.',
    howWasIt: 'How was it?',
    leaveAComment: 'Leave a Comment',
    updateComment: 'Update Comment',
    reorder: 'Reorder',
    subtotalWithTax: 'Subtotal + Tax',
    rewards: 'Rewards',
    total: 'Total',
    trackDeliveryLink: 'Click here to track your order.'
  },
  invalidItemsInCart: {
    header: 'You Have Invalid Items In Cart',
    instructions:
      'In order to proceed the following items will be removed from your cart:'
  },
  belowDeliveryMinimum: {
    header: 'You Are Below The Delivery Minimum',
    instructions:
      'In order to checkout please add more to meet the delivery minimum'
  },
  locationIsClosed: {
    header: 'Location Is Closed',
    instructions: 'This location is closed, please select a new one'
  },
  genericErrorModal: {
    header: 'An unknown error has occurred',
    instructions:
      "We are sorry but an unknown error has occurred. We'll need to restart the application."
  },
  editServiceTypeTime: {
    headerForPickup: 'Pickup time',
    headerForDelivery: 'Delivery time',
    today: 'Today',
    tomorrow: 'Tomorrow',
    sorry: 'Sorry!',
    noTimesToday: 'There are no more pickup slots available today.',
    nextAvailableDay: 'Next available day',
    currentlySelected: 'Currently selected'
  }
};

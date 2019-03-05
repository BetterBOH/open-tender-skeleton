export const customer = {
  allergens: ['Gluten', 'Dairy'],
  customer_id: 186063,
  email: 'someone@gmail.com',
  first_name: 'Someone',
  is_levelup_connected: true,
  is_levelup_first: false,
  last_name: 'Somewhere',
  levelup_connected_email: 'someone01@gmail.com',
  levelup_permissions: 'all',
  phone: '202-834-3641'
};

export const location = {
  city: 'New York',
  cross_streets: 'Between 3rd and Lexington',
  dayparts: [
    {
      daypart: 'Breakfast',
      ends_at: '2019-02-01T16:30:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: ['2019-02-01T13:00:00Z', '2019-02-01T16:30:00Z'],
          is_orderable: false,
          is_orderable_error_reason: 'Daypart has passed',
          is_orderable_error_reason_code: 201
        },
        pickup: {
          hours: ['2019-02-01T13:00:00Z', '2019-02-01T16:30:00Z'],
          is_orderable: false,
          is_orderable_error_reason: 'Daypart has passed',
          is_orderable_error_reason_code: 201
        }
      },
      starts_at: '2019-02-01T06:01:00Z',
      weekday: 'Friday'
    },
    {
      daypart: 'Lunch',
      ends_at: '2019-02-01T21:00:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: ['2019-02-01T16:30:00Z', '2019-02-01T21:00:00Z'],
          is_orderable: false,
          is_orderable_error_reason: 'Daypart has passed',
          is_orderable_error_reason_code: 201
        },
        pickup: {
          hours: ['2019-02-01T16:30:00Z', '2019-02-01T21:00:00Z'],
          is_orderable: false,
          is_orderable_error_reason: 'Daypart has passed',
          is_orderable_error_reason_code: 201
        }
      },
      starts_at: '2019-02-01T16:30:00Z',
      weekday: 'Friday'
    },
    {
      daypart: 'Dinner',
      ends_at: '2019-02-02T05:59:00Z',
      is_current: true,
      service_types: {
        delivery: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason:
            'Service type not available during this daypart',
          is_orderable_error_reason_code: 200
        },
        pickup: {
          hours: ['2019-02-01T21:00:00Z', '2019-02-02T04:00:00Z'],
          is_orderable: true
        }
      },
      starts_at: '2019-02-01T21:00:00Z',
      weekday: 'Friday'
    },
    {
      daypart: 'Breakfast',
      ends_at: '2019-02-02T16:30:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason: 'Location is closed on this day',
          is_orderable_error_reason_code: 102
        },
        pickup: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason: 'Location is closed on this day',
          is_orderable_error_reason_code: 102
        }
      },
      starts_at: '2019-02-02T06:01:00Z',
      weekday: 'Saturday'
    },
    {
      daypart: 'Lunch',
      ends_at: '2019-02-02T21:00:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason: 'Location is closed on this day',
          is_orderable_error_reason_code: 102
        },
        pickup: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason: 'Location is closed on this day',
          is_orderable_error_reason_code: 102
        }
      },
      starts_at: '2019-02-02T16:30:00Z',
      weekday: 'Saturday'
    },
    {
      daypart: 'Dinner',
      ends_at: '2019-02-03T05:59:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason: 'Location is closed on this day',
          is_orderable_error_reason_code: 102
        },
        pickup: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason: 'Location is closed on this day',
          is_orderable_error_reason_code: 102
        }
      },
      starts_at: '2019-02-02T21:00:00Z',
      weekday: 'Saturday'
    },
    {
      daypart: 'Breakfast',
      ends_at: '2019-02-03T16:30:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason: 'Location is closed on this day',
          is_orderable_error_reason_code: 102
        },
        pickup: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason: 'Location is closed on this day',
          is_orderable_error_reason_code: 102
        }
      },
      starts_at: '2019-02-03T06:01:00Z',
      weekday: 'Sunday'
    },
    {
      daypart: 'Lunch',
      ends_at: '2019-02-03T21:00:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason: 'Location is closed on this day',
          is_orderable_error_reason_code: 102
        },
        pickup: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason: 'Location is closed on this day',
          is_orderable_error_reason_code: 102
        }
      },
      starts_at: '2019-02-03T16:30:00Z',
      weekday: 'Sunday'
    },
    {
      daypart: 'Dinner',
      ends_at: '2019-02-04T05:59:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason: 'Location is closed on this day',
          is_orderable_error_reason_code: 102
        },
        pickup: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason: 'Location is closed on this day',
          is_orderable_error_reason_code: 102
        }
      },
      starts_at: '2019-02-03T21:00:00Z',
      weekday: 'Sunday'
    },
    {
      daypart: 'Breakfast',
      ends_at: '2019-02-04T16:30:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: ['2019-02-04T13:00:00Z', '2019-02-04T16:30:00Z'],
          is_orderable: true
        },
        pickup: {
          hours: ['2019-02-04T13:00:00Z', '2019-02-04T16:30:00Z'],
          is_orderable: true
        }
      },
      starts_at: '2019-02-04T06:01:00Z',
      weekday: 'Monday'
    },
    {
      daypart: 'Lunch',
      ends_at: '2019-02-04T21:00:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: ['2019-02-04T16:30:00Z', '2019-02-04T21:00:00Z'],
          is_orderable: true
        },
        pickup: {
          hours: ['2019-02-04T16:30:00Z', '2019-02-04T21:00:00Z'],
          is_orderable: true
        }
      },
      starts_at: '2019-02-04T16:30:00Z',
      weekday: 'Monday'
    },
    {
      daypart: 'Dinner',
      ends_at: '2019-02-05T05:59:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason:
            'Service type not available during this daypart',
          is_orderable_error_reason_code: 200
        },
        pickup: {
          hours: ['2019-02-04T21:00:00Z', '2019-02-05T04:00:00Z'],
          is_orderable: true
        }
      },
      starts_at: '2019-02-04T21:00:00Z',
      weekday: 'Monday'
    },
    {
      daypart: 'Breakfast',
      ends_at: '2019-02-05T16:30:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: ['2019-02-05T13:00:00Z', '2019-02-05T16:30:00Z'],
          is_orderable: true
        },
        pickup: {
          hours: ['2019-02-05T13:00:00Z', '2019-02-05T16:30:00Z'],
          is_orderable: true
        }
      },
      starts_at: '2019-02-05T06:01:00Z',
      weekday: 'Tuesday'
    },
    {
      daypart: 'Lunch',
      ends_at: '2019-02-05T21:00:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: ['2019-02-05T16:30:00Z', '2019-02-05T21:00:00Z'],
          is_orderable: true
        },
        pickup: {
          hours: ['2019-02-05T16:30:00Z', '2019-02-05T21:00:00Z'],
          is_orderable: true
        }
      },
      starts_at: '2019-02-05T16:30:00Z',
      weekday: 'Tuesday'
    },
    {
      daypart: 'Dinner',
      ends_at: '2019-02-06T05:59:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason:
            'Service type not available during this daypart',
          is_orderable_error_reason_code: 200
        },
        pickup: {
          hours: ['2019-02-05T21:00:00Z', '2019-02-06T04:00:00Z'],
          is_orderable: true
        }
      },
      starts_at: '2019-02-05T21:00:00Z',
      weekday: 'Tuesday'
    },
    {
      daypart: 'Breakfast',
      ends_at: '2019-02-06T16:30:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: ['2019-02-06T13:00:00Z', '2019-02-06T16:30:00Z'],
          is_orderable: true
        },
        pickup: {
          hours: ['2019-02-06T13:00:00Z', '2019-02-06T16:30:00Z'],
          is_orderable: true
        }
      },
      starts_at: '2019-02-06T06:01:00Z',
      weekday: 'Wednesday'
    },
    {
      daypart: 'Lunch',
      ends_at: '2019-02-06T21:00:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: ['2019-02-06T16:30:00Z', '2019-02-06T21:00:00Z'],
          is_orderable: true
        },
        pickup: {
          hours: ['2019-02-06T16:30:00Z', '2019-02-06T21:00:00Z'],
          is_orderable: true
        }
      },
      starts_at: '2019-02-06T16:30:00Z',
      weekday: 'Wednesday'
    },
    {
      daypart: 'Dinner',
      ends_at: '2019-02-07T05:59:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason:
            'Service type not available during this daypart',
          is_orderable_error_reason_code: 200
        },
        pickup: {
          hours: ['2019-02-06T21:00:00Z', '2019-02-07T04:00:00Z'],
          is_orderable: true
        }
      },
      starts_at: '2019-02-06T21:00:00Z',
      weekday: 'Wednesday'
    },
    {
      daypart: 'Breakfast',
      ends_at: '2019-02-07T16:30:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: ['2019-02-07T13:00:00Z', '2019-02-07T16:30:00Z'],
          is_orderable: false,
          is_orderable_error_reason:
            'Daypart beyond last available order ahead time',
          is_orderable_error_reason_code: 202
        },
        pickup: {
          hours: ['2019-02-07T13:00:00Z', '2019-02-07T16:30:00Z'],
          is_orderable: false,
          is_orderable_error_reason:
            'Daypart beyond last available order ahead time',
          is_orderable_error_reason_code: 202
        }
      },
      starts_at: '2019-02-07T06:01:00Z',
      weekday: 'Thursday'
    },
    {
      daypart: 'Lunch',
      ends_at: '2019-02-07T21:00:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: ['2019-02-07T16:30:00Z', '2019-02-07T21:00:00Z'],
          is_orderable: false,
          is_orderable_error_reason:
            'Daypart beyond last available order ahead time',
          is_orderable_error_reason_code: 202
        },
        pickup: {
          hours: ['2019-02-07T16:30:00Z', '2019-02-07T21:00:00Z'],
          is_orderable: false,
          is_orderable_error_reason:
            'Daypart beyond last available order ahead time',
          is_orderable_error_reason_code: 202
        }
      },
      starts_at: '2019-02-07T16:30:00Z',
      weekday: 'Thursday'
    },
    {
      daypart: 'Dinner',
      ends_at: '2019-02-08T05:59:00Z',
      is_current: false,
      service_types: {
        delivery: {
          hours: [],
          is_orderable: false,
          is_orderable_error_reason:
            'Service type not available during this daypart',
          is_orderable_error_reason_code: 200
        },
        pickup: {
          hours: ['2019-02-07T21:00:00Z', '2019-02-08T04:00:00Z'],
          is_orderable: false,
          is_orderable_error_reason:
            'Daypart beyond last available order ahead time',
          is_orderable_error_reason_code: 202
        }
      },
      starts_at: '2019-02-07T21:00:00Z',
      weekday: 'Thursday'
    }
  ],
  delivery_minimum: 12.0,
  delivery_zone: [
    [40.753525, -73.9808607],
    [40.7687052, -73.9698744],
    [40.7629845, -73.9563131],
    [40.7621069, -73.9542103],
    [40.7479656, -73.9677286],
    [40.753525, -73.9808607]
  ],
  delivery_zone_description: 'Midtown East',
  description:
    '<p>Donec nec mauris eu mauris fringilla aliquet nec non orci. Nulla eget lacus magna. Donec a ante in purus aliquam posuere. Duis rutrum leo enim, id accumsan tellus cursus a. Mauris id tortor quis elit eleifend ultricies id in neque. Nulla et feugiat dolor, nec porttitor mi. Maecenas porta mi vitae condimentum placerat.</p>',
  distance: null,
  has_delivery: true,
  has_pickup: true,
  hours_delivery: [
    {
      close: '22:00',
      holiday: '',
      open: '7:00',
      weekday: 'Monday'
    },
    {
      close: '22:00',
      holiday: '',
      open: '7:00',
      weekday: 'Tuesday'
    },
    {
      close: '22:00',
      holiday: '',
      open: '7:00',
      weekday: 'Wednesday'
    },
    {
      close: '22:00',
      holiday: '',
      open: '7:00',
      weekday: 'Thursday'
    },
    {
      close: '22:00',
      holiday: '',
      open: '7:00',
      weekday: 'Friday'
    },
    {
      close: 'Closed',
      holiday: '',
      open: 'Closed',
      weekday: 'Saturday'
    },
    {
      close: 'Closed',
      holiday: '',
      open: 'Closed',
      weekday: 'Sunday'
    }
  ],
  hours_description: '<p>Mon-Fri 11am to 9pm, Sat-Sun 11am to 8pm</p>',
  hours_pickup: [
    {
      close: '22:00',
      holiday: '',
      open: '7:00',
      weekday: 'Monday'
    },
    {
      close: '22:00',
      holiday: '',
      open: '7:00',
      weekday: 'Tuesday'
    },
    {
      close: '22:00',
      holiday: '',
      open: '7:00',
      weekday: 'Wednesday'
    },
    {
      close: '22:00',
      holiday: '',
      open: '7:00',
      weekday: 'Thursday'
    },
    {
      close: '22:00',
      holiday: '',
      open: '7:00',
      weekday: 'Friday'
    },
    {
      close: 'Closed',
      holiday: '',
      open: 'Closed',
      weekday: 'Saturday'
    },
    {
      close: 'Closed',
      holiday: '',
      open: 'Closed',
      weekday: 'Sunday'
    }
  ],
  hours_store: ['7:00', '22:00'],
  in_delivery_zone: false,
  is_closed: false,
  is_closed_temp: false,
  is_coming_soon: false,
  is_hidden: false,
  is_new: false,
  large_image_url:
    'https://media-cdn.tripadvisor.com/media/photo-s/16/0b/ec/c5/we-believe-we-have-a.jpg',
  latitude: 40.7572285,
  location_id: 526,
  longitude: -73.9707207,
  name: 'Midtown East',
  payment_types: {
    delivery: ['cash', 'credit', 'house_account', 'como'],
    pickup: ['cash', 'credit', 'house_account', 'como']
  },
  phone_number: '212-555-5555',
  slug: 'midtown-east',
  small_image_url:
    'https://media-cdn.tripadvisor.com/media/photo-s/16/0b/ec/c5/we-believe-we-have-a.jpg',
  state_code: 'NY',
  street_address: '150 East 52nd Street',
  timezone: 'US/Central',
  valid_order_times: [],
  zip_code: '10022'
};

// past order
export const order = {
  address: {
    city: 'New York',
    customer_address_id: 158082,
    formatted_address: '150 E 52nd St, New York, NY 10022, USA',
    in_delivery_zone: true,
    latitude: 40.7571765,
    longitude: -73.9707321,
    state_code: 'NY',
    street_address: '150 East 52nd Street',
    unit: '1001',
    zip_code: '10022'
  },
  credit_card: {
    card_type: 'Visa',
    customer_card_id: 74043,
    last4: '1443',
    masked: '47XXXXXXXXXX1443'
  },
  discount: 0.0,
  items: [
    {
      id: 3733,
      instructions: '',
      made_for: '',
      name: 'Counter Culture Coffee Box',
      option_groups: [
        {
          id: 41,
          option_items: [
            {
              id: 7826,
              name: 'Small (serves 8)',
              price: 25.0
            }
          ]
        },
        {
          id: 42,
          option_items: [
            {
              id: 7830,
              name: 'Skim Milk',
              price: 0.0
            },
            {
              id: 7832,
              name: 'Cashew Milk',
              price: 0.0
            }
          ]
        }
      ],
      price: 0.0,
      quantity: 1,
      total_price: 25.0
    },
    {
      id: 1234,
      instructions: '',
      made_for: '',
      name: 'Corn Esquites',
      option_groups: [],
      price: 0.0,
      quantity: 1,
      total_price: 8.0
    },
    {
      id: 520,
      instructions: '',
      made_for: '',
      name: 'Crispy Fish Taco',
      option_groups: [],
      price: 0.0,
      quantity: 2,
      total_price: 5.5
    },
    {
      id: 143,
      instructions: '',
      made_for: '',
      name: 'Barbacoa Taco',
      option_groups: [],
      price: 0.0,
      quantity: 1,
      total_price: 5.5
    },
    {
      id: 231,
      instructions: '',
      made_for: '',
      name: 'Al Pastor Taco',
      option_groups: [],
      price: 0.0,
      quantity: 1,
      total_price: 5.5
    },
    {
      id: 3463,
      instructions: '',
      made_for: '',
      name: 'Vegetariano Quesadilla',
      option_groups: [],
      price: 0.0,
      quantity: 1,
      total_price: 10.0
    },
    {
      id: 242,
      instructions: '',
      made_for: '',
      name: 'Water',
      option_groups: [],
      price: 0.0,
      quantity: 2,
      total_price: 3.0
    },
    {
      id: 563,
      instructions: '',
      made_for: '',
      name: 'Horchata',
      option_groups: [],
      price: 0.0,
      quantity: 2,
      total_price: 5.0
    },
    {
      id: 352,
      instructions: '',
      made_for: '',
      name: 'Chips and Guac',
      option_groups: [],
      price: 0.0,
      quantity: 1,
      total_price: 18.0
    }
  ],
  location_id: 10,
  location_name: 'New York Catering',
  order_type: 'catering',
  order_type_str: 'Catering',
  orders_id: 1219557,
  payment_type: 'credit',
  payment_type_str: 'Credit',
  phone: '2028343641',
  refund: 0.0,
  requested_date: '3/8/2017',
  requested_time: '12:15AM - 12:45AM',
  service_type: 'delivery',
  service_type_str: 'Delivery',
  shipping: 0.0,
  status: 'open',
  submitted_date: '2/27/2017',
  submitted_time: '3:26 PM',
  subtotal: 91.0,
  surcharge: 0.0,
  tax: 8.08,
  timezone: 'US/Eastern',
  tip: 15.0,
  total: 114.08
};

export const lineItemsData = [
  {
    uuid: 'bc2fc7-hummus-with-pita',
    quantity: 1,
    madeFor: '',
    instructions: '',
    isValid: true,
    errors: [],
    productData: {
      allergen_classes:
        'allergen-gluten allergen-honey allergen-soybean-oil allergen-garlic allergen-sesame',
      allergens: 'gluten, honey, soybean oil, garlic, sesame',
      app_image_url:
        '//s3.amazonaws.com/betterboh/u/img/prod/46/1538752346_1531156389_800x800-classichummus.png',
      calories: 645,
      category_id: 1041,
      category_name: 'Add Something Extra',
      delivery_days: null,
      description: 'Creamy hummus made from organic chickpeas with pita bread',
      display_options: 0,
      end_date: null,
      end_date_str: '',
      height: null,
      id: 18378,
      increment: 1,
      ingredients: '',
      kds_groups: [],
      large_image_url:
        '//s3.amazonaws.com/betterboh/u/img/prod/46/1531156389_800x800-classichummus.png',
      length: null,
      max_quantity: 0,
      menu_position: 2,
      min_quantity: 1,
      name: 'Hummus with Pita',
      nutritional_info: {
        calories: 645,
        cholesterol: 0,
        dietary_fiber: 14,
        protein: 24,
        saturated_fat: 4,
        serving_size: '8.00',
        sodium: 1310,
        sugars: 10,
        total_carbs: 88,
        total_fat: 24,
        trans_fat: 0
      },
      option_groups: [],
      plu: '',
      price: '3.50',
      sales_tax_override: null,
      service_restrictions: null,
      short_description: 'Creamy hummus and chips',
      short_name: 'Hummus w/ Pita',
      shorthand: '',
      sizes: [],
      slug: 'hummus-with-pita',
      small_image_url:
        '//s3.amazonaws.com/betterboh/u/img/prod/46/1531156389_800x800-classichummus.png',
      start_date: null,
      start_date_str: '',
      tag_classes: '',
      tags: '',
      taxes: [],
      temperature: 'Cold',
      use_options_wizard: 0,
      weight: null,
      width: null
    },
    optionGroupMappings: []
  },
  {
    uuid: 'ae39a5-cookies',
    quantity: 1,
    madeFor: '',
    instructions: '',
    isValid: true,
    errors: [],
    productData: {
      allergen_classes: 'allergen-gluten allergen-eggs allergen-nuts',
      allergens: 'gluten, eggs, nuts',
      app_image_url:
        '//s3.amazonaws.com/betterboh/u/img/prod/46/1538665924_1511897776_800x800-cookies-extras.png',
      calories: 400,
      category_id: 1041,
      category_name: 'Add Something Extra',
      delivery_days: null,
      description:
        'House-baked, soft, chocolate chip cookies. Each order contains 2 cookies.',
      display_options: 0,
      end_date: null,
      end_date_str: '',
      height: null,
      id: 18376,
      increment: 1,
      ingredients: '',
      kds_groups: [],
      large_image_url:
        '//s3.amazonaws.com/betterboh/u/img/prod/46/1511897776_800x800-cookies-extras.png',
      length: null,
      max_quantity: 0,
      menu_position: 9,
      min_quantity: 1,
      name: 'Cookies',
      nutritional_info: {
        calories: 400,
        cholesterol: 30,
        dietary_fiber: 2,
        protein: 2,
        saturated_fat: 14,
        serving_size: '2.00',
        sodium: 240,
        sugars: 42,
        total_carbs: 48,
        total_fat: 26,
        trans_fat: 0
      },
      option_groups: [],
      plu: '',
      price: '1.50',
      sales_tax_override: null,
      service_restrictions: null,
      short_description: 'House-baked chocolate chip cookies',
      short_name: 'Cookies',
      shorthand: '',
      sizes: [],
      slug: 'cookies',
      small_image_url:
        '//s3.amazonaws.com/betterboh/u/img/prod/46/1511897776_800x800-cookies-extras.png',
      start_date: null,
      start_date_str: '',
      tag_classes: '',
      tags: '',
      taxes: [],
      temperature: 'Cold',
      use_options_wizard: 0,
      weight: null,
      width: null
    },
    optionGroupMappings: []
  }
];

export const orderData = {
  uuid: '51f619',
  customer: {},
  location_id: 526,
  service_type: 'pickup',
  requested_at: 'asap',
  cart: [
    {
      id: 18378,
      made_for: '',
      instructions: '',
      quantity: 1,
      option_groups: []
    },
    {
      id: 18376,
      made_for: '',
      instructions: '',
      quantity: 1,
      option_groups: []
    }
  ],
  include_utensils: true,
  notes_for_store: '',
  promo_code: '',
  payment_type: 'credit',
  discounts_applied: [],
  credit_card: {},
  wantsFutureOrder: false
};

export const accountDetails = {
  fullName: 'John Allen',
  email: 'J.Allen@gmail.com',
  defaultAddress: {
    city: 'New York',
    company: 'Sanctuary',
    contact_name: 'John',
    contact_phone: '2029175555',
    created_utc: '1996-02-02T03:04:05.000Z',
    customer_address_id: 12345,
    description: 'Work',
    is_default: true,
    last_used_utc: '1996-02-02T03:04:05.000Z',
    latitude: 40.123,
    longitude: -120.23232,
    notes: 'Ring the doorbell',
    state_code: 'NY',
    street_address: '110 Bowery Ave.',
    unit: '4',
    zip_code: 11205
  },
  defaultPayment: {
    card_type: 'Visa',
    customer_card_id: 123,
    is_default: true,
    is_levelup: false,
    last4: '4316'
  },
  payments: [
    {
      card_type: 'Visa',
      customer_card_id: 123,
      is_default: true,
      is_levelup: false,
      last4: '4316'
    }
  ],
  addresses: [
    {
      city: 'New York',
      company: 'Sanctuary',
      contact_name: 'John',
      contact_phone: '2029175555',
      created_utc: '1996-02-02T03:04:05.000Z',
      customer_address_id: 12345,
      description: 'Work',
      is_default: true,
      last_used_utc: '1996-02-02T03:04:05.000Z',
      latitude: 40.123,
      longitude: -120.23232,
      notes: 'Ring the doorbell',
      state_code: 'NY',
      street_address: '110 Bowery Ave.',
      unit: '4',
      zip_code: 11205
    }
  ]
};

export const menuItem = {
  allergen_classes: '',
  allergens: '',
  app_image_url: null,
  calories: 'n/a',
  category_id: 1113,
  category_name: 'Entradas',
  delivery_days: null,
  description:
    'Corn from the cob, cotija cheese, homemade morita mayo and chili pequin',
  display_options: 0,
  end_date: null,
  end_date_str: '',
  height: null,
  id: 19708,
  increment: 1,
  ingredients: null,
  kds_groups: [],
  large_image_url:
    '//s3.amazonaws.com/betterboh/u/img/prod/51/1513812916_esquites_lg.jpg',
  length: null,
  max_quantity: 0,
  menu_position: 1,
  min_quantity: 1,
  name: 'Corn Esquites',
  nutritional_info: {},
  option_groups: [],
  plu: '',
  price: '3.95',
  sales_tax_override: null,
  service_restrictions: null,
  short_description: '',
  short_name: 'Corn Esquites',
  shorthand: '',
  sizes: [],
  slug: 'corn-esquites',
  small_image_url:
    '//s3.amazonaws.com/betterboh/u/img/prod/51/1513812916_esquites_sm.jpg',
  start_date: null,
  start_date_str: '',
  tag_classes: '',
  tags: '',
  taxes: [],
  temperature: 'Cold',
  use_options_wizard: 0,
  weight: null,
  width: null
};

export const rewards = [
  {
    credit_amount: 5.0,
    credit_balance: 14.51,
    credit_total: 55.0,
    description: '$5 off every $20 spent',
    discount_amount: null,
    discount_name: null,
    earned_for: 'Online Orders',
    is_auto: false,
    loyalty_type: 'Credit',
    name: '$5 off every $20',
    orders_current: null,
    orders_total: null,
    progress: 77.75,
    progress_str: '$15 of $20 (77%)',
    spend_current: 15.55,
    spend_total: 395.55,
    spend_type: 'Dollars',
    threshold: 20.0,
    threshold_str: '$5 for every $20 spent',
    valid_for: 'All Orders'
  },
  {
    credit_amount: 10.0,
    credit_balance: 0.0,
    credit_total: 0.0,
    description: '$10 off for every $100 spent',
    discount_amount: null,
    discount_name: null,
    earned_for: 'Catering Orders',
    is_auto: false,
    loyalty_type: 'Credit',
    name: 'Brandibble Rewards',
    orders_current: null,
    orders_total: null,
    progress: 0.0,
    progress_str: '$0 of $100 (0%)',
    spend_current: 0.0,
    spend_total: 0.0,
    spend_type: 'Dollars',
    threshold: 100.0,
    threshold_str: '$10 for every $100 spent',
    valid_for: 'All Orders'
  },
  {
    credit_amount: 10.0,
    credit_balance: 0.0,
    credit_total: 0.0,
    description: '$10 off for every $100 spent',
    discount_amount: null,
    discount_name: null,
    earned_for: 'Catering Orders',
    is_auto: false,
    loyalty_type: 'Promo Code',
    name: 'Catering Rewards',
    orders_current: null,
    orders_total: null,
    progress: 0.0,
    progress_str: '$0 of $100 (0%)',
    spend_current: null,
    spend_total: null,
    spend_type: 'Frequency',
    threshold: 5,
    threshold_str: '$10 for every $100 spent',
    valid_for: 'All Orders'
  }
];

export const checkoutDetails = {
  locationName: 'Fort Greene',
  requestedDate: '5/20/2019',
  requestedTime: '11:35AM',
  pickupBy: 'Hugh',
  phone: '15512213610',
  defaultPayment: {
    card_type: 'Visa',
    customer_card_id: 123,
    is_default: true,
    is_levelup: false,
    last4: '4316'
  },
  payments: [
    {
      card_type: 'Visa',
      customer_card_id: 123,
      is_default: true,
      is_levelup: false,
      last4: '4316'
    }
  ]
};

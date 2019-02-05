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
  location_id: 1,
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
  subtotal: 25.0,
  surcharge: 0.0,
  tax: 2.22,
  timezone: 'US/Eastern',
  tip: 1.0,
  total: 28.22
};

export const MockLocation = {
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
  location_id: 1,
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

import React, { Component } from 'react';
import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import { Constants } from 'brandibble-redux';
import { Card, Text, LinkButton, MapboxMap, LocationCard  } from 'components';

class WelcomeView extends Component {
  handlePickupClick = () => {
    const { actions } = this.props;

    actions.setOrderAndServiceType({
      orderType: Constants.OrderTypes.ONLINE_ORDERING,
      serviceType: Constants.ServiceTypes.PICKUP
    });
  };

  handleDeliveryClick = () => {
    const { actions } = this.props;

    actions.setOrderAndServiceType({
      orderType: Constants.OrderTypes.ONLINE_ORDERING,
      serviceType: Constants.ServiceTypes.DELIVERY
    });
  };

  handleCateringClick = () => {
    const { actions } = this.props;

    actions.setOrderType(Constants.OrderTypes.CATERING);
  };

  render() {
    const { Language, deliveryIsAvailable, locations } = this.props;

    // prettier-ignore
    const mockLocation = {
      "city": "New York",
      "cross_streets": "Between 3rd and Lexington",
      "dayparts": [
          {
              "daypart": "Breakfast",
              "ends_at": "2019-02-01T16:30:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [
                          "2019-02-01T13:00:00Z",
                          "2019-02-01T16:30:00Z"
                      ],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Daypart has passed",
                      "is_orderable_error_reason_code": 201
                  },
                  "pickup": {
                      "hours": [
                          "2019-02-01T13:00:00Z",
                          "2019-02-01T16:30:00Z"
                      ],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Daypart has passed",
                      "is_orderable_error_reason_code": 201
                  }
              },
              "starts_at": "2019-02-01T06:01:00Z",
              "weekday": "Friday"
          },
          {
              "daypart": "Lunch",
              "ends_at": "2019-02-01T21:00:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [
                          "2019-02-01T16:30:00Z",
                          "2019-02-01T21:00:00Z"
                      ],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Daypart has passed",
                      "is_orderable_error_reason_code": 201
                  },
                  "pickup": {
                      "hours": [
                          "2019-02-01T16:30:00Z",
                          "2019-02-01T21:00:00Z"
                      ],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Daypart has passed",
                      "is_orderable_error_reason_code": 201
                  }
              },
              "starts_at": "2019-02-01T16:30:00Z",
              "weekday": "Friday"
          },
          {
              "daypart": "Dinner",
              "ends_at": "2019-02-02T05:59:00Z",
              "is_current": true,
              "service_types": {
                  "delivery": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Service type not available during this daypart",
                      "is_orderable_error_reason_code": 200
                  },
                  "pickup": {
                      "hours": [
                          "2019-02-01T21:00:00Z",
                          "2019-02-02T04:00:00Z"
                      ],
                      "is_orderable": true
                  }
              },
              "starts_at": "2019-02-01T21:00:00Z",
              "weekday": "Friday"
          },
          {
              "daypart": "Breakfast",
              "ends_at": "2019-02-02T16:30:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Location is closed on this day",
                      "is_orderable_error_reason_code": 102
                  },
                  "pickup": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Location is closed on this day",
                      "is_orderable_error_reason_code": 102
                  }
              },
              "starts_at": "2019-02-02T06:01:00Z",
              "weekday": "Saturday"
          },
          {
              "daypart": "Lunch",
              "ends_at": "2019-02-02T21:00:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Location is closed on this day",
                      "is_orderable_error_reason_code": 102
                  },
                  "pickup": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Location is closed on this day",
                      "is_orderable_error_reason_code": 102
                  }
              },
              "starts_at": "2019-02-02T16:30:00Z",
              "weekday": "Saturday"
          },
          {
              "daypart": "Dinner",
              "ends_at": "2019-02-03T05:59:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Location is closed on this day",
                      "is_orderable_error_reason_code": 102
                  },
                  "pickup": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Location is closed on this day",
                      "is_orderable_error_reason_code": 102
                  }
              },
              "starts_at": "2019-02-02T21:00:00Z",
              "weekday": "Saturday"
          },
          {
              "daypart": "Breakfast",
              "ends_at": "2019-02-03T16:30:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Location is closed on this day",
                      "is_orderable_error_reason_code": 102
                  },
                  "pickup": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Location is closed on this day",
                      "is_orderable_error_reason_code": 102
                  }
              },
              "starts_at": "2019-02-03T06:01:00Z",
              "weekday": "Sunday"
          },
          {
              "daypart": "Lunch",
              "ends_at": "2019-02-03T21:00:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Location is closed on this day",
                      "is_orderable_error_reason_code": 102
                  },
                  "pickup": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Location is closed on this day",
                      "is_orderable_error_reason_code": 102
                  }
              },
              "starts_at": "2019-02-03T16:30:00Z",
              "weekday": "Sunday"
          },
          {
              "daypart": "Dinner",
              "ends_at": "2019-02-04T05:59:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Location is closed on this day",
                      "is_orderable_error_reason_code": 102
                  },
                  "pickup": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Location is closed on this day",
                      "is_orderable_error_reason_code": 102
                  }
              },
              "starts_at": "2019-02-03T21:00:00Z",
              "weekday": "Sunday"
          },
          {
              "daypart": "Breakfast",
              "ends_at": "2019-02-04T16:30:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [
                          "2019-02-04T13:00:00Z",
                          "2019-02-04T16:30:00Z"
                      ],
                      "is_orderable": true
                  },
                  "pickup": {
                      "hours": [
                          "2019-02-04T13:00:00Z",
                          "2019-02-04T16:30:00Z"
                      ],
                      "is_orderable": true
                  }
              },
              "starts_at": "2019-02-04T06:01:00Z",
              "weekday": "Monday"
          },
          {
              "daypart": "Lunch",
              "ends_at": "2019-02-04T21:00:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [
                          "2019-02-04T16:30:00Z",
                          "2019-02-04T21:00:00Z"
                      ],
                      "is_orderable": true
                  },
                  "pickup": {
                      "hours": [
                          "2019-02-04T16:30:00Z",
                          "2019-02-04T21:00:00Z"
                      ],
                      "is_orderable": true
                  }
              },
              "starts_at": "2019-02-04T16:30:00Z",
              "weekday": "Monday"
          },
          {
              "daypart": "Dinner",
              "ends_at": "2019-02-05T05:59:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Service type not available during this daypart",
                      "is_orderable_error_reason_code": 200
                  },
                  "pickup": {
                      "hours": [
                          "2019-02-04T21:00:00Z",
                          "2019-02-05T04:00:00Z"
                      ],
                      "is_orderable": true
                  }
              },
              "starts_at": "2019-02-04T21:00:00Z",
              "weekday": "Monday"
          },
          {
              "daypart": "Breakfast",
              "ends_at": "2019-02-05T16:30:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [
                          "2019-02-05T13:00:00Z",
                          "2019-02-05T16:30:00Z"
                      ],
                      "is_orderable": true
                  },
                  "pickup": {
                      "hours": [
                          "2019-02-05T13:00:00Z",
                          "2019-02-05T16:30:00Z"
                      ],
                      "is_orderable": true
                  }
              },
              "starts_at": "2019-02-05T06:01:00Z",
              "weekday": "Tuesday"
          },
          {
              "daypart": "Lunch",
              "ends_at": "2019-02-05T21:00:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [
                          "2019-02-05T16:30:00Z",
                          "2019-02-05T21:00:00Z"
                      ],
                      "is_orderable": true
                  },
                  "pickup": {
                      "hours": [
                          "2019-02-05T16:30:00Z",
                          "2019-02-05T21:00:00Z"
                      ],
                      "is_orderable": true
                  }
              },
              "starts_at": "2019-02-05T16:30:00Z",
              "weekday": "Tuesday"
          },
          {
              "daypart": "Dinner",
              "ends_at": "2019-02-06T05:59:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Service type not available during this daypart",
                      "is_orderable_error_reason_code": 200
                  },
                  "pickup": {
                      "hours": [
                          "2019-02-05T21:00:00Z",
                          "2019-02-06T04:00:00Z"
                      ],
                      "is_orderable": true
                  }
              },
              "starts_at": "2019-02-05T21:00:00Z",
              "weekday": "Tuesday"
          },
          {
              "daypart": "Breakfast",
              "ends_at": "2019-02-06T16:30:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [
                          "2019-02-06T13:00:00Z",
                          "2019-02-06T16:30:00Z"
                      ],
                      "is_orderable": true
                  },
                  "pickup": {
                      "hours": [
                          "2019-02-06T13:00:00Z",
                          "2019-02-06T16:30:00Z"
                      ],
                      "is_orderable": true
                  }
              },
              "starts_at": "2019-02-06T06:01:00Z",
              "weekday": "Wednesday"
          },
          {
              "daypart": "Lunch",
              "ends_at": "2019-02-06T21:00:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [
                          "2019-02-06T16:30:00Z",
                          "2019-02-06T21:00:00Z"
                      ],
                      "is_orderable": true
                  },
                  "pickup": {
                      "hours": [
                          "2019-02-06T16:30:00Z",
                          "2019-02-06T21:00:00Z"
                      ],
                      "is_orderable": true
                  }
              },
              "starts_at": "2019-02-06T16:30:00Z",
              "weekday": "Wednesday"
          },
          {
              "daypart": "Dinner",
              "ends_at": "2019-02-07T05:59:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Service type not available during this daypart",
                      "is_orderable_error_reason_code": 200
                  },
                  "pickup": {
                      "hours": [
                          "2019-02-06T21:00:00Z",
                          "2019-02-07T04:00:00Z"
                      ],
                      "is_orderable": true
                  }
              },
              "starts_at": "2019-02-06T21:00:00Z",
              "weekday": "Wednesday"
          },
          {
              "daypart": "Breakfast",
              "ends_at": "2019-02-07T16:30:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [
                          "2019-02-07T13:00:00Z",
                          "2019-02-07T16:30:00Z"
                      ],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Daypart beyond last available order ahead time",
                      "is_orderable_error_reason_code": 202
                  },
                  "pickup": {
                      "hours": [
                          "2019-02-07T13:00:00Z",
                          "2019-02-07T16:30:00Z"
                      ],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Daypart beyond last available order ahead time",
                      "is_orderable_error_reason_code": 202
                  }
              },
              "starts_at": "2019-02-07T06:01:00Z",
              "weekday": "Thursday"
          },
          {
              "daypart": "Lunch",
              "ends_at": "2019-02-07T21:00:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [
                          "2019-02-07T16:30:00Z",
                          "2019-02-07T21:00:00Z"
                      ],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Daypart beyond last available order ahead time",
                      "is_orderable_error_reason_code": 202
                  },
                  "pickup": {
                      "hours": [
                          "2019-02-07T16:30:00Z",
                          "2019-02-07T21:00:00Z"
                      ],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Daypart beyond last available order ahead time",
                      "is_orderable_error_reason_code": 202
                  }
              },
              "starts_at": "2019-02-07T16:30:00Z",
              "weekday": "Thursday"
          },
          {
              "daypart": "Dinner",
              "ends_at": "2019-02-08T05:59:00Z",
              "is_current": false,
              "service_types": {
                  "delivery": {
                      "hours": [],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Service type not available during this daypart",
                      "is_orderable_error_reason_code": 200
                  },
                  "pickup": {
                      "hours": [
                          "2019-02-07T21:00:00Z",
                          "2019-02-08T04:00:00Z"
                      ],
                      "is_orderable": false,
                      "is_orderable_error_reason": "Daypart beyond last available order ahead time",
                      "is_orderable_error_reason_code": 202
                  }
              },
              "starts_at": "2019-02-07T21:00:00Z",
              "weekday": "Thursday"
          }
      ],
      "delivery_minimum": 12.0,
      "delivery_zone": [
          [
              40.753525,
              -73.9808607
          ],
          [
              40.7687052,
              -73.9698744
          ],
          [
              40.7629845,
              -73.9563131
          ],
          [
              40.7621069,
              -73.9542103
          ],
          [
              40.7479656,
              -73.9677286
          ],
          [
              40.753525,
              -73.9808607
          ]
      ],
      "delivery_zone_description": "Midtown East",
      "description": "<p>Donec nec mauris eu mauris fringilla aliquet nec non orci. Nulla eget lacus magna. Donec a ante in purus aliquam posuere. Duis rutrum leo enim, id accumsan tellus cursus a. Mauris id tortor quis elit eleifend ultricies id in neque. Nulla et feugiat dolor, nec porttitor mi. Maecenas porta mi vitae condimentum placerat.</p>",
      "distance": null,
      "has_delivery": true,
      "has_pickup": true,
      "hours_delivery": [
          {
              "close": "22:00",
              "holiday": "",
              "open": "7:00",
              "weekday": "Monday"
          },
          {
              "close": "22:00",
              "holiday": "",
              "open": "7:00",
              "weekday": "Tuesday"
          },
          {
              "close": "22:00",
              "holiday": "",
              "open": "7:00",
              "weekday": "Wednesday"
          },
          {
              "close": "22:00",
              "holiday": "",
              "open": "7:00",
              "weekday": "Thursday"
          },
          {
              "close": "22:00",
              "holiday": "",
              "open": "7:00",
              "weekday": "Friday"
          },
          {
              "close": "Closed",
              "holiday": "",
              "open": "Closed",
              "weekday": "Saturday"
          },
          {
              "close": "Closed",
              "holiday": "",
              "open": "Closed",
              "weekday": "Sunday"
          }
      ],
      "hours_description": "<p>Mon-Fri 11am to 9pm, Sat-Sun 11am to 8pm</p>",
      "hours_pickup": [
          {
              "close": "22:00",
              "holiday": "",
              "open": "7:00",
              "weekday": "Monday"
          },
          {
              "close": "22:00",
              "holiday": "",
              "open": "7:00",
              "weekday": "Tuesday"
          },
          {
              "close": "22:00",
              "holiday": "",
              "open": "7:00",
              "weekday": "Wednesday"
          },
          {
              "close": "22:00",
              "holiday": "",
              "open": "7:00",
              "weekday": "Thursday"
          },
          {
              "close": "22:00",
              "holiday": "",
              "open": "7:00",
              "weekday": "Friday"
          },
          {
              "close": "Closed",
              "holiday": "",
              "open": "Closed",
              "weekday": "Saturday"
          },
          {
              "close": "Closed",
              "holiday": "",
              "open": "Closed",
              "weekday": "Sunday"
          }
      ],
      "hours_store": [
          "7:00",
          "22:00"
      ],
      "in_delivery_zone": false,
      "is_closed": false,
      "is_closed_temp": false,
      "is_coming_soon": false,
      "is_hidden": false,
      "is_new": false,
      "large_image_url": "https://media-cdn.tripadvisor.com/media/photo-s/16/0b/ec/c5/we-believe-we-have-a.jpg",
      "latitude": 40.7572285,
      "location_id": 1,
      "longitude": -73.9707207,
      "name": "Midtown East",
      "payment_types": {
          "delivery": [
              "cash",
              "credit",
              "house_account",
              "como"
          ],
          "pickup": [
              "cash",
              "credit",
              "house_account",
              "como"
          ]
      },
      "phone_number": "212-555-5555",
      "slug": "midtown-east",
      "small_image_url": "https://media-cdn.tripadvisor.com/media/photo-s/16/0b/ec/c5/we-believe-we-have-a.jpg",
      "state_code": "NY",
      "street_address": "150 East 52nd Street",
      "timezone": "US/Central",
      "valid_order_times": [],
      "zip_code": "10022"
    };

    return (
      <main className="container">
        <div className="relative">
          <Card className="md:col-4 pb1">
            <div className="text-center my2">
              <Text
                size="small"
                className="block text-semibold uppercase color-light-gray letter-spacing-sm"
              >
                {Language.t('welcome.adlib')}
              </Text>
              <Text size="headline" className="block my1">
                {Language.t('welcome.headline')}
              </Text>
              <Text size="description" className="block color-light-gray">
                {Language.t('welcome.description')}
              </Text>
            </div>
            <div>
              {locations[Constants.OrderTypes.ONLINE_ORDERING].length ? (
                <LinkButton iconLeft="Bag" onClick={this.handlePickupClick}>
                  <Text size="cta" className="color-light-gray">
                    <span>{Language.t('welcome.orderFor')}</span>{' '}
                    <span className="text-semibold color-gray">
                      {Language.t('welcome.orderTypes.pickup')}
                    </span>
                  </Text>
                </LinkButton>
              ) : null}
              
              {deliveryIsAvailable ? (
                <LinkButton iconLeft="Car" onClick={this.handleDeliveryClick}>
                  <Text size="cta" className="color-light-gray">
                    <span>{Language.t('welcome.orderFor')}</span>{' '}
                    <span className="text-semibold color-gray">
                      {Language.t('welcome.orderTypes.delivery')}
                    </span>
                  </Text>
                </LinkButton>
              ) : null}

              {locations[Constants.OrderTypes.CATERING].length ? (
                <LinkButton iconLeft="Group" onClick={this.handleCateringClick}>
                  <Text size="cta" className="color-light-gray">
                    <span>{Language.t('welcome.orderFor')}</span>{' '}
                    <span className="text-semibold color-gray">
                      {Language.t('welcome.orderTypes.catering')}
                    </span>
                  </Text>
                </LinkButton>
              ) : null}
            </div>
          </Card>
          <div className="col-12 md:col-3">
            <LocationCard {...mockLocation} />
          </div>
          <Card className="md:col-4">
            <MapboxMap {...mapbox} />
          </Card>
        </div>
      </main>
    );
  }
}

export default withComponents(withLocales(WelcomeView));

# `<DeliveryForm />`

This component is a form that lets users to enter and set the delivery address for their order.

## Available Props

| Prop                         | PropType              | Description                                                        | Default  |
| ---------------------------- | --------------------- | ------------------------------------------------------------------ | -------- |
| `orderRef`                   | `OrderRefModel`       | Open Tender Order Ref Model                                        | `{}`     |
| `serviceType`                | `string`              | Service type on the order ref                                      | delivery |
| `selectedGeocoderFeature`    | `GeoJSONFeatureModel` | Mapbox Geocoder Feature                                            | `null`   |
| `geolocations`               | `array`               | List of geolocations from Open Tender (Open Tender Location Model) | `[]`     |
| `fetchGeolocationsStatus`    | `string`              | fetchGeolocations status from Open Tender                          | IDLE     |
| `setDeliveryFormAddressUnit` | `func`                | Action from redux that sets the unit of the address                | `f => f` |
| `clearDeliveryFormAddress`   | `func`                | Action from redux that clears the delivery address                 | `f => f` |
| `confirmChangeToDelivery`    | `func`                | Action from redux that confirms changing to delivery               | `f => f` |
| `address`                    | `AddressModel`        | Address Model                                                      | `null`   |

## Registering a custom `<DeliveryForm />`

The `RegistryLoader` will look for a component registered at `components.DeliveryForm` and expects the key `import` to return a function that uses dynamic import syntax.

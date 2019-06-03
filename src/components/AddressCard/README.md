# `<AddressCard />`

This component is a button that shows an address from the Mapbox Geocoder.

## Available Props

| Prop          | PropType              | Description                                             | Default  |
| ------------- | --------------------- | ------------------------------------------------------- | -------- |
| `className`   | `string`              | Classes to be added to the rendered `button` class list | `''`     |
| `address`     | `AddressModel`        | Address Model                                           | `null`   |
| `feature`     | `GeoJSONFeatureModel` | Mapbox Geocoder Feature                                 | `null`   |
| `onClick`     | `func`                | Callback that runs when the button is clicked           | `f => f` |
| `buttonLabel` | `string`              | Label for the button                                    | `''`     |

## Registering a custom `<AddressCard />`

The `RegistryLoader` will look for a component registered at `components.registry.AddressCard` and expects the key `import` to return a function that uses dynamic import syntax.

# `<MiniCart />`

This component is used to display active cart information.

## Available Props

| Prop               | PropType        | Description                                      | Default |
| ------------------ | --------------- | ------------------------------------------------ | ------- |
| `handleClose`      | `func`          | Function that fires when close button is clicked | `noop`  |
| `currentOrder`     | `OrderModel`    | Open Tender Order Model                          | `{}`    |
| `currentCustomer`  | `CustomerModel` | Open Tender Customer Model                       | `null`  |
| `lineItemsData`    | `array`         | Array of lineItems in redux                      | `[]`    |
| `currentLocation`  | `LocationModel` | Open Tender Location Model                       | `{}`    |
| `subtotal`         | `string`        | The current subtotal for all items in the cart   | `''`    |
| `miniCartIsActive` | `bool`          | Indicates whether the MiniCart should be visible | `false` |

## Registering a custom `<MiniCart />`

The `RegistryLoader` will look for a component registered at `components.registry.MiniCart` and expects the key `import` to return a function that uses dynamic import syntax.

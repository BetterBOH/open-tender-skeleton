# `<MiniCart />`

This component is used to display active cart information.

## Available Props

| Prop              | PropType | Description                                      | Default |
| ----------------- | -------- | ------------------------------------------------ | ------- |
| `handleClose`     | `func`   | Function that fires when close button is clicked | `noop`  |
| `currentOrder`    | `object` | The current order in redux                       | `{}`    |
| `currentCustomer` | `object` | The current customer (if authenticated)          | `{}`    |
| `lineItemData`    | `array`  | Array of lineItems in redux                      | `[]`    |
| `currentLocation` | `object` | The current active location                      | `{}`    |
| `Subtotal`        | `string` | The current subtotal for all items in the cart   | `""`    |

## Registering a custom `<MiniCart />`

The `RegistryLoader` will look for a component registered at `components.registry.MiniCart` and expects the key `import` to return a function that uses dynamic import syntax.

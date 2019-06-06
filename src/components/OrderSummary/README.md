# `<OrderSummary />`

This component is used to show a summary of the current order in the `MiniCart`.

## Available Props

| Prop              | PropType        | Description                | Default |
| ----------------- | --------------- | -------------------------- | ------- |
| `currentLocation` | `LocationModel` | Open Tender Location Model | `{}`    |
| `currentOrder`    | `OrderModel`    | Open Tender Order Model    | `{}`    |
| `currentCustomer` | `CustomerModel` | Open Tender Customer Model | `null`  |

## Registering a custom `<OrderSummary />`

The `RegistryLoader` will look for a component registered at `components.registry.OrderSummary` and expects the key `import` to return a function that uses dynamic import syntax.
